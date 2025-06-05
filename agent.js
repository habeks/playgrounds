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
        'Accept': 'application/json'
      },
      maxRedirects: 0, // 💥 запрет на редиректы
      httpsAgent
    });

    console.log('✅ Response:\n', response.data);
  } catch (error) {
    console.error('❌ Error:\n', error.message);

    if (error.response) {
      console.error('↩️ Response headers:\n', error.response.headers);
    } else if (error.request) {
      console.error('🧱 No response received.\n', error.request);
    }
  }
}

listProjects();
