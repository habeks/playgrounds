// for syncing PC assets from n8n
import axios from 'axios';
import https from 'https';

const token = process.env.PLAYCANVAS_API_TOKEN;

const httpsAgent = new https.Agent({
  rejectUnauthorized: false // needed 4 gptCodex
});

async function listProjects() {
  try {
    const response = await axios.get('https://playcanvas.com/api/projects', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      },
      httpsAgent
    });

    console.log('✅ Projects loaded successfully:\n', response.data);
  } catch (error) {
    console.error('❌ Error while fetching projects:\n', error.message);
    if (error.response) {
      console.error('🔁 Redirect or response headers:\n', error.response.headers);
    }
  }
}

listProjects();
