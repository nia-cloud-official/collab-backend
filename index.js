const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const githubToken = process.env.GITHUB_TOKEN;

app.use(cors());

app.get('/find-collaborators/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const userResponse = await axios.get(`https://api.github.com/users/${username}`, {
      headers: { Authorization: `token ${githubToken}` }
    });
    const reposResponse = await axios.get(userResponse.data.repos_url, {
      headers: { Authorization: `token ${githubToken}` }
    });

    const languages = new Set();
    reposResponse.data.forEach(repo => {
      if (repo.language) languages.add(repo.language);
    });

    const collaborators = [];
    for (const language of languages) {
      const searchResponse = await axios.get(`https://api.github.com/search/users?q=language:${language}`, {
        headers: { Authorization: `token ${githubToken}` }
      });
      searchResponse.data.items.forEach(user => {
        collaborators.push({
          login: user.login,
          id: user.id,
          avatar_url: user.avatar_url,
          html_url: user.html_url
        });
      });
    }

    res.json(collaborators);
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error);
    res.status(500).send('Error fetching data from GitHub API');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
