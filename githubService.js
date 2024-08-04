const axios = require('axios');
require('dotenv').config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

const getUserData = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};

const getUserRepos = async (reposUrl) => {
  const response = await api.get(reposUrl);
  return response.data;
};

const getRepoLanguages = async (languagesUrl) => {
  const response = await api.get(languagesUrl);
  return response.data;
};

const searchUsersByLanguages = async (languages) => {
  const languageQueries = languages.map((lang) => `language:${lang}`).join('+');
  const response = await api.get(`/search/users?q=${languageQueries}`);
  return response.data.items;
};

module.exports = {
  getUserData,
  getUserRepos,
  getRepoLanguages,
  searchUsersByLanguages,
};
