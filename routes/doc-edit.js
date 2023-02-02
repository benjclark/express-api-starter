const docEdit = (app, fs) => {

    // variables
    const dataPath = './data/doc-edit.json';

    // READ
    app.get('/doc-edit', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        });
    });
};

module.exports = docEdit;
