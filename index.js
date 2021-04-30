require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const jsonfs = require('./filesystem');
const filename = 'data.json';
const PORT = 3010;

app.use(cors());
app.use(express.json({urlencoded: false}));

app.get('/', (req, res) => {
    const json = jsonfs.open(filename);
    res.status(200).json(json);
});

app.post('/new', (req, res) => {
    const json = jsonfs.open(filename);
    json.push(req.body);
    jsonfs.save(filename, json);

    res.status(200).json({
        status: 200,
        message: 'New item added correctly',
        item: req.body
    });
});

app.put('/update', (req, res) => {
    const {id} = req.body;

    const json = jsonfs.open(filename);

    const index = json.findIndex(x => x.id === id);

    json[index] = req.body;

    jsonfs.save(filename, json);
    console.log({
        status: 200,
        message: 'New item added correctly',
        item: json[index]
    });
    res.status(200).json({
        status: 200,
        message: 'New item updated correctly',
        item: json[index]
    });
});


app.listen(process.env.PORT || PORT, () => {
    console.log(`Web server started at ${process.env.PORT || PORT}...`);
});