const fs = require('fs');

function open(filename){
    const data = fs.readFileSync(filename, 'utf-8');

    const json = JSON.parse(data);

    return json;
}

function save(filename, data){
    const json = JSON.stringify(data);
    fs.writeFileSync(filename, json);
}

module.exports = {open, save};