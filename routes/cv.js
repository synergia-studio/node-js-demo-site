
  const path = require('path');

   module.exports = (app) => {

  app.get('/cv', (req, res) => {
      const CvController = require('../controllers/CvController');
      const cv = new CvController(app, req, res);
      cv.index();
  });

  /*
  app.get('/cv/documents/:filename', async (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, '/documents/', fileName);
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error(err);
        // Avoid headers already sent error
        if (!res.headersSent) {
          res.status(err.status || 500).send("CV file not found");
        }
      }
    });
 });
 */

};