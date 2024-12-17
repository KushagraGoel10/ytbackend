// server.js or app.js
//https://alok722.github.io/namaste-javascript-notes/dist/lectures.html

const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Import axios for making HTTP requests
const app = express();

app.use(cors());

app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(`https://suggestqueries.google.com/complete/search`, {
      params: {
        client: 'firefox',
        ds: 'yt',
        q: query
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from Google API');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
