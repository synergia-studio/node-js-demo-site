# node-js-demo-site
Simple and powerful Node JS demo site

First create MySql database: node-js-demo-site.sql

Import MySql dump file located at ./databases/node-js-demo-site.sql

Change ./env file to meeet your MySql database login parameters:

SQL_HOST="localhost"
SQL_USER="root"
SQL_PASSWORD="*******"
SQL_DATABASE="node_js_demo_site"

Run localhost server with:

node index.js

Open in browser: http://localhost:3000/
