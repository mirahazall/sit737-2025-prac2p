/**
Simple Node.js + Express Server
 * 
 * This server serves an `index.html` file that simply displays a text when users visit the root URL http://localhost:3000.
 * The `express.static()` middleware is used to serve the static files inside the `public` folder such as `index.html`.
 * 
 */

// Import the express module
var express = require('express');

var app = express(); // Initialize Express application
var port = 3000; // Define the port for the server

app.use(express.static('public')); //Middleware to serve static files inside the `public` directory such as `index.html`

/* 
This defines a route '/simpleAppRoute'. When a user visits http://localhost:3000/simpleAppRoute, 
the server responds with an HTML message saying "This is the route 'simpleAppRoute'".
*/
app.get('/simpleAppRoute', (req, res) => {
    res.send(`<h1> This is the route 'simpleAppRoute'.</h1>`)
}) 

// Starts the server and listen on the specified port
app.listen(port, () => {
console.log(`Server is running on port ${port}`)
});