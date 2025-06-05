// for syncing PC assets from n8n
import axios from 'axios';

async function listProjects() {
  const response = await axios.get('https://playcanvas.com/api/projects', {
    headers: {
      Authorization: `Bearer ${process.env.HwJPj3C0EDGeM1IqiZS0ZdNRPuBw8PzN}`
    }
  });
  console.log(response.data);
}

listProjects();
