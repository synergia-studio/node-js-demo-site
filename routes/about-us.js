
  const path = require('path');

  module.exports = (app) => {

    app.get('/about-us', (req, res) => {
      const AboutUsController = require('../controllers/AboutUsController');
      const aboutUs = new AboutUsController(app, req, res);
      aboutUs.index();
    })

  }