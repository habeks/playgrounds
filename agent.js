// for syncing PC assets from n8n
import axios from 'axios';

const TOKEN = 'HwJPj3C0EDGeM1IqiZS0ZdNRPuBw8PzN';

async function listProjects() {
  try {
    const response = await axios.get('https://api.playcanvas.com/projects', {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Accept': 'application/json'
      },
      maxRedirects: 0, // отключим, чтобы увидеть, что именно редиректит
    });

    console.log('✅ Projects:', response.data);
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.log('➡️ Status:', error.response.status);
      console.log('➡️ Headers:', error.response.headers);
      console.log('➡️ Data:', error.response.data);
    }
  }
}

listProjects();
