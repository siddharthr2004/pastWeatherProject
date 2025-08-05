const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
//const getLocations = require('./getLocations'); // Import the getLocations class

const app = express();

// Serve static files in "public_html" folder
app.use(express.static(__dirname + '/public_html'));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define route to serve the main page
app.get('/', (req, res) => {
   //ONLY FOR TESTING PURPOSES
    
    //res.render('test');
    //REAL CODE HERE
    
    try {
        // Read locations data from locations.txt
        const locationsPath = path.join(__dirname, 'filteredLocations.txt');
        const locationsData = fs.readFileSync(locationsPath, 'utf-8');
        const locations = JSON.parse(locationsData); // Parse JSON data

        // Render the EJS template with the locations
        res.render('mainPage', { locations });
    } catch (error) {
        console.error("Error reading locations.txt:", error.message);
        res.status(500).send("Error loading location data.");
    }

});

// Define route for form submission (if needed)
app.post('/getLatandLang', async (req, res) => {
    const { id } = req.body; // Extract the ID from the request body
    try {
        // Placeholder for handling the request
        res.send(`Location ID: ${id}`);
    } catch (error) {
        console.error("Error handling form submission:", error.message);
        res.status(500).send("Error handling the request.");
    }
});

// Start the server
const port = process.env.PORT || 3008;
app.listen(port, () => {
    console.log(`Node.js app listening on port ${port}`);
});
