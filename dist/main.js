/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ \"./src/object.js\");\n/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target */ \"./src/target.js\");\n\n\n\nclass Game {\n    constructor() {\n        this.canvas = document.getElementById('game-canvas');\n        this.ctx = this.canvas.getContext('2d');\n        this.canvas.width = window.innerWidth;\n        this.canvas.height = window.innerHeight * 0.8;\n        this.gravity = 0.5\n        this.userObject = new _object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n        this.targets = []\n        this.level = 1\n        this.userDirX = 0\n        this.userDirY = 0\n        this.arrowX = this.userObject.posX + 10\n        this.arrowY = this.userObject.posY + 10\n\n        this.addTargets()\n    }\n\n    allTargetsHit() {\n        for (let i = 0; i < this.targets.length; i++) {\n            if (this.targets[i].color === 'red') {\n                return false\n            }\n        }\n        return true\n    }\n\n    detectCollision() {\n        for (let i = 0; i < this.targets.length; i++) {\n            let target = this.targets[i]\n            if (this.userObject.posX > (target.posX - target.radius - 10) && this.userObject.posX < (target.posX + target.radius + 10)\n                && this.userObject.posY > (target.posY - target.radius - 10) && this.userObject.posY < (target.posY + target.radius + 10) && target.color === 'red') {\n                this.userObject.posX = target.posX\n                this.userObject.posY = target.posY\n                target.color = 'green'\n                return true\n            }\n        }\n        return false\n    }\n\n    addTargets() {\n        for (let i = 0; i < this.level; i++) {\n            this.targets.push(new _target__WEBPACK_IMPORTED_MODULE_1__[\"default\"]())\n        }\n    }\n\n    draw() {\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.ctx.fillStyle = 'black';\n        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)\n\n        this.ctx.beginPath();\n        this.ctx.arc(this.userObject.posX,this.userObject.posY, this.userObject.radius, 0, 2 * Math.PI);\n        this.ctx.fillStyle = 'lightgray';\n        this.ctx.fill();\n        this.ctx.stroke();\n\n        this.ctx.beginPath();\n        this.ctx.moveTo(this.userObject.posX, this.userObject.posY);\n        this.ctx.lineTo(this.arrowX, this.arrowY);\n        this.ctx.strokeStyle = 'white';\n        this.ctx.stroke();\n\n        this.targets.forEach(target => {\n            this.ctx.beginPath();\n            this.ctx.arc(target.posX, target.posY, target.radius, 0, 2 * Math.PI);\n            this.ctx.fillStyle = target.color;\n            this.ctx.fill();\n            this.ctx.stroke();\n        })\n    }\n\n    allObjects() {\n        return [].concat(this.targets, this.userObject)\n    }\n\n    updateObjectPos(vx, vy) {\n        const updateObject = setInterval(() => {\n            // stop object if it hit a target\n            if (this.detectCollision()) {\n                vx = 0\n                vy = 0\n                clearInterval(updateObject)\n            }\n            this.userObject.posX += vx * .1\n            this.userObject.posY += vy * .1\n            // gravity if object is moving\n            if (vx !== 0) {\n                vy += 3\n            }\n            this.draw()\n\n            if (this.allTargetsHit()) {\n                this.reset()\n                this.nextLevel()\n                this.addTargets()\n                clearInterval(updateObject)\n            }\n            \n        }, 1000/40);\n    }\n\n    reset() {\n        this.targets = []\n    }\n\n    nextLevel() {\n        this.level++\n    }\n\n    updateDirectionArrow(vx, vy) {\n            this.arrowX = this.userObject.posX + vx\n            this.arrowY = this.userObject.posY + vy\n            this.draw()\n    }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ \"./src/object.js\");\n\n\n\n\nlet g = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\ng.draw()    \n\nwindow.onload = () => {\n\n    document.addEventListener('keydown', (e) => {\n        if (e.keyCode == 38) { // up arrow is pressed\n            console.log(\"hello\")\n        }\n\n        if (e.keyCode == 40) { // down arrow is pressed\n            console.log(\"hello\")\n        }\n    })\n\n    document.addEventListener('keydown', e => {\n        if (e.keyCode == 32) {\n            g.updateObjectPos()\n        }\n    })\n\n    document.addEventListener('click' , e => {\n        const diffX = g.userObject.posX - e.clientX\n        const diffY = g.userObject.posY - e.clientY\n        g.updateObjectPos(diffX, diffY)\n    })\n\n    document.addEventListener('mousemove', e => {\n        const diffX = g.userObject.posX - e.clientX\n        const diffY = g.userObject.posY - e.clientY\n        g.updateDirectionArrow(diffX, diffY)\n    })\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Object {\n    constructor() {\n        this.posX = window.innerWidth / 2\n        this.posY = window.innerHeight / 2\n        this.velX = 5\n        this.velY = 5\n        this.radius = 10\n        this.gravity = 0.5\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object);\n\n//# sourceURL=webpack:///./src/object.js?");

/***/ }),

/***/ "./src/target.js":
/*!***********************!*\
  !*** ./src/target.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Target {\n    constructor() {\n        this.posX = 0\n        this.posY = 0\n        this.radius = 10\n        this.color = 'red'\n        this.randomPosition()\n    }\n\n    randomPosition() {\n        const maxWidth = window.innerWidth \n        const maxHeight = (window.innerHeight * .8)\n        this.posX = Math.floor(Math.random() * (maxWidth-50)) + 10\n        this.posY = Math.floor(Math.random() * (maxHeight-50)) + 10\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Target);\n\n//# sourceURL=webpack:///./src/target.js?");

/***/ })

/******/ });