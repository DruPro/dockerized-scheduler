// database.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// Define the path to the interns.json file
const internsFilePath = path.join(__dirname, 'database','public', 'interns.json');

// Create a GET route to send the interns.json file
app.get('/get-interns', (req, res) => {
    res.sendFile(internsFilePath, (err) => {
        if (err) {
            console.error('Error sending interns.json:', err);
            res.status(500).send('Server error');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
