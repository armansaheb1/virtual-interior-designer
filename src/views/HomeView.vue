<template>
  <div id="elem" style="background: black">
    <div
      v-if="homepicture"
      style="
        position: absolute;
        width: 100%;
        height: 100%;
        background: #223;
        top: 0;
        left: 0;
        z-index: 1000;
      "
    >
      <h4 style="margin-top: 10%">Please Select a Picture</h4>
      <br />
      <input id="file" @input="sendpic" type="file" />
    </div>
    <div
      class="homepic"
      :style="`position:absolute ;height: 100% ; background: url(/Untitled-design-35.jpg); background-size: 100% 100%; right: 15%;left:15%; top : 0`"
    >
      <button
        v-if="!rotate"
        @click="rotate = true"
        style="float: left; margin: 10px"
      >
        <ion-icon name="sync-outline"></ion-icon>
      </button>
      <button
        v-if="rotate"
        @click="rotate = false"
        style="float: left; margin: 10px"
      >
        <ion-icon name="move-outline"></ion-icon>
      </button>

      <div
        id="container"
        style="height: 550px; float: left; mrgin-top: 0px; width: 100%"
      ></div>
    </div>
    <div
      style="
        position: absolute;
        width: 15%;
        background: #223;
        height: 100%;
        background-size: 100% 100%;
        right: 0;
        top: 0;
        color: white;
      "
    >
      <div>
        <h3>Used Objects</h3>
        <hr />
        <div>
          <div
            v-for="(item, idx) in groups"
            v-bind:key="item"
            @click="selectbar(idx)"
            style="cursor: pointer"
          >
            <h4>
              {{ item["name"] }}
            </h4>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <div
      class="objects"
      style="
        position: absolute;
        width: 15%;
        background: #223;
        height: 100%;
        background-size: 100% 100%;
        left: 0;
        top: 0;
        color: white;
      "
    >
      <div>
        <h3>Objects</h3>
        <hr style="margin: 0" />
        <div class="subobject">
          <div
            v-for="item in items"
            v-bind:key="item"
            @click="loaditem(item)"
            style="cursor: pointer; background: #335 ; back"
          >
            <h4 style="margin: 0; padding: 15px">
              {{ item.name }}
            </h4>
            <hr style="margin: 0" />
          </div>
        </div>
      </div>
      <div class="lights">
        <h3>Lights</h3>
        <hr style="margin: 0" />
        <div
          class="sublights"
          @click="lightadd()"
          style="cursor: pointer; background: #335 ; back"
        >
          <h4 style="margin: 0; padding: 15px">Light</h4>
          <hr />
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
    itemparts: [],
    rotate: false,
    mod: "",
    obj: [],
    patl: false,
    scene: "",
    selectedPiece: "",
    homepicture: "",
    lights: [],
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
    groups: [],
    group: [],
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
        this.additem(this.itemparts);
      });
    },
    async getitemmaterials() {
      await axios.get(`/itemmaterials/${this.item.id}`).then((response) => {
        this.model[this.item.id] = { parts: response.data, item: this.item };
        setTimeout(() => {
          this.getitemparts();
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
      this.group = new THREE.Group();
      var light = new THREE.DirectionalLight(0x666666, 2);
      light.position.set(1, 1, 1);
      this.group.add(light);
      this.group["name"] = "light";
      this.groups.push(this.group);
      this.obj.push(this.group);
      light.name = ["light", this.obj.length];
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
      renderer.setSize(window.innerWidth * 0.7, window.innerHeight);
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
        if (intersects.length > 0) {
          var selectedPiece = intersects[1];
          return selectedPiece;
        } else {
          console.log(e.target);
          if (e.currentTarget.tagName !== "button") {
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
        renderer.setSize(window.innerWidth * 0.7, window.innerHeight);
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
      var item = element[i];
      let objLoader = new FBXLoader();
      objLoader.load(item.model, (object) => {
        object.position.y = -500;
        this.obj.push(object);
        if (item.default.code) {
          const material = new THREE.MeshPhongMaterial({
            color: Number(item.default.code),
            shininess: item.default.shininess,
          });
          object.material = material;
        } else {
          var pic = item.default.pic;
          new THREE.TextureLoader().load(pic, (texture) => {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(item.default.repeat, item.default.repeat);
            var material = new THREE.MeshPhongMaterial({
              map: texture,
              shininess: item.default.shininess,
            });
            object.material = material;
          });
        }
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
      this.groups.push(this.group);
      this.scene.add(this.group);
      this.transform.attach(this.group);
      this.scene.add(this.transform);
      this.selectedPiece = this.group;
    },
    select() {
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
      console.log(this.groups[this.counter]);
    },
    selectbar(idx) {
      this.selectedPiece = this.groups[idx];
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
        console.log(this.obj[counter].children[0].material);
      });
    },
  },
};
</script>
<style>
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
.subobject {
  display: none;
}
.sublights {
  display: none;
}
.objects:hover .subobject {
  display: block;
}
.lights:hover .sublights {
  display: block;
}
</style>