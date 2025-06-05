// for syncing PC assets from n8n
import axios from 'axios';
import https from 'https';

const token = process.env.PLAYCANVAS_API_TOKEN;

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

async function listProjects() {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://playcanvas.com/api/projects',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Host': 'playcanvas.com', // ключевой момент
        'User-Agent': 'Mozilla/5.0 (NodeAgent)' // может помочь обойти CloudFront
      },
      maxRedirects: 0,
      httpsAgent
    });

    console.log('✅ Projects:', response.data);
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.log('↩️ Status:', error.response.status);
      console.log('↩️ Headers:', error.response.headers);
    }
  }
}

listProjects();
