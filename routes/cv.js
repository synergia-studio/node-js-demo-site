
module.exports = (app) => {

  app.get('/cv', (req, res) => {
      const CvController = require('../controllers/CvController');
      const cv = new CvController(app, req, res);
      cv.index();
  });

};