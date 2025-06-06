import * as THREE from 'three';

const video = document.getElementById('camera-feed');
const canvas = document.getElementById('three-canvas');
const mapEl = document.getElementById('map');
const itemList = document.getElementById('item-list');

// --- AR камера ---
async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
  video.srcObject = stream;
}

// --- Карта ---
const map = L.map(mapEl).setView([0, 0], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OSM',
}).addTo(map);

navigator.geolocation.getCurrentPosition(pos => {
  const { latitude, longitude } = pos.coords;
  map.setView([latitude, longitude], 17);
  L.marker([latitude, longitude]).addTo(map).bindPopup("Вы здесь").openPopup();
});

// --- Three.js сцена ---
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;
  renderer.render(scene, camera);
}

animate();

// --- Скан ---
document.getElementById('scan-btn').addEventListener('click', () => {
  const item = document.createElement('li');
  item.textContent = '🚀 Обнаружен куб!';
  itemList.appendChild(item);
});

// --- Инициализация ---
startCamera();