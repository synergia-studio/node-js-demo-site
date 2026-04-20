  const path = require('path');

  class ContactUsController {

        app;
        db;
        req;
        res;
s
        constructor(app, db, req, res) {
            this.app = app;
            this.db  = db;
            this.req = req;
            this.res = res;
        };

        // GET /contact-us 
        index() {
            var hostname = this.req.headers.host; // hostname = 'localhost:3000'
            this.res.render(path.join(__dirname, '../views/contact-us-form.ejs'), {
                site_title  : 'Contact Us form',
                site_url: 'http://' + hostname + '/',
                contact_menu_link_active: 'active',
                header_title: "Contact",
                main_section_title: 'Contact Us'
            });
        };

        // POST /contact-us 
        async create() { 
            var hostname = this.req.headers.host; // hostname = 'localhost:3000';
            const ContactUsModel = require('../models/ContactUsModel');
            const contactUs =  new ContactUsModel(this.db);
            this.req.body.client_ip = this.req.ip.replace('::ffff:', '');
            contactUs.applyFromJson(this.req.body);
            const lastInsertId = await contactUs.insert();
            contactUs.applyById(lastInsertId);
            const base64Json = contactUs.getToken(lastInsertId);
            this.res.json({
                success: true,
                message: 'Saved successfully',
                thankyouurl: 'http://' + hostname + '/contact-us/thank-you',
                redirect: 'http://' + hostname + '/contact-us/mail/' + base64Json
            });
        }

        // GET /contact-us/mail/:base64Json
        async mail() {
            var hostname = this.req.headers.host; // hostname = 'localhost:3000';
            const base64Json = this.req.params.base64Json;
            const ContactUsModel = require('../models/ContactUsModel');
            const contactUs =  new ContactUsModel(this.db);
            var item = await contactUs.applyFromToken(base64Json);
            
            this.res.render(path.join(__dirname, '../views/contact-us-mail.ejs'), {
                site_title: 'Contact Us email from http://' + this.req.headers.host + '/contact-us/',
                site_url: 'http://' + this.req.headers.host + '/',
                item: item
            });
        };

        // GET /contact-us/thank-you
        thank_you() {
            var hostname = this.req.headers.host; // hostname = 'localhost:3000'
            this.res.render(path.join(__dirname, '../views/contact-us-thank-you.ejs'), {
                site_title  : 'Thank You Page',
                site_url: 'http://' + hostname + '/',
                header_title: "Thank You",
                main_section_title: 'Thank You'
            });
        };
    };

module.exports = ContactUsController;

