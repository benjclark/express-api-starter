const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const routes = require('./routes/routes.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app, fs);

const server = app.listen(PORT, () => {
    console.log('listening on port %s...', server.address().port);
});