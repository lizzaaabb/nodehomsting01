const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use bodyParser to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/submit', (req, res) => {
    const name = req.body.name;
    res.send(`
        <html>
        <head><title>Submission Received</title></head>
        <body>
            <h1>Submission Received</h1>
            <p>Thank you, ${name}, for your submission!</p>
            <a href="/">Go Back</a>
        </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
