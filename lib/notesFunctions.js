const fs = require('fs');
const util = require('util');

// Promise fs.readfile
const readFromFile = util.promisify(fs.readFile)
/**
 * @param {string} destination the file you're writing to = a string destination
 * @param {object} content the content you want to write to the file = an object
 * @returns {void} Nothing
 */

const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 2) , (err) =>
        err ? console.log(err) : console.info(`\nData written to ${destination}`)
    );
/**
 * @param {object} content the content you want to append = an object
 * @param {string} file the path to the file you want to save 
 * @returns {void} Nothing 
 */

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if(err) {
            console.error(err);
        } else {
            const parseData = JSON.parse(data);
            parseData.push(content);
            writeToFile(file, parseData)
        }
    })
}

module.exports = { readFromFile, writeToFile, readAndAppend };