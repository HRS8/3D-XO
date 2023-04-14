import * as THREE from "three";

import { useEffect } from "react";
import SceneInit from "./lib/SceneInit";
import TicTacToe from "./lib/TicTacToe";

export default function Home() {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");
    test.initScene();
    test.animate();

    const ticTacToe = new TicTacToe();
    test.scene.add(ticTacToe.board);

    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    function onMouseDown(event) {
      // Half-screen
      // Full-screen
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, test.camera);
      const intersects = raycaster.intersectObjects(
        ticTacToe.hiddenTiles.children
      );
      console.log(intersects);
      if (intersects.length > 0) {
        const xOffset = intersects[0].object.position.x;
        const yOffset = intersects[0].object.position.y;
        ticTacToe.addCrossOrCircle(xOffset, yOffset);
        ticTacToe.checkWinConditions();
        const index = ticTacToe.hiddenTiles.children.findIndex(
          (c) => c.uuid === intersects[0].object.uuid
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

    const scaleUp = (obj) => {
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
    const animate = () => {
      ticTacToe.boardLines.children.forEach(scaleUp);
      ticTacToe.circles.children.forEach(scaleUp);
      ticTacToe.crosses.children.forEach(scaleUp);
      ticTacToe.winLine.children.forEach(scaleUp);
      // ticTacToe.board.rotation.y += 0.002;
      requestAnimationFrame(animate);
    };
    animate();
  });

  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Full-screen */}
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}
