
module.exports = (app) => {

  app.get('/technologies', (req, res) => {
    const TechnologiesController = require('../controllers/TechnologiesController');
    const technologies = new TechnologiesController(app, req, res);
    technologies.index();    
  });

};
