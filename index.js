const express = require("express");

const app = express();

app.use(express.json()); // replaces bodyParser.json()
app.use(express.urlencoded({ extended: true })); // replaces bodyParser.urlencoded()
app.use(express.static('public'));
app.use(express.json());

// example: EJS
app.set('view engine', 'ejs');
app.set('views', './view');


require('dotenv/config') ;
const mysql = require("mysql2/promise");
const db =  mysql.createPool({
              host: process.env.SQL_HOST,
              user: process.env.SQL_USER,
              password: process.env.SQL_PASSWORD,
              database: process.env.SQL_DATABASE,
              waitForConnections: true,
              connectionLimit: 10
          });

require('./routes/home')(app);
require('./routes/about-us.js')(app);
require('./routes/contact-us')(app, db);
require('./routes/cv')(app);
require('./routes/technologies')(app);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
