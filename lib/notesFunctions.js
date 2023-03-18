const fs = require('fs');
const util = require('util');

// Promise fs.readfile
const readAllNotes = util.promisify(fs.readFile)
/**
 * @param {string} destination the file you're writing to = a string destination
 * @param {object} content the content you want to write to the file = an object
 * @returns {void} Nothing
 */

// Convert JSON into a string and don't format as single line
const writeAllNotes = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 2) , (err) =>
    //if err, console.log the err msg, otherwise display success msg
        err ? console.log(err) : console.log('')
    );
/**
 * @param {object} content the content you want to append = an object
 * @param {string} file the path to the file you want to save 
 * @returns {void} Nothing 
 */

const readAndAdd = (content, file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if(err) {
            console.error(err);
        } else {
            const parseData = JSON.parse(data);

            parseData.push(content);

            writeAllNotes(file, parseData)
        }
    })
}

module.exports = { readAllNotes, writeAllNotes, readAndAdd };