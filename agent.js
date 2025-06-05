// for syncing PC assets from n8n
const axios = require('axios');

async function listProjects() {
  const response = await axios.get('https://playcanvas.com/api/projects', {
    headers: {
      Authorization: 'Bearer YOUR_PLAYCANVAS_TOKEN'
    }
  });
  return response.data;
}

module.exports = { listProjects };
