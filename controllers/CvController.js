  const path = require('path');

    class CvController {

        app;
        req;
        res;
s
        constructor(app, req, res) {
            this.app = app;
            this.req = req;
            this.res = res;
        };

        // GET /cv 
        index() {
            var hostname = this.req.headers.host; // hostname = 'localhost:3000'
            this.res.render(path.join(__dirname, '../views/cv.ejs'), {
                site_title  : 'CV',
                site_url: 'http://' + hostname + '/',
                cv_menu_link_active: 'active',
                hesader_title: "CV",
                main_section_title: 'Documents'
            });
        };

    };

module.exports = CvController;

