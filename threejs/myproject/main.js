import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x380000});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('images/holespace.jpg');
scene.background = spaceTexture;

// Avatar

const ryanTexture = new THREE.TextureLoader().load('images/ryan.png');

const ryan = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: ryanTexture }));

scene.add(ryan);

// skikids

const skikidsTexture = new THREE.TextureLoader().load('images/skikids.png');

const skikids = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: skikidsTexture }));

scene.add(skikids);

// laser

const laserTexture = new THREE.TextureLoader().load('images/lasertag.png');

const laser = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: laserTexture }));

scene.add(laser);

// hockey

const hockeyTexture = new THREE.TextureLoader().load('images/hockeywin.png');

const hockey = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: hockeyTexture }));

scene.add(hockey)

// ski

const skiTexture = new THREE.TextureLoader().load('images/skiinstruct.jpg');

const ski = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: skiTexture }));

scene.add(ski)

// tennis

const tennisTexture = new THREE.TextureLoader().load('images/tennisserve.png');

const tennis = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: tennisTexture }));

scene.add(tennis)

// bike

const bikeTexture = new THREE.TextureLoader().load('images/bike.png');

const bike = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: bikeTexture }));

scene.add(bike)

// gaspe

const gaspeTexture = new THREE.TextureLoader().load('images/gaspe.png');

const gaspe = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: gaspeTexture }));

scene.add(gaspe)

// Moon

const moonTexture = new THREE.TextureLoader().load('images/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('images/normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

// object positions

moon.position.z = 30;
moon.position.setX(-10);

ryan.position.z = -5;
ryan.position.x = 2;

skikids.position.z = 33;
skikids.position.x = 0;

laser.position.z = 42;
laser.position.x = 0;

hockey.position.z = 70
hockey.position.x = -5;
hockey.position.y = 0;

ski.position.z = 75
ski.position.x = -5;
ski.position.y = 0;

tennis.position.z = 80
tennis.position.x = -5;
tennis.position.y = 0;

bike.position.z = 85
bike.position.x = -5;
bike.position.y = 0;

gaspe.position.z = 90
gaspe.position.x = -5;
gaspe.position.y = 0;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  ryan.rotation.y += 0.01;
  ryan.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  moon.rotation.x += 0.005;

  // controls.update();

  renderer.render(scene, camera);
}

animate();