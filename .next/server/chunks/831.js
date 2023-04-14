"use strict";
exports.id = 831;
exports.ids = [831];
exports.modules = {

/***/ 831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TicTacToe)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);

class TicTacToe {
    constructor(){
        // create three js groups
        this.board = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
        this.circles = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
        this.crosses = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
        this.winLine = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
        this.boardLines = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
        this.hiddenTiles = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
        // add groups to the board
        this.board.add(this.circles);
        this.board.add(this.crosses);
        this.board.add(this.winLine);
        this.board.add(this.boardLines);
        this.board.add(this.hiddenTiles);
        // handle additional data
        this.currentPlayer = "o";
        this.boardCopy = [
            [
                "1",
                "2",
                "3"
            ],
            [
                "4",
                "5",
                "6"
            ],
            [
                "7",
                "8",
                "9"
            ], 
        ];
        this._createBoard();
    }
    _createBoard() {
        // vertical board lines
        this.boardLines.add(this._boardLine(4, 64, 4, -12, 0));
        this.boardLines.add(this._boardLine(4, 64, 4, 12, 0));
        // horizontal board lines
        this.boardLines.add(this._boardLine(64, 4, 4, 0, -12));
        this.boardLines.add(this._boardLine(64, 4, 4, 0, 12));
        // hidden tiles - top row
        this.hiddenTiles.add(this._hiddenTile(-24, 24));
        this.hiddenTiles.add(this._hiddenTile(0, 24));
        this.hiddenTiles.add(this._hiddenTile(24, 24));
        // hidden tiles - middle row
        this.hiddenTiles.add(this._hiddenTile(-24, 0));
        this.hiddenTiles.add(this._hiddenTile(0, 0));
        this.hiddenTiles.add(this._hiddenTile(24, 0));
        // hidden tiles - bottom row
        this.hiddenTiles.add(this._hiddenTile(-24, -24));
        this.hiddenTiles.add(this._hiddenTile(0, -24));
        this.hiddenTiles.add(this._hiddenTile(24, -24));
    // NOTE: Rotate backward for thumbnail.
    // this.board.rotation.x = -Math.PI / 8;
    }
    _boardLine(x, y, z, xOffset, yOffset) {
        const boardLineGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(x, y, z);
        const boardLineMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshNormalMaterial();
        const boardLine = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(boardLineGeometry, boardLineMaterial);
        boardLine.position.x = xOffset;
        boardLine.position.y = yOffset;
        boardLine.scale.x = 0;
        boardLine.scale.y = 0;
        boardLine.scale.z = 0;
        return boardLine;
    }
    _hiddenTile(xOffset1, yOffset1) {
        const hiddenTileGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(12, 12, 1);
        // NOTE: Create hidden mesh for ray casting.
        const hiddenTileMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshNormalMaterial();
        // const hiddenTileMaterial = new THREE.MeshBasicMaterial({ color: "black" });
        const hiddenTile = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(hiddenTileGeometry, hiddenTileMaterial);
        hiddenTile.position.x = xOffset1;
        hiddenTile.position.y = yOffset1;
        return hiddenTile;
    }
    _updateBoardCopy(xOffset2, yOffset2) {
        let i, j;
        if (xOffset2 < 0) {
            j = 0;
        } else if (xOffset2 === 0) {
            j = 1;
        } else {
            j = 2;
        }
        if (yOffset2 < 0) {
            i = 2;
        } else if (yOffset2 === 0) {
            i = 1;
        } else {
            i = 0;
        }
        if (this.currentPlayer === "o") {
            this.boardCopy[i][j] = "o";
        } else {
            this.boardCopy[i][j] = "x";
        }
        console.log(this.boardCopy);
    }
    checkWinConditions() {
        let strike;
        for(let n = 0; n < 3; n++){
            if (this._checkRowWin(n)) {
                strike = this._getStrike(64, 2, 4);
                strike.position.y = this._getOffsetY(n);
                this.winLine.add(strike);
            }
            if (this._checkColumnWin(n)) {
                strike = this._getStrike(2, 64, 4);
                strike.position.x = this._getOffsetX(n);
                this.winLine.add(strike);
            }
        }
        if (this._topLeftToBottomRightWin()) {
            strike = this._getStrike(90, 2, 4);
            strike.rotation.z = -Math.PI / 4;
            this.winLine.add(strike);
        }
        if (this._bottomLeftToTopRightWin()) {
            strike = this._getStrike(90, 2, 4);
            strike.rotation.z = Math.PI / 4;
            this.winLine.add(strike);
        }
    }
    _getStrike(x1, y1, z1) {
        const strikeGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(x1, y1, z1);
        const strikeMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshNormalMaterial();
        const strike = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(strikeGeometry, strikeMaterial);
        strike.scale.x = 0;
        strike.scale.y = 0;
        strike.scale.z = 0;
        return strike;
    }
    _checkRowWin(i) {
        return this.boardCopy[i][0] === this.boardCopy[i][1] && this.boardCopy[i][1] === this.boardCopy[i][2];
    }
    _checkColumnWin(j) {
        return this.boardCopy[0][j] === this.boardCopy[1][j] && this.boardCopy[1][j] === this.boardCopy[2][j];
    }
    _topLeftToBottomRightWin() {
        return this.boardCopy[0][0] === this.boardCopy[1][1] && this.boardCopy[1][1] === this.boardCopy[2][2];
    }
    _bottomLeftToTopRightWin() {
        return this.boardCopy[2][0] === this.boardCopy[1][1] && this.boardCopy[1][1] === this.boardCopy[0][2];
    }
    _getOffsetX(n) {
        if (n === 0) {
            return -24;
        } else if (n === 1) {
            return 0;
        } else {
            return 24;
        }
    }
    _getOffsetY(n1) {
        if (n1 === 0) {
            return 24;
        } else if (n1 === 1) {
            return 0;
        } else {
            return -24;
        }
    }
    // NOTE: This function was initially supposed to draw a cool
    // wavy line but I decided to remove that from the project scope.
    // drawLine(x, y, z, xOffset, yOffset) {
    //   const boardLineGeometry = new THREE.BoxGeometry(x, y, z, 100, 10);
    //   const boardLineMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    //   const boardLine = new THREE.Mesh(boardLineGeometry, boardLineMaterial);
    //   boardLine.position.x = xOffset;
    //   boardLine.position.y = yOffset;
    //   boardLine.scale.x = 1;
    //   boardLine.scale.y = 1;
    //   boardLine.scale.z = 1;
    //   // console.log(boardLineGeometry);
    //   // boardLine.geometry.vertices.map((v) => (v.z = Math.sin(v.x)));
    //   this.winLine.add(boardLine);
    // }
    addCrossOrCircle(xOffset3, yOffset3) {
        if (this.currentPlayer === "x") {
            this._addCross(xOffset3, yOffset3);
            this._updateBoardCopy(xOffset3, yOffset3);
            this.currentPlayer = "o";
        } else {
            this._addCircle(xOffset3, yOffset3);
            this._updateBoardCopy(xOffset3, yOffset3);
            this.currentPlayer = "x";
        }
    }
    _addCross(xOffset4, yOffset4) {
        const cross = new three__WEBPACK_IMPORTED_MODULE_0__.Group();
        const crossGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(12, 4, 4);
        const crossMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshNormalMaterial();
        const cross1 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(crossGeometry, crossMaterial);
        const cross2 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(crossGeometry, crossMaterial);
        cross1.rotation.z = Math.PI / 4;
        cross2.rotation.z = -Math.PI / 4;
        cross.add(cross1, cross2);
        cross.position.x = xOffset4;
        cross.position.y = yOffset4;
        cross.scale.x = 0;
        cross.scale.y = 0;
        cross.scale.z = 0;
        this.crosses.add(cross);
    }
    _addCircle(xOffset5, yOffset5) {
        const r = 6;
        const height = 4;
        const cylinderGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.CylinderGeometry(r, r, height, 100);
        const cylinderMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshNormalMaterial();
        const cylinder = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(cylinderGeometry, cylinderMaterial);
        cylinder.position.x = xOffset5;
        cylinder.position.y = yOffset5;
        cylinder.rotation.x = Math.PI / 2;
        cylinder.scale.x = 0;
        cylinder.scale.y = 0;
        cylinder.scale.z = 0;
        this.circles.add(cylinder);
    }
};


/***/ })

};
;