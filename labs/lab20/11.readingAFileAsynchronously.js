// use the 'fs' node module
const fs = require('fs');

// File path
const filePath = './files/file.txt';

// Reading file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log("File content:", data);
});

console.log("This message is displayed first.");