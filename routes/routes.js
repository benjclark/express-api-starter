// import other routes
const userRoutes = require('./users');
const docEditRoutes = require('./doc-edit');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('Welcome to the development api-server. Append your route to the URL, for example: http://localhost:3001/users');
    });

    // // other routes
    userRoutes(app, fs);
    docEditRoutes(app, fs);

};

module.exports = appRouter;