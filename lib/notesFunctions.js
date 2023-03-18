const fs = require('fs');
const util = require('util');

// Promise fs.readfile
const readAllNotes = util.promisify(fs.readFile)


const writeAllNotes = (destination, content) => {
    // Convert JSON into a string and don't format as single line
    fs.writeFile(destination, JSON.stringify(content, null, 2) , (err) =>
    //if err, console.log the err msg, otherwise display success msg
        err ? console.log(err) : console.log('')
    );
}

// read designated file, then parse the data to add it to db content
const readAndAdd = (content, file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if(err) {
            console.error(err);
        } else {
            
            // convert string to valid json obj
            const parseData = JSON.parse(data);

            parseData.push(content);
            // then write object to file
            writeAllNotes(file, parseData)
        }
    })
}

module.exports = { readAllNotes, writeAllNotes, readAndAdd };