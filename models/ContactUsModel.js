   class ContactUsModel {

        db;
        columns = {
                    id: 0,
                    client_ip: "",
                    first_name: "",
                    last_name: "",
                    email: "",
                    subject: "",
                    message: "",
                    created_at: "0000-00-00 00:00:00",
                    updated_at: "0000-00-00 00:00:00",
                  };

        constructor(db) {
            this.db = db;
        };

        applyFromJson(json) {
            if (json.client_ip !== undefined) {
                this.columns.client_ip = json.client_ip;
            }
            if (json.firstname !== undefined) {
                this.columns.first_name = json.firstname;
            }
            if (json.lastname !== undefined) {
                this.columns.last_name = json.lastname;
            }
            if (json.email !== undefined) {
                this.columns.email = json.email;
            }
            if (json.subject !== undefined) {
                this.columns.subject = json.subject;
            }
            if (json.message !== undefined) {
                this.columns.message = json.message;
            }
        };

        async applyFromToken(base64Token) {
            const json = JSON.parse(Buffer.from(base64Token, 'base64').toString('utf8'));
            try {

                const sql = "SELECT * FROM contacts WHERE " +
                            "id = ? AND client_ip = ? AND first_name = ? AND last_name = ? AND email = ? ";
                const data = [json.id, json.client_ip, json.first_name, json.last_name, json.email];

                const [rows] = await this.db.execute(sql, data); 

                if (rows.length === 0) {
                    return this.columns;
                }
                this.columns = rows[0];

                return this.columns;      
            } catch (err) {
                console.error("Sql failed: applyFromToken(base64Token) - " + err);
            };
            return this.columns;
        };

        async applyById(id) {
            try {

                const sql = "SELECT * FROM contacts WHERE " +
                            "id = ?";

                const data = [id];

                const [rows] = await this.db.execute(sql, data); 

                this.columns = rows[0];

                return this.columns;      
            } catch (err) {
                console.error("Sql failed: applyById(id) - " + err);
            };
            return null;
        };       

        getToken(id) {
            this.columns.id = id;
            this.applyById(id);
            
            var data = {
                        id: this.columns.id,
                        client_ip: this.columns.client_ip,
                        first_name: this.columns.first_name,
                        last_name: this.columns.last_name,
                        email: this.columns.email
                    }
            return  Buffer.from(JSON.stringify(data)).toString('base64');
        }

        async insert() {
            try {

                const sql = "INSERT INTO contacts (client_ip, first_name, last_name, email, subject, message, created_at) " +
                            " VALUES (?, ?, ?, ?, ?, ?, NOW())";

                const values = [
                    this.columns.client_ip, 
                    this.columns.first_name, 
                    this.columns.last_name, 
                    this.columns.email, 
                    this.columns.subject, 
                    this.columns.message
                ];

                const [result] = await this.db.execute(sql, values);

                this.applyById(result.insertId);

                return result.insertId;

            } catch (err) {
                console.error("?Sql failed: insert() - " + err);
            }
        }

        toJson() {
            return this.columns;
        };

        toString() {
            return this.columns;
        };

    }

module.exports = ContactUsModel;
