//THIS WILL BE FOR THE COMMONJS RENDERING
/*
const express = require('express'); // CommonJS import for Express
const fs = require('fs'); // File system module
const path = require('path'); // Path module
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
const ejs = require('ejs'); // Template engine
*/


//ES RENDERING ONLY

import express from 'express';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import ejs from 'ejs';

//import PastWeather from './pastWeather.js';


/*
//FOR BOTH COMMONJS AND ES RENDERING/TESTING AS NEEDED:
    try {
      // This is for the ES rendering
      //const { default: PastWeather } = await import('./pastWeather.js'); // Adjust the path if necessary

      //COMMON JS RENDERING GENERAL 
      const PastWeather = require('./pastWeather.js'); // Import your `PastWeather` class
      console.log("Past weather rendered");
      
      //ES RENDERING TEST
      //const PW = new PastWeather('GHCND:USC00261327');
     // console.log(PW.locationID); // Check if the instance is initialized correctly
  
      // THIS IS ONLY FOR ES TESTING
      /*
      try {
        const ans = await PW.parseData(); // Use await to resolve the asynchronous method
        console.log(ans); // Log the result of parseData
      } catch (error) {
        console.log("FAILED PART 2 (parseData)", error);
      }
      */
     /*
    } catch (error) {
      console.error('FAILED PART 1 (Dynamic Import)', error);
    }
    */
  
  

//This takes the path dirname (since ES doesn't do dirnames) and instead we get the meta url
//which is our main file path, and then we get the pathname to our current app.js file here 


const app = express();


//CommonJS RENDERING
//app.use(express.static(path.join(__dirname, 'public_html')));

//ES RENDERING:
const __dirname = path.dirname(new URL(import.meta.url).pathname);


// Serve static files in "public_html" folder
app.use(express.static(path.join(__dirname, 'public_html')));


// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define route to serve the main page
app.get('/', (req, res) => {
   //ONLY FOR TESTING PURPOSES
    res.send("ES TEST!");
    //REAL CODE HERE
    /*
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
    */

});
/*
// Define route for form submission (if needed)
app.post('/getLatandLang', async (req, res) => {
    const { id } = req.body; // Extract the ID from the request body
    const pastWX = new PastWeather(id);
    try {
        // Placeholder for handling the request
        //ADD BACK LATER:
       // const send = await pastWX.parseData();
        //THIS IS ONLY FOR TESTING PURPOSES
       //const send = [id]; 
       res.json(id);
    } catch (error) {
        console.error("Error handling form submission:", error.message);
        res.status(500).send("Error handling the request.");
    }
});
*/
// Start the server
const port = process.env.PORT || 3008;
app.listen(port, () => {
    console.log(`Node.js app listening on port ${port}`);
});
