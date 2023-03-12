// Dependencies
const express = require('express');
const path = require('path');

// Connect server.js to route files
const htmlRoute = require('./routes/html-route');
const dataRoute = require('./routes/data-route');

// Initiate express server
const app = express();


// Set PORT to user environment for launching on heroor to default 3001
const PORT = process.env.PORT || 3001;

// Parse incoming urlencoded/JSON form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRoute);
app.use('/api', dataRoute);

// GET Route for homepage (* as catch all)
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.use(express.static('public'));

// Listener to verify PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});