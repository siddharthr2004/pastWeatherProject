# Climate Change Weather Tracker  

This web tool visualizes temperature and precipitation changes over time (month and year) to track key climate patterns using real-world NOAA data.

## Features of this tool:  

-  See how global temperatures have changed over time  
-  Analyze precipitation shifts to detect extreme weather trends and anamolies    
-  Compare climate data across cities using an interactive map  
-  Turn raw data into visually appealing images with easy-to-read charts  

---  

##  Try It Out Online

 **Website link:** (https://pastweather.siddharth-rajan.dev/)  

---  

## Key Files & Their Role  

- **`app.js`**  Main backend (Node.js & Express) handling API requests  
- **`pastWeather.js`**  Fetches and processes NOAA climate data  
- **`pastWeather.ejs`**  Generates temperature & precipitation graphs  
- **`geLocations.js`**  Gets the location of different NOAA databases 

---  

##  Setup Guide  

## Clone the Repository  
Download the project to your local machine:  
```bash  
git clone https://github.com/siddharthr2004/Climate-Change-Tracker.git  
cd Climate-Change-Tracker  
```  

---  

## Install Dependencies  
Make sure you have **Node.js** installed. Then, run the following command in your terminal:  
```bash  
npm install  
```  

---  

## Set Up API Keys  
You'll need API keys to pull NOAA weather data and enable Google Maps.  

1. Create a **`.env`** file in the project directory.  
2. Add your API credentials inside like this:  
```env  
NOAA_API_KEY=your_api_key  
GOOGLE_MAPS_API_KEY=your_api_key  
```  

---  

## Start the Server  
Run the application with:  
```bash  
node app.js  
```  

---  

## Open the Website  
Once the server is running, open this in your browser:  
📞 **[http://localhost:3000](http://localhost:3000)**  

