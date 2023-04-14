"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,631,440];
exports.modules = {

/***/ 388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__(248);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./pages/lib/SceneInit.js
var SceneInit = __webpack_require__(63);
// EXTERNAL MODULE: ./pages/lib/TicTacToe.js
var TicTacToe = __webpack_require__(831);
;// CONCATENATED MODULE: ./pages/index.jsx





function Home() {
    (0,external_react_.useEffect)(()=>{
        const test = new SceneInit["default"]("myThreeJsCanvas");
        test.initScene();
        test.animate();
        const ticTacToe = new TicTacToe["default"]();
        test.scene.add(ticTacToe.board);
        const mouse = new external_three_.Vector2();
        const raycaster = new external_three_.Raycaster();
        function onMouseDown(event) {
            // Half-screen
            // Full-screen
            mouse.x = event.clientX / window.innerWidth * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, test.camera);
            const intersects = raycaster.intersectObjects(ticTacToe.hiddenTiles.children);
            console.log(intersects);
            if (intersects.length > 0) {
                const xOffset = intersects[0].object.position.x;
                const yOffset = intersects[0].object.position.y;
                ticTacToe.addCrossOrCircle(xOffset, yOffset);
                ticTacToe.checkWinConditions();
                const index = ticTacToe.hiddenTiles.children.findIndex((c)=>c.uuid === intersects[0].object.uuid
                );
                ticTacToe.hiddenTiles.children.splice(index, 1);
            }
        // NOTE: Demo ray being cast past objects.
        // for (let i = 0; i < intersects.length; i++) {
        //   intersects[i].object.material.wireframe =
        //     !intersects[i].object.material.wireframe;
        // }
        }
        window.addEventListener("mousedown", onMouseDown, false);
        const scaleUp = (obj)=>{
            if (obj.scale.x < 1) {
                obj.scale.x += 0.04;
            }
            if (obj.scale.y < 1) {
                obj.scale.y += 0.04;
            }
            if (obj.scale.z < 1) {
                obj.scale.z += 0.04;
            }
        };
        // NOTE: Animate board and player moves.
        const animate = ()=>{
            ticTacToe.boardLines.children.forEach(scaleUp);
            ticTacToe.circles.children.forEach(scaleUp);
            ticTacToe.crosses.children.forEach(scaleUp);
            ticTacToe.winLine.children.forEach(scaleUp);
            // ticTacToe.board.rotation.y += 0.002;
            requestAnimationFrame(animate);
        };
        animate();
    });
    return(/*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
        className: "flex flex-col items-center justify-center ",
        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("canvas", {
            id: "myThreeJsCanvas"
        })
    }));
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 248:
/***/ ((module) => {

module.exports = require("three");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [595,831,63], () => (__webpack_exec__(388)));
module.exports = __webpack_exports__;

})();