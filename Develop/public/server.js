const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const path = require('path');

// index html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});
// notes html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './notes.html'));
});

// Start the server on the specified port.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
