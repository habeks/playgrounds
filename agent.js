// for syncing PC assets from n8n
import axios from 'axios';

async function listProjects() {
  const response = await axios.get('https://playcanvas.com/api/projects', {
    headers: {
      Authorization: `Bearer ${process.env.PLAYCANVAS_API_TOKEN}`
    }
  });
  console.log(response.data);
}

listProjects();
