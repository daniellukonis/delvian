/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/game/canvas.js":
/*!*******************************!*\
  !*** ./client/game/canvas.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvas": () => (/* binding */ canvas),
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "context": () => (/* binding */ context),
/* harmony export */   "resizeCanvas": () => (/* binding */ resizeCanvas)
/* harmony export */ });
var canvas = document.querySelector('#canvas');
var container = document.querySelector('#canvas-container');
var context = canvas.getContext('2d');
function resizeCanvas(canvas, container) {
  canvas.width = Math.floor(container.clientWidth);
  canvas.height = Math.floor(container.clientHeight);
}


// canvas.addEventListener('mousemove', e => {
//     const target = e.target
//     const rect = target.getBoundingClientRect()
//     const x = Math.floor(e.clientX - rect.left)
//     const y = Math.floor(e.clientY - rect.top)
//     console.log(x, y)
// })

/***/ }),

/***/ "./client/game/engine.js":
/*!*******************************!*\
  !*** ./client/game/engine.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "engine": () => (/* binding */ engine),
/* harmony export */   "startEngine": () => (/* binding */ startEngine)
/* harmony export */ });
var fpsData = {
  interval: 1000 / 30,
  now: 0,
  then: Date.now(),
  delta: 0
};
function startEngine(entity) {
  requestAnimationFrame(function () {
    return startEngine(entity);
  });
  fpsData.now = Date.now();
  fpsData.delta = fpsData.now - fpsData.then;
  if (fpsData.delta > fpsData.interval) {
    fpsData.then = fpsData.now - fpsData.delta % fpsData.interval;

    // loop functions below
    entity.render();
    // console.log(1)
    // end loop  funcitons
  }

  // fpsData.averageFPS = (fpsData.averageFPS + fpsData.delta) / 2

  // fpsData.loopTimer++
}

function engine(entity) {
  requestAnimationFrame(function () {
    return engine(entity);
  });
  entity.render();
  console.log(1);
}


/***/ }),

/***/ "./client/game/entity.js":
/*!*******************************!*\
  !*** ./client/game/entity.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Entity": () => (/* binding */ Entity)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Entity = /*#__PURE__*/function () {
  function Entity(canvas, context) {
    _classCallCheck(this, Entity);
    this.canvas = canvas;
    this.context = context;
    this.positionX = Math.floor(this.canvas.width / 2);
    this.positionY = Math.floor(this.canvas.height / 2);
    this.speedX = 1;
    this.speedY = 1;
    this.angle = 0;
    this.radius = 40;
  }
  _createClass(Entity, [{
    key: "move",
    value: function move() {
      this.positionX += this.speedX;
      this.positionY += this.speedY;
    }
  }, {
    key: "setPosition",
    value: function setPosition() {
      this.positionX = Math.floor(this.canvas.width / 2);
      this.positionY = Math.floor(this.canvas.height / 2);
    }
  }, {
    key: "setAngle",
    value: function setAngle(x2, y2) {
      var x1 = this.positionX;
      var y1 = this.positionY;
      var x = x2 - x1;
      var angle = Math.atan2(y2 - y1, x2 - x1);
      this.angle = angle;
    }
  }, {
    key: "render",
    value: function render() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this,
        context = _ref.context;
      context.fillStyle = '#555555';
      context.strokeStyle = '#888888';
      context.lineWidth = 4;
      context.save();
      context.translate(this.positionX, this.positionY);
      context.rotate(this.angle);
      context.beginPath();
      context.moveTo(0, 0);
      context.arc(0, 0, this.radius, 0, Math.PI * 2);
      context.fill();
      context.stroke();
      context.restore();
    }
  }, {
    key: "animate",
    value: function animate(x, y) {
      this.setAngle(angle);
      this.render();
    }
  }]);
  return Entity;
}();


/***/ }),

/***/ "./client/game/index.js":
/*!******************************!*\
  !*** ./client/game/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Entity": () => (/* reexport safe */ _entity__WEBPACK_IMPORTED_MODULE_0__.Entity),
/* harmony export */   "canvas": () => (/* reexport safe */ _canvas__WEBPACK_IMPORTED_MODULE_1__.canvas),
/* harmony export */   "container": () => (/* reexport safe */ _canvas__WEBPACK_IMPORTED_MODULE_1__.container),
/* harmony export */   "context": () => (/* reexport safe */ _canvas__WEBPACK_IMPORTED_MODULE_1__.context),
/* harmony export */   "engine": () => (/* reexport safe */ _engine__WEBPACK_IMPORTED_MODULE_2__.engine),
/* harmony export */   "resizeCanvas": () => (/* reexport safe */ _canvas__WEBPACK_IMPORTED_MODULE_1__.resizeCanvas),
/* harmony export */   "startEngine": () => (/* reexport safe */ _engine__WEBPACK_IMPORTED_MODULE_2__.startEngine)
/* harmony export */ });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./client/game/entity.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./client/game/canvas.js");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ "./client/game/engine.js");





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./client/game/index.js");

(0,_game__WEBPACK_IMPORTED_MODULE_0__.resizeCanvas)(_game__WEBPACK_IMPORTED_MODULE_0__.canvas, _game__WEBPACK_IMPORTED_MODULE_0__.container);
var e1 = new _game__WEBPACK_IMPORTED_MODULE_0__.Entity(_game__WEBPACK_IMPORTED_MODULE_0__.canvas, _game__WEBPACK_IMPORTED_MODULE_0__.context);
window.addEventListener('resize', function (e) {
  (0,_game__WEBPACK_IMPORTED_MODULE_0__.resizeCanvas)(_game__WEBPACK_IMPORTED_MODULE_0__.canvas, _game__WEBPACK_IMPORTED_MODULE_0__.container);
  e1.setPosition();
});
_game__WEBPACK_IMPORTED_MODULE_0__.canvas.addEventListener('mousemove', function (e) {
  var target = e.target;
  var rect = target.getBoundingClientRect();
  var x = Math.floor(e.clientX - rect.left);
  var y = Math.floor(e.clientY - rect.top);
  e1.setAngle(x, y);
});
(0,_game__WEBPACK_IMPORTED_MODULE_0__.startEngine)(e1);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map