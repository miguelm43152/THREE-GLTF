import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
const div = document.getElementById("three");


const renderer = new THREE.WebGLRenderer();
renderer.setSize(div.offsetWidth,div.offsetHeight);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x329ba8);
div.appendChild(renderer.domElement);


const x= 6.006734836144664, y= 1.1795474802368369, z= 5.296870677183885;

const camera = new THREE.PerspectiveCamera(70,div.offsetWidth/div.offsetHeight,0.1,1000);
camera.position.set(x,y,z);
camera.lookAt(3,1,0);
renderer.render(scene,camera);
const control = new OrbitControls(camera,renderer.domElement);

const light = new THREE.AmbientLight(0xffffff,1);
scene.add(light);

function animate() {
    requestAnimationFrame(animate);
    control.update();
    renderer.render(scene, camera);
}//fin de function animate

animate();

window.addEventListener("resize",function(){
    renderer.setSize(div.offsetWidth,div.offsetHeight);
})


export {scene};

