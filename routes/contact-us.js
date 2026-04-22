
module.exports = (app, db) => { 

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
  
  app.get('/contact-us/mail/:base64Json', async (req, res) => {
    const ContactUsController = require('../controllers/ContactUsController');
    const contactUs = new ContactUsController(app, db, req, res);
    await contactUs.mail(req.params.base64Json);
  });

  app.get('/contact-us/thank-you', (req, res) => {
    const ContactUsController = require('../controllers/ContactUsController');
    const cv = new ContactUsController(app, db, req, res);
    cv.thank_you();
  });



};