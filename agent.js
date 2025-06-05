// for syncing PC assets from n8n
import axios from 'axios';
import https from 'https';

process.env.HTTP_PROXY = '';
process.env.HTTPS_PROXY = '';

const token = 'YOUR_PLAYCANVAS_API_TOKEN'; // подставь сюда

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

async function listProjects() {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.playcanvas.com/v1/projects',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (NodeAgent)'
      },
      httpsAgent
    });

    console.log('✅ Projects:', response.data);
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('↩️ Status:', error.response.status);
      console.error('↩️ Headers:', error.response.headers);
    }
  }
}

listProjects();
