const { exec } = require('child_process');

exec('python3 getLocations.py', { maxBuffer: 1024 * 1024 * 10 }, (error, stdout, stderr) => {
    if (error) {
        console.error("Error executing script:", error);
        return;
    }
    if (stderr) {
        console.error("Python stderr:", stderr);
    }
    console.log("Python stdout:", stdout);
});
