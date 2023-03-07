// to promisify logic for notes
const util = require('util');
const fs = require('fs');


// writeNote() 
            // WHEN I click on the Write icon in the navigation at the top of the page
            // THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

            // WHEN I enter a new note title and the note’s text
            // THEN a Save icon appears in the navigation at the top of the page


// saveNote() 
            // WHEN I click on the Save icon
            // THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes


// renderNotes()
            // WHEN I click on the link to the notes page
            // THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column


// viewNote()
            // WHEN I click on an existing note in the list in the left-hand column
            // THEN that note appears in the right-hand column WITH A DELETE ICON 

            
// deleteNote()
            // WHEN I view an individual note and click on the delete icon 
            // THEN the note is removed from the saved notes in the left-hand column and from the right viewing column