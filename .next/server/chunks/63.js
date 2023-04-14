"use strict";
exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 63:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SceneInit)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(365);
/* harmony import */ var three_examples_jsm_libs_stats_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);



class SceneInit {
    constructor(canvasID, camera, scene, stats, controls, renderer, fov = 36){
        this.fov = fov;
        this.scene = scene;
        this.stats = stats;
        this.camera = camera;
        this.controls = controls;
        this.renderer = renderer;
        this.canvasID = canvasID;
    }
    initScene() {
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.z = 128;
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
        // const spaceTexture = new THREE.TextureLoader().load("space2.jpeg");
        // this.scene.background = spaceTexture;
        // specify a canvas which is already created in the HTML file and tagged by an id
        // aliasing enabled
        const canvas = document.getElementById(this.canvasID);
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
            canvas,
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__/* .OrbitControls */ .z(this.camera, this.renderer.domElement);
        // this.stats = Stats();
        // document.body.appendChild(this.stats.dom);
        // ambient light which is for the whole scene
        // let ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        // ambientLight.castShadow = false;
        // this.scene.add(ambientLight);
        // spot light which is illuminating the chart directly
        // let spotLight = new THREE.SpotLight(0xffffff, 0.55);
        // spotLight.castShadow = true;
        // spotLight.position.set(0, 40, 10);
        // this.scene.add(spotLight);
        // if window resizes
        window.addEventListener("resize", ()=>this.onWindowResize()
        , false);
    }
    animate() {
        // NOTE: Window is implied.
        // requestAnimationFrame(this.animate.bind(this));
        window.requestAnimationFrame(this.animate.bind(this));
        this.render();
        // this.stats.update();
        this.controls.update();
    }
    render() {
        this.renderer.render(this.scene, this.camera);
    }
    onWindowResize() {
        // this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.aspect = this.splitScreen.clientWidth / this.splitScreen.clientHeight;
        this.camera.updateProjectionMatrix();
        // this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setSize(this.splitScreen.clientWidth, this.splitScreen.clientHeight);
    }
};


/***/ })

};
;