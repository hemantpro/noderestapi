// Import required modules
const express = require('express');
const axios = require('axios');
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to fetch GitHub user gists
    app.get('/:username', async (req, res) => {
    const {username} = req.params;
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/gists`, { 
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        const gist_output = response.data.map(gist => ({
            // id: gist.id,
            // description: gist.description,
            url: gist.html_url
        }));
        res.json(gist_output);  // Send the user gists data as JSON response
        res.sendStatus(200);
        res.send(url);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user repositories', details: error.message });
    }
});
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app.listen(8081);
