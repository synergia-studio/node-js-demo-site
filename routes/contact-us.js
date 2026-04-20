  const path = require('path');
   
  module.exports = (app, db) => { 

  app.get('/contact-us/mail/:base64Json', async (req, res) => {
    const ContactUsController = require('../controllers/ContactUsController');
    const contactUs = new ContactUsController(app, db, req, res);
    await contactUs.mail();
  });

  app.get('/contact-us/thank-you', (req, res) => {
    const ContactUsController = require('../controllers/ContactUsController');
    const cv = new ContactUsController(app, db, req, res);
    cv.thank_you();
  });

  app.get('/contact-us', (req, res) => {
    const ContactUsController = require('../controllers/ContactUsController');
    const cv = new ContactUsController(app, db, req, res);
    cv.index();
  });

  app.post('/contact-us', (req, res) => {
    const ContactUsController = require('../controllers/ContactUsController');
    const cv = new ContactUsController(app, db, req, res);
    console.dir("cv.create()");
    cv.create();
  });


    /*
    res.render(path.join(__dirname, 'views/mail.ejs'), {
      site_title: 'Contact Us email from http://' + hostname + '/contact/',
      site_url: 'http://' + hostname + '/',
      user: 'Alex',
      items: ['Apple', 'Banana', 'Orange']
    }, (err, html) => {*/
      //if (err) return res.status(500).send(err.message);

    //});
  /*
  app.get('/contact-us/css/custom/:filename', async (req, res) => {
      const fileName = req.params.filename;
      const filePath = path.join(__dirname, 'css/custom/', fileName);
      res.setHeader('Content-Type', 'text/css');
      res.sendFile(filePath);
   });
*/

/*
     app.get('/contact/js/custom/:filename', async (req, res) => {
       const fileName = req.params.filename;
       const filePath = path.join(__dirname, 'js/custom/', fileName);
       res.type('application/javascript');
       res.sendFile(filePath, (err) => {
         if (err) {
           console.error(err);
           // Avoid headers already sent error
           if (!res.headersSent) {
             res.status(err.status || 500).send("JS file not found");
           }
         }
       }); 
     });
*/
  };