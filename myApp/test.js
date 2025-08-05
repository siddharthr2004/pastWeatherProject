const getLocations = require('./getLocations'); // Import the getLocations class

class Test {
    async testMethod() {
        const locationClass = new getLocations(); // Instantiate getLocations class
        try {
            const locs = []
            const locations = await locationClass.fetchAllData(); // Call fetchAllData
            return locations; // Return fetched data
        } catch (error) {
            //console.error("Error fetching locations from NOAA API:", error.message);
            return []; // Return empty array on failure
        }
    }
}

(async () => {
    const testInstance = new Test(); // Create instance of Test class

    console.log("Running the test method to fetch locations...");
    const locations = await testInstance.testMethod();

    if (locations && locations.length > 0) {
        console.log(`Total locations fetched: ${locations.length}`);
        console.log("Sample data (first 100 records):", locations.slice(0, 100)); // Log first 10 records
    } else {
        //console.error("No locations were returned.");
    }
})();