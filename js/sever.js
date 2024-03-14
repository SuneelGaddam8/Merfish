const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const assetsFolderPath = path.join(__dirname, 'assets');

// Serve static files from the 'assets' folder
app.use('/assets', express.static('../assets'));

// Endpoint to retrieve file names
app.get('/files', (req, res) => {
  fs.readdir(assetsFolderPath, (err, files) => {
    if (err) {
      console.error('Error reading assets folder:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      // Send the list of filenames as JSON
      res.json(files);
    }
  });
});

// Serve the HTML file on the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
