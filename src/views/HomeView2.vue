<template>
    <div id="container"></div>
</template>

<!-- Page -->
<script>
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import Stats from "three/examples/jsm/libs/stats.module";
import axios from "axios";
import draggable from 'vuedraggable'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { ShadowMapViewer } from 'three/examples/jsm/utils/ShadowMapViewer.js';


import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
  name: "pages-authentication-login-v1",
  components: {
    draggable,
  },
  props: {
    sidenavToggle: {
      type: Boolean,
      default: true,
    },
  },
  metaInfo: {
    title: "Login v1 - Pages",
  },
  data: () => ({
    item: "",
    loaderitems: "",
    itemparts: [],
    color: [],
    rotate: false,
    paint: false,
    mod: "",
    obj: [],
    patl: false,
    scene: "",
    selectedPiece: "",
    rightsleft: 0,
    homepicture: "/Untitled-design-35.jpg",
    lights: [],
    topstop: '0px',
    final: [],
    bumped: 0,
    bump: false,
    col: [],
    shiny: 100,
    render: "",
    bump: "",
    face: false,
    pat: false,
    pati: false,
    part: "",
    lightpower: 0.3,
    ii: 0,
    counter: 0,
    parts: [],
    spd: [],
    transform: "",
    controls2: "",
    orbit: "",
    items: [],
    subs: false,
    groups: [],
    group: [],
    menus: true,
    ph: 0,
    pw: 0,
    cat: [],
    model: {
      name: "aa",
      amount: 5,
      parts: [],
    },
  }),
  beforeMount() {},
  mounted() {
    this.hi();
  },
  watch: {
    pat: {
      handler: function () {
        this.patina();
      },
      deep: true,
    },
    selectedPiece: {
      handler: function () {
        this.getitemdetails(this.selectedPiece.myid)
      },
      deep: true,
    }
  },
  updated() {
    this.checkrotate();
  },
  methods: {
    hi() {
      var SCREEN_WIDTH = 1000;
var SCREEN_HEIGHT = 600;

//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
renderer.shadowMapEnabled = true;
 renderer.shadowMapSoft = true;
document.body.appendChild( renderer.domElement );

//scene
var scene = new THREE.Scene();

//light
var light;

light = new THREE.DirectionalLight(0xdfebff, 1);
light.position.set(20, 400, 200)
light.position.multiplyScalar(1.3);

light.castShadow = true;
light.shadowCameraVisible = true;

light.shadowMapWidth = 512;
light.shadowMapHeight = 512;

var d = 200;

light.shadowCameraLeft = -d;
light.shadowCameraRight = d;
light.shadowCameraTop = d;
light.shadowCameraBottom = -d;

light.shadowCameraFar = 1000;
light.shadowDarkness = 0.8;

scene.add(light);

//camera
var camera = new THREE.PerspectiveCamera( 45, SCREEN_WIDTH/SCREEN_HEIGHT, 1, 1000 );
var vFOV = camera.fov * (Math.PI / 180);
camera.position.z = SCREEN_HEIGHT / (2 * Math.tan(vFOV / 2) );
camera.position.x = 100;
camera.position.y = 100;

//box
//geometry = new THREE.BoxGeometry( 100, 40, 100 );
//material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: false } );
//mesh = new THREE.Mesh( geometry, material );
//mesh.position.set(0,30,50);
//mesh.castShadow = true;
//mesh.receiveShadow = false;
//scene.add( mesh );

//plane
var get3DPlane = function (color, castShadow, receiveShadow) {
  var o = new THREE.Object3D();
  var geometry = new THREE.PlaneGeometry(100, 100, 4 ,4 );
  var material = new THREE.MeshLambertMaterial( { color: color, side: THREE.DoubleSide } );
  var plane = new THREE.Mesh( geometry, material );
  plane.position.set(0,50,0);
  plane.receiveShadow = receiveShadow;
  plane.castShadow = castShadow;
  o.add(plane);
  return o
}

var plane = get3DPlane(0xff0000, false, true)
plane.position.set(0,-80,70);
plane.rotation.x = -1.3
scene.add( plane );

var plane2 = get3DPlane(0x00ff00, true, false)
plane2.position.set(0,0,70);
plane2.rotation.x = -1.3
scene.add( plane2 );

function render() {
 requestAnimationFrame( render );
 plane2.rotation.z += 0.1; 
	 renderer.render( scene, camera );
}

render();

    }
  }
};
</script>
<style>
.pc {
  font-family: "UD" !important;
  font-size: 12px !important;
  margin-top: 5px;
}
body {
  overflow: hidden;
}

div.scrollmenu {
  direction: rtl;
  background-color: #cccccc;
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu a {
  display: inline-block;
  color: #444;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

div.scrollmenu a:hover {
  background-color: #777;
}

.navha::-webkit-scrollbar {
  width: 10px;
}

.navha::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.navha::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.navha::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.aaaa {
  background-size: 200% 200% !important;
}

.aaaa2 {
  background-size: 100% 100% !important;
}

@media only screen and (max-width: 768px) {
  #blacknav {
    height: 50px;
  }
}

a,
h1,
h2,
h3,
h4,
h5,
h6,
span,
p,
hr {
  color: grey;
  border-color: grey;
}

.subsubobject {
  display: none;
}
.objects{
  opacity: 100%;
}

.subobject {
  display: none;
}

.sublights {
  display: none;
}
.objects:hover{
  opacity: 100%;
}

.objects:hover .subobject {
  display: block;
}

.subobject:hover .subsubobject {
  display: block;
}

.lights:hover .sublights {
  display: block;
}

.btn{
  font-size: 10px;
  border: none;
  padding: 5px;
  border-radius: 35%;
  color: white;
  cursor: pointer
}
.btn-danger{
  background: red
}
.btn-primary{
  background: blue
}
html{
  width: 100%!important
}
body{
  margin: 0
}
h3{
  font-size: 18px!important;
  margin : 18px 0
}
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.custom-range {
    opacity: 30%
}
</style>