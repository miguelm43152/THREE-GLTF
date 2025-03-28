import * as THREE from "three";
import {GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {scene} from './setup.js'; // Importar desde setup.js
// Crear un objeto (por ejemplo, una esfera)
//scene.add(cube);
const loader = new GLTFLoader();

loader.load("../assets/GLTF/honguito.glb",function(gltf){
    const object = gltf.scene;
    console.log(object)
    object.position.set(5,0,0)
    scene.add(object);
});
    
loader.load("assets/GLTF/tuberia.glb",function(gltf){
    const object = gltf.scene;
    scene.add(object);
});

loader.load("assets/GLTF/BOY_FUNKO_HEAD.glb",function(gltf){
    const object = gltf.scene;
    object.scale.set(0.05,0.05,0.05);
    object.rotateY(Math.PI/2)
    object.position.set(0,1,5)
    scene.add(object);
});


const geometry = new THREE.PlaneGeometry(30,30);
const material = new THREE.MeshBasicMaterial({ color: 0x2aa301, side: THREE.DoubleSide});  // material con sombreado
const plane = new THREE.Mesh(geometry, material);
plane.rotateX(-Math.PI/2)
scene.add(plane);

const light1 = new THREE.DirectionalLight(0xffffff,1);
light1.position.set(0,3,5);
scene.add(light1);

