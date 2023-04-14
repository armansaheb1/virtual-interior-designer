<template>
  <div id="elem" style="background: black">
    <div
      v-if="!homepicture || homepicture === ' /Untitled-design-35.jpg'"
      style="
        position: absolute;
        width: 100%;
        height: 100%;
        background: white;
        top: 0;
        left: 0;
        z-index: 1000;
      "
    >
      <button @click="homepicture = '/Untitled-design-35.jpg'">Close</button>
      <h4 style="margin-top: 10%">Please Select a Picture</h4>
      <br />
      <input id="file" @input="sendpic" type="file" />
    </div>
    <div
      class="homepic"
      :style="`position:absolute ;width: 100% ;height: 100%; background: url(${homepicture}); background-size: 100% 100%; right: 0%;left:0%; top : 0`"
    >
    <button
          v-if="!menus"
          @click="menus = true"
          style="
            float: left;
            cursor: pointer;
            margin: 10px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            outline: none;
          "
        >
        <ion-icon style="font-size: 20px" name="expand-outline"></ion-icon>
      </button>
      <div v-if="menus" class="topmenu menus" :style="`height: 50px; padding: 1px; width: 15%; left: 40%; position: relative ; background: white;border-radius: 0 0 10px 10px ; top: ${topstop}`">
        <button
          v-if="!rotate"
          @click="rotate = true"
          style="
            float: left;
            cursor: pointer;
            margin: 10px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            outline: none;
            
          "
        >
          <ion-icon style="font-size: 20px" name="sync-outline"></ion-icon>
        </button>
        <button
          v-if="rotate"
          @click="rotate = false"
          style="
            float: left;
            cursor: pointer;
            margin: 10px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            outline: none;
          "
        >
          <ion-icon style="font-size: 20px" name="move-outline"></ion-icon>
        </button>
        <button
          @click="menus = false"
          style="
            float: left;
            cursor: pointer;
            margin: 10px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            outline: none;
          "
        >
        <ion-icon style="font-size: 20px" name="expand-outline"></ion-icon>
        </button>
        <button
          @click="menus = false"
          style="
            float: left;
            cursor: pointer;
            margin: 10px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            outline: none;
          "
        >
        <ion-icon  style="font-size: 20px" name="camera-outline"></ion-icon>
        </button>
        <button v-if="topstop == '0px'" @click="topstop = '-45px'" style="position: absolute; bottom: -10px;left: 48%; border: none; background-color: white;border-radius: 10px;">
          <i style="cursor: pointer" class="fa-solid fa-chevron-up"></i>
        </button>
        <button v-if="topstop == '-45px'" @click="topstop = '0px'" style="position: absolute; bottom: -10px;left: 48%; border: none; background-color: white;border-radius: 10px;">
          <i style="cursor: pointer" class="fa-solid fa-chevron-down"></i>
        </button>
      </div>

      <div
        id="container"
        style="height: 550px; float: left; mrgin-top: 0px; width: 100%"
      ></div>
    </div>
    <div
      v-if="groups.length && menus"
      :style="`
        position: absolute;
        width: 7.5%;
        background: white;
        height: 100%;
        background-size: 100% 100%;
        right: -${rightsleft}%;
        top: 0;
        color: white;
        text-align: center
        `
      "
      class="menus"
      >
      <div
        v-for="(item, idx) in groups"
        v-bind:key="item"
        @click="selectbar(idx)"
      >
      <img :src="item.get_pic" style="width: 80%;height: 80%; margin: 10% ; border-radius: 10px; border: solid #ececec 2px; cursor: pointer" alt="">
      <button class="btn btn-danger" @click="deleteitem(idx)" style="position: relative; top: -25px ; left: -5px"><i class="fa-solid fa-trash"></i></button>
      <button class="btn btn-primary" @click="resetitem(idx)" style="position: relative; top: -25px ; left: 5px"><i class="fa-solid fa-rotate"></i></button>
    </div>
      <button v-if="rightsleft == 7" @click="rightsleft = 0" style="position: absolute; top: 48%;left: -10px; border: none; background-color: white;border-radius: 5px; padding: 5px">
        <i style="cursor: pointer" class="fa-solid fa-chevron-left"></i>
      </button>
      <button v-if="rightsleft == 0" @click="rightsleft = 7" style="position: absolute; top: 48%;left: -10px; border: none; background-color: white;border-radius: 5px; padding: 5px">
        <i style="cursor: pointer" class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
    <div
      v-if="menus"
      class="objects menus"
      style="
        position: absolute;
        width: 5%;
        background: white;
        height: 100%;
        background-size: 100% 100%;
        left: 0;
        top: 0;
        color: white;
      "
      >
      <div>
        <h3 class="object">
          <i class="fa-solid fa-couch"></i>
          <p class="pc">Objects</p>
        </h3>
       
        <div
          class="subobject"
          style="
            position: absolute;
            width: 150%;
            background: white;
            height: 100%;
            background-size: 100% 100%;
            left: 100%;
            top: 0;
            color: white;
            background: #ececec ;
          "
          >
          <div
            v-for="(item, idx) in cat"
            @mouseover="setsub(idx)"
            v-bind:key="item"
            @click="loaditem(item)"
            style="cursor: pointer; background: #ececec ; back"
          >
            <h3>
              <i :class="`${item.icon}`"></i>
              <p class="pc">{{ item.name }}</p>
            </h3>
           
          </div>
          <div
          class="subsubobject"
          style="
            position: absolute;
            width: 100%;
            background: white;
            height: 100%;
            background-size: 100% 100%;
            left: 100%;
            top: 0;
            color: white;
            background: #ffffff ;
          "
          >
          <div
            v-for="item in subs"
            v-bind:key="item"
            @click="loaditem(item)"
            style="cursor: pointer; background: #ffffff ; back"
          >
            <img :src="item.get_pic" style="width: 80%;height: 80%; margin: 10% ; border-radius: 10px; border: solid #ececec 2px" alt="">
           
          </div>
        </div>
        </div>
      </div>
      <div class="lights">
        <h3>
          <i class="fa-solid fa-lightbulb"></i>
          <p class="pc">Lights</p>
        </h3>
       
        <div
          class="sublights"
          @click="lightadd()"
          style="
            position: absolute;
            width: 150%;
            background: #ececec ;
            height: 100%;
            background-size: 100% 100%;
            left: 100%;
            top: 0;
            color: #ececec;
            z-index: 1000000000000;
            cursor: pointer;
          "
          >
          <h3>
          <i class="fa-solid fa-lightbulb"></i>
          <p class="pc">Directional</p>
        </h3>
      </div>
      </div>
    </div>
    
  </div>
</template>

<!-- Page -->
<script>
import * as THREE from "three";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import Stats from "three/examples/jsm/libs/stats.module";
import axios from "axios";
import $ from "jquery";

export default {
  name: "pages-authentication-login-v1",
  components: {},
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
    rotate: false,
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
    transform: "",
    controls2: "",
    orbit: "",
    items: [],
    subs: false,
    groups: [],
    group: [],
    menus: true,
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
    this.getitems();
    this.getcat();
  },
  watch: {
    pat: {
      handler: function () {
        this.patina();
      },
      deep: true,
    },
  },
  updated() {
    this.checkrotate();
  },
  methods: {
    resetitem(id) {
      this.groups[id].rotation.set(0, 0, 0)
      this.groups[id].position.set(0, 0, 0)
    },
    deleteitem(id) {
      this.scene.remove(this.transform);
      this.scene.remove(this.groups[id]);
      this.groups.splice(id, 1);
    },
    setsub(id) {
      console.log(this.cat[id].items)
      this.subs = this.cat[id].items
    },
    checkrotate() {
      if (this.rotate) {
        this.transform.setMode("rotate");
      } else {
        this.transform.setMode("translate");
      }
    },
    async sendpic(id) {
      const formdata = new FormData();
      var img = document.getElementById("file").files[0];
      formdata.append("image", img, img.name);
      await axios.post(`/image`, formdata).then((response) => {
        this.homepicture = response.data;
      });
    },
    async getcat(id) {
      await axios.get(`/category`).then((response) => {
        this.cat = response.data;
        console.log(response.data);
      });
    },
    async getitem(id) {
      await axios.post(`/items`, { id: id }).then((response) => {
        this.item = response.data[0];
        this.getitemmaterials();
      });
    },
    async getitems() {
      await axios.get(`/items`).then((response) => {
        this.items = response.data;
      });
    },
    async getitemparts() {
      await axios.get(`/itemparts/${this.item.id}`).then((response) => {
        this.itemparts = response.data;
      });
    },
    async getitemmaterials() {
      await axios.get(`/itemmaterials/${this.item.id}`).then((response) => {
        this.model[this.item.id] = { parts: response.data, item: this.item };
        setTimeout(() => {
          this.getitemparts();
          this.additem(this.item.id);
        }, 1500);
      });
    },
    async submit() {
      var order = "";
      for (var item of this.final) {
        if (order.length === 0) {
          order = order + item;
        } else {
          order = order + "," + item;
        }
      }
      const formdata = new FormData();
      formdata.append("order", order);
      formdata.append("item", this.item.id);
      await axios.post(`/order`, formdata).then((response) => {
        this.$swal(
          "سفارش شما با موفقیت ثبت شد",
          ` کد پیگیری شما : (${response.data.uid})`,
          "success"
        );
      });
    },
    lightadd() {
      var light = new THREE.DirectionalLight(0x666666, 2);
      light.position.set(1, 1, 1);
      this.groups.push(light);
      this.obj.push(light);
      light.name = "light";
      this.scene.add(light);
      this.transform.attach(light);
      this.scene.add(this.transform);
    },
    hi() {
      const scene = new THREE.Scene();
      this.scene = scene;

      const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
      scene.add(light);

      const camera = new THREE.PerspectiveCamera(60, 800 / 550, 1, 1000000);
      camera.position.set(1000, 500, 4000, 1000);
      camera.lookAt(-1000, 500, 0);

      var mouse, raycaster;

      mouse = new THREE.Vector2();
      raycaster = new THREE.Raycaster();

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        SSAO: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.querySelector("#container").appendChild(renderer.domElement);

      this.transform = new TransformControls(camera, renderer.domElement);
      this.transform.enableZoom = true;
      var lastscroll = 0;
      $(window).bind("mousewheel", (event) => {
        if (!this.selectedPiece) {
          return;
        }
        if (this.selectedPiece.scale === NaN) {
          this.selectedPiece.scale.set(1, 1, 1);
        }
        if (event.originalEvent.wheelDelta / 120 > 0) {
          this.selectedPiece.scale.multiplyScalar(1.1);
        } else {
          this.selectedPiece.scale.multiplyScalar(0.9);
        }
      });
      window.addEventListener("keydown", (event) => {
        switch (event.keyCode) {
          case 81: // Q
            this.transform.setSpace(
              this.transform.space === "local" ? "world" : "local"
            );
            break;

          case 16: // Shift
            this.transform.setTranslationSnap(100);
            this.transform.setRotationSnap(THREE.MathUtils.degToRad(15));
            this.transform.setScaleSnap(0.25);
            break;

          case 87: // W
            this.transform.setMode("translate");
            break;

          case 69: // E
            this.transform.setMode("rotate");
            break;

          case 82: // R
            this.transform.setMode("scale");
            break;

          case 46: // R
            if (!this.selectedPiece) {
              return;
            }
            this.scene.remove(this.transform);
            this.scene.remove(this.groups[this.counter]);
            this.groups.splice(this.counter, 1);

            break;
        }
      });

      function onClick(e) {
        raycaster.setFromCamera(mouse, camera);
        let intersects = raycaster.intersectObjects(scene.children);
        if (e.target.tagName === "BUTTON" || e.target.tagName === "ION-ICON") {
          return "nc";
        } else {
          if (intersects.length > 0) {
            var selectedPiece = intersects[1];
            return selectedPiece;
          } else {
            var selectedPiece = false;
            return false;
          }
        }
      }
      var drag = false;
      window.addEventListener("mousedown", () => {
        drag = false;
      });
      document.addEventListener("mousemove", () => (drag = true));

      document.addEventListener("mouseup", (e) => {
        if (drag === false) {
          this.selectedPiece = onClick(e);
          this.select();
        }
      });

      function onMouseMove(event) {
        var canvasBounds = renderer.domElement.getBoundingClientRect();
        mouse.x =
          ((event.clientX - canvasBounds.left) /
            (canvasBounds.right - canvasBounds.left)) *
            2 -
          1;
        mouse.y =
          -(
            (event.clientY - canvasBounds.top) /
            (canvasBounds.bottom - canvasBounds.top)
          ) *
            2 +
          1;
      }
      window.addEventListener("mousemove", onMouseMove, false);
      window.addEventListener("resize", onWindowResize, false);
      function onWindowResize() {
        camera.aspect = window.innerWidth / 650;
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
      }

      const stats = Stats();
      function animate() {
        requestAnimationFrame(animate);

        render();

        stats.update();
      }

      function render() {
        // camera.lookAt(this.obj[0].position);
        renderer.render(scene, camera);
      }
      this.render = renderer;

      animate();
    },
    loaditem(counter) {
      this.getitem(counter.id);
    },
    loaderitem(element, i = 0) {
      var reflect = null;
      if (this.model[this.item.id].parts[i].default.code) {
        var material = new THREE.MeshPhongMaterial({
          color: Number(this.model[this.item.id].parts[i].default.code),
          shininess: this.model[this.item.id].parts[i].default.shininess,
          reflectivity: reflect,
        });
        if (this.model[this.item.id].parts[i].default.reflect === 1.0) {
          material.shading = THREE.SmoothShading;
          material.overdraw = true;
          console.log(material);
        }
      } else {
        var bm = null;
        const tloader = new THREE.TextureLoader();
        var texture2 = tloader.load(
          this.model[this.item.id].parts[i].default.pic,
          (texture) => {
            texture2.wrapS = THREE.RepeatWrapping;
            texture2.wrapT = THREE.RepeatWrapping;
            texture2.repeat.set(1, 1);
          }
        );
        var bm = tloader.load(this.model[this.item.id].parts[i].default.normal);

        var material = new THREE.MeshPhongMaterial({
          map: texture2,
          shininess: this.model[this.item.id].parts[i].default.shininess,
          normalMap: bm,
          reflectivity: reflect,
        });
        if (this.model[this.item.id].parts[i].default.reflect === 1.0) {
          material.shading = THREE.SmoothShading;
          material.overdraw = true;
          console.log(material);
        }
      }
      let objLoader = new FBXLoader();
      objLoader.load(this.model[this.item.id].parts[i].model, (object) => {
        object.position.y = -500;
        object.children[0].material = material;
        this.obj.push(object);
        this.group.add(object);
        i++;
        if (i < element.length) {
          this.loaderitem(element, i);
        }
      });
    },
    additem() {
      this.group = new THREE.Group();
      this.loaderitem(this.model[this.item.id].parts);
      this.group["name"] = this.model[this.item.id].item.name;
      this.group["get_pic"] = this.model[this.item.id].item.get_pic;
      this.groups.push(this.group);
      this.scene.add(this.group);
      this.transform.attach(this.group);
      this.scene.add(this.transform);
      this.selectedPiece = this.group;
    },
    select() {
      if (this.selectedPiece === "nc") {
        return;
      }
      if (!this.selectedPiece) {
        this.scene.remove(this.transform);
        return;
      }
      var jj = 0;
      for (var item of this.groups) {
        if (this.selectedPiece.object.parent.name[1] === item.name[1]) {
          this.counter = jj;
        }
        jj++;
      }
      if (this.counter > this.groups.length - 1) {
        this.counter = 0;
      }
      this.selectedPiece = this.groups[this.counter];
      this.transform.attach(this.groups[this.counter]);
      this.scene.add(this.transform);
    },
    selectbar(idx) {
      this.selectedPiece = this.groups[idx];
      console.log(this.groups[idx]);
      this.transform.attach(this.groups[idx]);
      this.scene.add(this.transform);
    },
    setcolor(counter, code, shininess, repeat, normal, id) {
      this.final[counter] = id;
      const material = new THREE.MeshPhongMaterial({
        color: Number(code),
        shininess: shininess,
      });
      this.obj[counter].children[0].material = material;
    },
    setcolor2(counter, code, shininess, repeat, normal, id) {
      this.final[counter] = id;
      const texture2 = new THREE.TextureLoader().load(code, (texture) => {
        texture2.wrapS = THREE.RepeatWrapping;
        texture2.wrapT = THREE.RepeatWrapping;
        texture2.repeat.set(repeat, repeat);
        var material = new THREE.MeshPhongMaterial({
          map: texture2,
          shininess: shininess,
        });
        for (var itemm of this.obj[counter].children) {
          for (var itemmm of itemm.children) {
            itemmm.material = material;
          }
          itemm.material = material;
        }
      });
    },
  },
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
</style>