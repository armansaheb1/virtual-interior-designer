<template>
  <div id="elem" @mousemove="myFunction()" style="background: black; width: 100%; height: 100%; overflow: hidden ; position: absolute">
    <div
      v-if="!homepicture"
      style="
        position: absolute;
        width: 100%;
        height: 100%;
        background: white;
        top: 0;
        left: 0;
        z-index: 100000000000000000000000000000000000000000000000000000;
      "
    >
      <h4 style="margin-top: 10%">Please Select a Picture</h4>
      <br />
      <input id="file" @input="sendpic()" type="file" />
    </div>
    <div
      v-if="false"
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
    <div
        id="container"
        style="height: 100%; float: left; mrgin-top: 0px; width: 100% ; position: absolute; top: 0"
      ></div>
    <button
          v-if="menub && !menus"
          @click="menus = !menus"
          style="
            float: left;
            cursor: pointer;
            margin: 10px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            outline: none;
            position: absolute;
            top:10px;
            left: 10px;
            z-index:1000000000000000000000000000000000000000000000
          "
        >
        <img style="width: 90%; margin: 2.5%" src="/full-screen.png">
      </button>
      <div v-if="menus" class="topmenu menus" :style="`height: 50px; padding: 1px; width: 315px; left: 37%; position: relative ; background: white;border-radius: 0 0 10px 10px ; top: ${topstop}; z-index: 1000000000`">
        <button
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
        <img @click="homepicture = false" style="width: 90%; margin-top: -3px" src="/new image.png">
        </button>
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
        <img style="width: 90%; margin-top: -3px" src="/rotate.png">
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
        <img style="width: 90%; margin-top: -3px" src="/move.png">
        </button>
        <button
          @click="menus = !menus"
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
        <img style="width: 90%; margin-top: -3px" src="/full-screen.png">
        </button>
        
        <div class="dropdown">
          <button
          @click="qual = !qual"
          style="
            float: right;
            cursor: pointer;
            margin: 10px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            outline: none;
          "
        >
        <img style="width: 93%; margin-top: -3px" src="/export.png">
        </button>
          <div v-if="qual" class="dropdown-menu" style="top: 50px; left: 250px; display: unset" aria-labelledby="dropdownMenuButton">
            <a @click="capture(1920, 1080)" class="dropdown-item" href="#">(1920, 1080)</a>
            <a @click="capture(1366, 768)" class="dropdown-item" href="#">(1366, 768)</a>
            <a @click="capture(1024, 768)" class="dropdown-item" href="#">(1024, 768)</a>
          </div>
        </div>
        <button
        @click="deselect()"
          style="
            float: right;
            cursor: pointer;
            margin: 10px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            outline: none;
          "
        >
        <img style="width: 90%; margin-top: -3px" src="/select-none.png">
        </button>
        <button
        @click="deleteall()"
          style="
            float: right;
            cursor: pointer;
            margin: 10px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: none;
            outline: none;
          "
        >
        <img style="width: 92%; margin-top: -3px" src="/delete-all.png">
        </button>
        <button v-if="topstop == '0px'" @click="topstop = '-45px'" style="position: absolute; bottom: -10px;left: 45%; border: none; background-color: white;border-radius: 10px;">
          <i style="cursor: pointer" class="fa-solid fa-chevron-up"></i>
        </button>
        <button v-if="topstop == '-45px'" @click="topstop = '0px'" style="position: absolute; bottom: -10px;left: 45%; border: none; background-color: white;border-radius: 10px;">
          <i style="cursor: pointer" class="fa-solid fa-chevron-down"></i>
        </button>
      </div>
    </div>
    <div
      v-if="groups.length && menus"
      :style="`
        position: absolute;
        width: 10%;
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
      <div style="height: 51%; overflow: auto; border-bottom: solid 2px #cdcdcd!important; padding-bottom: 5px">
        <div
          v-for="(item, idx) in groups"
          v-bind:key="item"
          @click="selectbar(idx)"
          >
          <div v-if="item">
            <img v-if="item == selectedPiece" :src="item.get_pic" style="width: 80%;height: 80%; margin: 10% ; border-radius: 10px; border: solid cornflowerblue 2px; cursor: pointer" alt="">
            <img v-else :src="item.get_pic" style="width: 80%;height: 80%; margin: 10% ; border-radius: 10px; border: solid #ececec 2px; cursor: pointer" alt="">
            <button class="btn btn-danger" @click="deleteitem(idx)" style="position: relative; top: -25px ; left: -5px"><i class="fa-solid fa-trash"></i></button>
            <button class="btn btn-primary" @click="resetitem(idx)" style="position: relative; top: -25px ; left: 5px"><i class="fa-solid fa-rotate"></i></button>
          </div>
        </div>
      </div>
      <div v-if="selectedPiece.name !== 'light' && selectedPiece.name !== 'shadowlight'" style="height: 49%; overflow: auto; border-bottom: solid 2px #cdcdcd!important; padding-bottom: 5px; padding: 5%; color: #444">

        <label for="customRange2">Size</label>
        <input v-model="size" @input="selectedPiece.scale.set(size, size, size);" type="range" class="custom-range" min="0.2" max="1.8" step="0.01" style="width: 80%" id="customRange2">

        <div style="width: 100%; margin: auto; border-bottom: solid grey 1.5px; font-size:10px" id="handle">
            Dimension
          </div>

        <label for="customRange2">X</label><br>
          <input type="range" style="width: 90%" min="-450" max="100" class="custom-range" @input="selectedPiece.position.setX(axisx * 30)" v-model="axisx"  >

        <br><label for="customRange2">Y</label><br>
          <input type="range" style="width: 90%" min="-50" max="130" class="custom-range" @input="selectedPiece.position.setY(axisy * 30)" v-model="axisy"  >

        <br><label for="customRange2">Z</label><br>
          <input type="range" style="width: 90%" min="-450" max="100" class="custom-range" @input="selectedPiece.position.setZ(axisz * 30)" v-model="axisz"  >
          <br>
          <button class="btn btn-primary" @click="resetdimitem(selectedPiece)" ><i class="fa-solid fa-rotate"></i></button>
          <br><br>

        <div style="width: 100%; margin: auto; border-bottom: solid grey 1.5px; font-size:10px" id="handle">
            Rotation
          </div>

        <label for="customRange2">X</label><br>
          <input type="range" style="width: 90%" class="custom-range" min="0" max="359"  @input="selectedPiece.rotation.x = rotatex * 0.0175" v-model="rotatex"  >

        <br><label for="customRange2">Y</label><br>
          <input type="range" style="width: 90%" class="custom-range" min="0" max="359" @input="selectedPiece.rotation.y = rotatey * 0.0175" v-model="rotatey"  >

        <br><label for="customRange2">Z</label><br>
          <input type="range" style="width: 90%" class="custom-range" min="0" max="359" @input="selectedPiece.rotation.z = rotatez * 0.0175" v-model="rotatez"  ><br>
          <button class="btn btn-primary" @click="resetrotitem(selectedPiece)"><i class="fa-solid fa-rotate"></i></button>
          <br><br>
      </div>
      <div v-else-if="selectedPiece.name === 'shadowlight'" style="height: 49%; overflow: auto; border-bottom: solid 2px #cdcdcd!important; padding-bottom: 5px; padding: 5%; color: #444">
        
      </div>
      
      <div v-else style="height: 49%; overflow: auto; border-bottom: solid 2px #cdcdcd!important; padding-bottom: 5px; padding: 5%; color: #444">
        <div style="width: 100%; margin: auto; border-bottom: solid grey 1.5px;" id="handle">
            Dimension
          </div>
        <label for="customRange2">Intensity</label>
        <input v-model="intensity" @input="selectedPiece.intensity=intensity" type="range" class="custom-range" min="0" max="4" step="0.01" style="width: 80%" id="customRange2">
        <label hidden for="customRange2">Color</label>
        <input hidden v-model="color" @input="selectedPiece.color=color.replace('#', '')" type="color" class="custom-range" >
      </div>
    </div>
    <div
      v-if="menus"
      class="objects menus"
      style="
        position: absolute;
        width: 10%;
        background: white;
        height: 100%;
        background-size: 100% 100%;
        left: 0;
        top: 0;
        color: white;
      "
      >
      <div  style="height: 25%; overflow: auto; border-bottom: solid 2px #cdcdcd!important; padding-bottom: 5px; color: #444">
        <div>
          <h3 class="object">
            <i class="fa-solid fa-couch"></i>
            <p class="pc">Objects</p>
          </h3>
        
          <div
            class="subobject"
            style="
              position: absolute;
              width: 100%;
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
              width: 80%;
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
            <h3 @click="lightadd()">
            <i class="fa-solid fa-lightbulb"></i>
            <p class="pc">Directional</p>
          </h3>

            <h3 @click="shadowlightadd()">
            <i class="fa-solid fa-lightbulb"></i>
            <p class="pc">Shadow Light</p>
          </h3>
        </div>
        </div>
      </div>
      <div v-if="selectedPiece" style="height: 75%; overflow: auto; border-bottom: solid 2px #cdcdcd!important; padding-bottom: 5px; padding: 5%; color: #444; font-size: 12px;">
        <div style="width: 100%; margin: auto; border-bottom: solid grey 1.5px;" id="handle">
            Appearance
          </div>
          <div style="height: 86%; overflow-y: auto; padding: 5px">
            <div v-for="(item, idx) in selectedPiece.children" style="height: auto;" v-bind:key="item">
              <div style="width: 90%; margin: auto">
                <a>{{item.name}}</a><br>
                <select v-if="spd[idx]" v-model="color[idx]" @change="changecolor(idx)" style="border-color: grey; border-radius: 5px; padding: 2px; font-family:'UR'; width: 100%">
                  <option disabled selected>
                    Select Material
                  </option>
                  <option v-for="itemm in spd[idx].bump[0].colors" :value="itemm">
                    {{ itemm.name }}
                  </option>
                </select>
                <hr style="margin :2px">
              </div>
            </div>          
          </div>
          <br>

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
import draggable from 'vuedraggable'
import html2canvas from 'html2canvas'


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
    axisx: 0,
    axisy: 0,
    axisz: 0,
    rotatex: 0,
    rotatey: 0,
    rotatez: 0,
    shadowDarkness: 0.5,
    item: "",
    loaderitems: "",
    itemparts: [],
    color: [],
    qual: false,
    rotate: false,
    paint: false,
    mod: "",
    obj: [],
    patl: false,
    scene: "",
    selectedPiece: "",
    rightsleft: 0,
    homepicture: "/house.jpg",
    lights: [],
    size : 1,
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
    menub: true,
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
    this.initial();
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
    deleteall() {
      var i = 0
      for (var item in this.groups) {
        this.scene.remove(this.transform)
        this.scene.remove(this.groups[i])
        i++
      }
      this.groups = []


    },
    capture(w, h) {
      this.menub = false
      this.menus = false
      this.scene.remove(this.transform)
      
      document.querySelector("#elem").style.width = `${w}px`
      document.querySelector("#elem").style.height = `${h}px`
      document.querySelector("canvas").style.width = `${w}px`
      document.querySelector("canvas").style.height = `${h}px`
      setTimeout(() => {
        
        html2canvas(document.querySelector("#elem"), {
          useCORS: true,
          allowTaint: true,
          scale: 1,
        }).then(canvas => {
          var a = document.createElement('a');
          // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
          a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
          a.download = 'somefilename.jpg';
          a.click();
        })

        document.querySelector("#elem").style.width = '100%'
        document.querySelector("#elem").style.height = '100%'
        document.querySelector("canvas").style.width = '100%'
        document.querySelector("canvas").style.height = '100%'
        setTimeout(() => {
          this.menub = true
          this.menus = true
        }, 2000);

        }, 500);
        
        

    },
    deselect(){
      this.selectedPiece = false
      this.scene.remove(this.transform)
    },
    changecolor(id) {
      console.log(this.color[id].type)
      if (this.color[id].type === 'color') {
        console.log(this.color[id].code)
        var material = new THREE.MeshPhongMaterial({
          color: Number(this.color[id].code),
          shininess: this.color[id].shininess,
        });
      }
      else {
        const tloader = new THREE.TextureLoader();
          var texture2 = tloader.load(
            this.color[id].pic,
            (texture) => {
              texture2.wrapS = THREE.RepeatWrapping;
              texture2.wrapT = THREE.RepeatWrapping;
              texture2.repeat.set(1, 1);
            }
          );
        var material = new THREE.MeshPhongMaterial({
        map: texture2,
        shininess: 0,
      });
      }
      this.selectedPiece.children[id].children[0].material= material
    },
    log() {
    },
    myFunction() {
      if(this.selectedPiece && this.paint){
        window.scrollTo(0, 0); 
        var winh = document.querySelector('.homepic').getBoundingClientRect().height
        var winw = document.querySelector('.homepic').getBoundingClientRect().width
        if (parseInt(document.getElementById('dragmenu').style.top) >=  (winh) -350) {
          document.getElementById('dragmenu').style.top = `${(winh) -350}px`
        }
        if (parseInt(document.getElementById('dragmenu').style.left) >=  (winw) -200) {
          document.getElementById('dragmenu').style.left = `${(winw) -200}px`
        }
        if (parseInt(document.getElementById('dragmenu').style.top) <= 0) {
          document.getElementById('dragmenu').style.top = `${0}px`
        }
        if (parseInt(document.getElementById('dragmenu').style.left) <= 0) {
          document.getElementById('dragmenu').style.left = `${0}px`
        }
      }
    },
    resetitem(id) {
      this.groups[id].rotation.set(0, 0, 0)
      this.groups[id].position.set(0, 0, 0)
      this.groups[id].scale.set(1, 1, 1)
      this.size = 1
      this.axisx= 0
      this.axisy= 0
      this.axisz= 0
      this.rotatex= 0
      this.rotatey= 0
      this.rotatez= 0
    },
    resetdimitem(id) {
      id.position.set(0, 0, 0)
      this.axisx= 0
      this.axisy= 0
      this.axisz= 0

    },
    resetrotitem(id) {
      id.rotation.set(0, 0, 0)
      this.rotatex= 0
      this.rotatey= 0
      this.rotatez= 0
    },
    deleteitem(id) {
      this.scene.remove(this.transform);
      this.scene.remove(this.groups[id]);
      this.groups.splice(id, 1);
      this.groups = this.groups
    },
    setsub(id) {
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
      });
    },
    async getitem(id) {
      await axios.post(`/items`, { id: id }).then((response) => {
        this.item = response.data[0];
        this.getitemmaterials();
      });
    },
    async getitemdetails() {
      await axios.get(`/itemmaterials/${this.item.id}`).then((response) => {
        this.spd = response.data;
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
      var light = new THREE.DirectionalLight(0xffffff, 2);
      light.position.set(20, 400, 200)
      light.position.multiplyScalar(1.3);

      light.castShadow = false;
      light.shadowCameraVisible = false;

      light.shadowMapWidth = 1024;
      light.shadowMapHeight = 1024;

      var d = 5000;

      light.shadowCameraLeft = -d;
      light.shadowCameraRight = d;
      light.shadowCameraTop = d;
      light.shadowCameraBottom = -d;
      light.shadow.bias = -0.08;

      light.shadowCameraFar = 5000;
      light.shadowDarkness = 0.8;
      this.groups.push(light);
      this.obj.push(light);
      light.name = "light";
      light["get_pic"] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdb9AruWJzoGgT_RZkcBVM62bAeUft3ys2Rw&usqp=CAU';
      this.scene.add(light);
      this.transform.attach(light);
      this.scene.add(this.transform);
      this.selectedPiece = light
    },
    shadowlightadd() {
      var light = new THREE.DirectionalLight(0x999999, 0.01);
      light.position.set(20, 400, 200)
      light.position.multiplyScalar(1.3);

      light.castShadow = true;
      light.shadowCameraVisible = false;

      light.shadowMapWidth = 1024;
      light.shadowMapHeight = 1024;

      var d = 5000;

      light.shadowCameraLeft = -d;
      light.shadowCameraRight = d;
      light.shadowCameraTop = d;
      light.shadowCameraBottom = -d;
      light.shadow.bias = -0.08;

      light.shadowCameraFar = 5000;
      light.shadowDarkness = 0.8;
      this.groups.push(light);
      this.obj.push(light);
      light.name = "shadowlight";
      light["get_pic"] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiHgr13Csi24ym1dBqOTAba8GSlakOFFwYNueT7tIclZHlDOSK8EQSJIpkplwsZnXg60c&usqp=CAU';
      this.scene.add(light);
      this.transform.attach(light);
      this.scene.add(this.transform);
      this.selectedPiece = light
    },
    initial() {
      var winh = document.querySelector('#elem').getBoundingClientRect().height
      var winw = document.querySelector('#elem').getBoundingClientRect().width
      this.ph = winh
      this.pw = winw
      const scene = new THREE.Scene();
      this.scene = scene;

      var mainlight = new THREE.AmbientLight(0xffffff, 0.7)
      scene.add(mainlight);

      var light = new THREE.DirectionalLight(0xffffff, 0);
      light.position.set(0, 400, 0)
      light.position.multiplyScalar(1.3);

      light.castShadow = true;
      light.shadowCameraVisible = false;

      light.shadowMapWidth = 1024;
      light.shadowMapHeight = 1024;

      var d = 5000;

      light.shadowCameraLeft = -d;
      light.shadowCameraRight = d;
      light.shadowCameraTop = d;
      light.shadowCameraBottom = -d;
      light.shadow.bias = -0.08;

      light.shadowCameraFar = 5000;
      light.shadowDarkness = 0.4;
      scene.add(light);

      const geometry = new THREE.PlaneGeometry( 1000000, 1000000 );
      geometry.rotateX( - Math.PI / 2 );

      const material = new THREE.ShadowMaterial();
      material.opacity = 0.2;

      const plane = new THREE.Mesh( geometry, material );
      plane.position.y = -1001;
      plane.receiveShadow = true;

      scene.add(plane)


      const camera = new THREE.PerspectiveCamera(60, winw / winh, 1, 1000000);
      camera.position.set(1500, 400, 3000, 1000);
      camera.lookAt(-1000, 500, 0);
      camera.aspect = 1920 / 1080;
      

      const renderer = new THREE.WebGLRenderer({
        preserveDrawingBuffer: true,
        alpha: true,
        antialias: true,
        SSAO: true,
        precision: 'highp'
      });
      renderer.shadowMapEnabled = true;
      renderer.shadowMapSoft = true;
      renderer.shadowMap.enabled = true;
      renderer.setPixelRatio( window.devicePixelRatio );
      // renderer.setClearColor(0xFEFEFE);
      renderer.setSize(3840, 2160);
      document.querySelector("#container").appendChild(renderer.domElement);
      document.querySelector("canvas").style.width = '100%'
      document.querySelector("canvas").style.height = '100%'

      this.transform = new TransformControls(camera, renderer.domElement);
      this.transform.dragging = false

      this.transform.enableZoom = true;

      $('#elem').bind('resize', function () {
        camera.aspect = 3840 / 2160;
        renderer.setSize(3840, 2160);
        render();
      })

      window.addEventListener("resize", onWindowResize, false);
      function onWindowResize() {
        camera.aspect = 3840 / 2160;
        renderer.setSize(3840, 2160);
        render();
      }

      const stats = Stats();
      function animate() {
        requestAnimationFrame(animate);

        render();

        stats.update();
      }

      function render() {
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
        });
        if (this.model[this.item.id].parts[i].default.reflect === 1.0) {
          material.shading = THREE.SmoothShading;
          material.overdraw = true;
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
        }
      }
      let objLoader = new FBXLoader();
      objLoader.load(this.model[this.item.id].parts[i].model, (object) => {
        object.position.y = -1000;
        object.children[0].material = material;
        this.obj.push(object);
        object['name'] = this.model[this.item.id].parts[i].name
        object.traverse(function (node) {
          if (node.isMesh) {
            node.receiveShadow = true;
            node.castShadow =true
          }
        })
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
      this.group["myid"] = this.model[this.item.id].item.id;
      
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