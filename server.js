// Dependencies
const express = require('express');

// Connect server.js to route files


// Initiate express server
const app = express();


// Set PORT to user environment or to default 3001
const PORT = process.env.PORT || 3001;


// app.use for incomming data and file routes ? => app.METHOD(PATH, HANDLER)


// Listener to verify PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});