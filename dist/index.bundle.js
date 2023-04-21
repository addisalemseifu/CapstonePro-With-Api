"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #edeff5;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.navbar {\r\n  background-color: #444;\r\n  color: #fff;\r\n  padding: 0 15%;\r\n  font-weight: 600;\r\n}\r\n\r\n.logo {\r\n  width: 3.5rem;\r\n  height: 3.5rem;\r\n  margin: 1.5rem 1rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n.navlinks {\r\n  list-style: none;\r\n  justify-content: space-around;\r\n  flex: 11;\r\n  padding: 35px 0;\r\n  padding-inline-start: 0;\r\n}\r\n\r\n.navlinks a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n.navitems {\r\n  padding: 0 0.2rem;\r\n}\r\n\r\n/* main secion */\r\n\r\n.mainContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.movieContaier {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 3rem;\r\n}\r\n\r\n.movie {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #807e7e;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  margin: 2rem;\r\n}\r\n\r\n.picture {\r\n  border-radius: 5px;\r\n  width: 80%;\r\n  height: 20rem;\r\n  transition: all 0.4s ease-in-out;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.picture:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.space-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 80%;\r\n}\r\n\r\n.space {\r\n  text-align: center;\r\n  margin-bottom: 0.4rem;\r\n  color: #fff;\r\n}\r\n\r\n.fa-heart {\r\n  color: #e21010;\r\n}\r\n\r\n.like-count {\r\n  color: #771f1f;\r\n  font-weight: 700;\r\n}\r\n\r\n.comments,.reserve {\r\n  padding: 0.4rem 1rem;\r\n  margin: 0.4rem 0;\r\n  text-transform: uppercase;\r\n  background-color: #e7a921;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  border-color: #771f1f;\r\n}\r\n\r\n.comments:hover,.reserve:hover {\r\n  padding: 0.4rem 1rem;\r\n  margin: 0.4rem 0;\r\n  text-transform: uppercase;\r\n  background-color: #fff;\r\n  color: #e7a921;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  border-color: #771f1f;\r\n}\r\n\r\nspan {\r\n  display: flex;\r\n  margin-bottom: 0.4rem;\r\n}\r\n\r\n/* footer */\r\n\r\n.footer {\r\n  text-align: center;\r\n  padding: 2rem 0;\r\n  color: #fff;\r\n  background-color: #444;\r\n}\r\n\r\n/* Comment popup page */\r\n\r\n.comment-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 6.5rem;\r\n  left: 8rem;\r\n  width: 75%;\r\n  transform: translateY(-100rem);\r\n  border: 2px solid red;\r\n  margin-left: auto;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.fa-xmark {\r\n  font-size: 3rem;\r\n  color: black;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.active {\r\n  transform: translateY(0);\r\n}\r\n\r\n.deactive {\r\n  transform: translateY(-10000rem);\r\n}\r\n\r\n.comment-img {\r\n  width: 80%;\r\n  height: 16rem;\r\n  transition: all 0.4s ease-in-out;\r\n  border-radius: 0.6rem;\r\n}\r\n\r\n.comment-img:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.com-header {\r\n  margin-top: 0.6rem;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\n.discription {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 1rem;\r\n  justify-content: space-between;\r\n}\r\n\r\n.add-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,QAAQ;EACR,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA,gBAAgB;;AAEhB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,yBAAyB;EACzB,yBAAyB;EACzB,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,yBAAyB;EACzB,sBAAsB;EACtB,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA,WAAW;;AAEX;EACE,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,sBAAsB;AACxB;;AAEA,uBAAuB;;AAEvB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,UAAU;EACV,8BAA8B;EAC9B,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,QAAQ;AACV;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,UAAU;EACV,aAAa;EACb,gCAAgC;EAChC,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #edeff5;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.navbar {\r\n  background-color: #444;\r\n  color: #fff;\r\n  padding: 0 15%;\r\n  font-weight: 600;\r\n}\r\n\r\n.logo {\r\n  width: 3.5rem;\r\n  height: 3.5rem;\r\n  margin: 1.5rem 1rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n.navlinks {\r\n  list-style: none;\r\n  justify-content: space-around;\r\n  flex: 11;\r\n  padding: 35px 0;\r\n  padding-inline-start: 0;\r\n}\r\n\r\n.navlinks a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n.navitems {\r\n  padding: 0 0.2rem;\r\n}\r\n\r\n/* main secion */\r\n\r\n.mainContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.movieContaier {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 3rem;\r\n}\r\n\r\n.movie {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #807e7e;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  margin: 2rem;\r\n}\r\n\r\n.picture {\r\n  border-radius: 5px;\r\n  width: 80%;\r\n  height: 20rem;\r\n  transition: all 0.4s ease-in-out;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.picture:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.space-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 80%;\r\n}\r\n\r\n.space {\r\n  text-align: center;\r\n  margin-bottom: 0.4rem;\r\n  color: #fff;\r\n}\r\n\r\n.fa-heart {\r\n  color: #e21010;\r\n}\r\n\r\n.like-count {\r\n  color: #771f1f;\r\n  font-weight: 700;\r\n}\r\n\r\n.comments,.reserve {\r\n  padding: 0.4rem 1rem;\r\n  margin: 0.4rem 0;\r\n  text-transform: uppercase;\r\n  background-color: #e7a921;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  border-color: #771f1f;\r\n}\r\n\r\n.comments:hover,.reserve:hover {\r\n  padding: 0.4rem 1rem;\r\n  margin: 0.4rem 0;\r\n  text-transform: uppercase;\r\n  background-color: #fff;\r\n  color: #e7a921;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  border-color: #771f1f;\r\n}\r\n\r\nspan {\r\n  display: flex;\r\n  margin-bottom: 0.4rem;\r\n}\r\n\r\n/* footer */\r\n\r\n.footer {\r\n  text-align: center;\r\n  padding: 2rem 0;\r\n  color: #fff;\r\n  background-color: #444;\r\n}\r\n\r\n/* Comment popup page */\r\n\r\n.comment-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 6.5rem;\r\n  left: 8rem;\r\n  width: 75%;\r\n  transform: translateY(-100rem);\r\n  border: 2px solid red;\r\n  margin-left: auto;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.fa-xmark {\r\n  font-size: 3rem;\r\n  color: black;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.active {\r\n  transform: translateY(0);\r\n}\r\n\r\n.deactive {\r\n  transform: translateY(-10000rem);\r\n}\r\n\r\n.comment-img {\r\n  width: 80%;\r\n  height: 16rem;\r\n  transition: all 0.4s ease-in-out;\r\n  border-radius: 0.6rem;\r\n}\r\n\r\n.comment-img:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.com-header {\r\n  margin-top: 0.6rem;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\n.discription {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 1rem;\r\n  justify-content: space-between;\r\n}\r\n\r\n.add-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_movie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/movie.js */ "./src/modules/movie.js");
/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comment.js */ "./src/modules/comment.js");
/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/like.js */ "./src/modules/like.js");





const movieContaier = document.querySelector('.movieContaier');

const commentPopup = document.querySelector('.comment-popup');
const mainContainer = document.querySelector('.mainContainer');
document.addEventListener('DOMContentLoaded', () => {
  _modules_movie_js__WEBPACK_IMPORTED_MODULE_1__["default"].populate();
});

movieContaier.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-heart')) {
    const getId = e.target.parentElement.parentElement.id;
    _modules_like_js__WEBPACK_IMPORTED_MODULE_3__["default"].likePost(getId);
  }
  if (e.target.classList.contains('comments')) {
    const comentId = e.target.parentElement.id;
    if (commentPopup.classList.contains('active')) {
      commentPopup.classList.remove('active');
    }
    commentPopup.classList.add('active');
    mainContainer.classList.add('deactive');
    _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].commentPopulator(comentId);
  }
});

commentPopup.addEventListener('click', (e) => {
  let commentObject;
  let ids = 0;
  if (e.target.classList.contains('submitComment')) {
    ids = e.target.id;
    const userName = document.querySelector('.userName');
    const userComment = document.querySelector('.userComment');
    if (userName.value !== '' && userComment !== '') {
      commentObject = {
        item_id: ids,
        username: userName.value,
        comment: userComment.value,
      };
    }
    _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].commentPost(commentObject, ids);
  }

  if (e.target.classList.contains('fa-xmark')) {
    if (commentPopup.classList.contains('active')) {
      commentPopup.classList.remove('active');
    }
    mainContainer.classList.remove('deactive');
  }
});


/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Comment)
/* harmony export */ });
const url = 'https://api.tvmaze.com/search/shows?q=simpsons';
const appKey = 'xyUc6vOROrsRVucrRen9';
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appKey}/comments`;
const commentPopup = document.querySelector('.comment-popup');
let commentArray = [];
class Comment {
  static commentPost = async (comment, id) => {
    await fetch(commentUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comment),
    });
    Comment.commentPopulator(id);
  }

  static commentCounter = (commens) => {
    if (commens == null || commens === undefined) {
      return 'The surver is not responding at the moment. Please wait!!';
    }
    const count = commens.length;
    return count;
  }

    static commentPopulator = async (ides) => {
      const commentList = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appKey}/comments?item_id=${ides}`;
      const rese = await fetch(commentList, {
        method: 'GET',
      });
      const resgett = await rese.json();
      const request = new Request(url);
      const response = await fetch(request);
      const bodyResponse = await response.json();
      for (let i = 0; i < bodyResponse.length; i += 1) {
        if (Number(bodyResponse[i].show.id) === Number(ides)) {
          commentPopup.innerHTML = `
          <i class="fa-solid fa-xmark"></i><img src="${bodyResponse[i].show.image.original}" alt="" class="comment-img">
          <h1 class="com-header">${bodyResponse[i].show.name}</h1>
          <div class="discription">
              <h4 class="detail">Language: ${bodyResponse[i].show.language}</h4>
              <h4 class="detail">Type: ${bodyResponse[i].show.type}</h4>
              <h4 class="detail">Premiered
              : ${bodyResponse[i].show.premiered}</h4>
              <h4 class="detail">Score: ${bodyResponse[i].score}</h4>
          </div>
          <h2 class="comment-count"></h2>
          <div class="timeand-comment-cont">
          </div>
          <div class="add-comment">
              <h2 class="com-header">Add a comment</h2>
              <input type="text" class="userName" placeholder="User Name">
              <textarea type="text" class="userComment" cols="20" rows="7" placeholder="Enter your message..."></textarea>
              <input type="submit" class="submitComment" id="${bodyResponse[i].show.id}">
          </div>`;
        }
      }
      const commentCon = document.querySelector('.timeand-comment-cont');
      for (let i = 0; i < resgett.length; i += 1) {
        const div = document.createElement('div');
        div.classList.add('time-com');
        div.textContent = `${resgett[i].creation_date}-${resgett[i].username}: ${resgett[i].comment}`;
        commentCon.appendChild(div);
      }
      commentArray = document.querySelectorAll('.time-com');
      const countBody = document.querySelector('.comment-count');
      countBody.textContent = `Comments (${Comment.commentCounter(commentArray)})`;
    }
}

/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Like)
/* harmony export */ });
const appKey = 'xyUc6vOROrsRVucrRen9';
const likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appKey}/likes`;
const movie = document.getElementsByClassName('movie');
class Like {
  static getLikes = async () => {
    const likeResponse = await fetch(likeUrl, {
      method: 'GET',
    });
    const responseInJason = await likeResponse.json();
    return responseInJason;
  };

  static likeUpdater = async (likeId) => {
    const rese = await fetch(likeUrl, {
      method: 'GET',
    });
    const resgett = await rese.json();
    for (let i = 0; i < movie.length; i += 1) {
      if (Number(movie[i].id) === Number(likeId)) {
        for (let j = 0; j < resgett.length; j += 1) {
          if (Number(resgett[j].item_id) === Number(likeId)) {
            movie[
              i
            ].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.textContent = `${resgett[j].likes} Likes`;
          }
        }
      }
    }
  };

  static likePost = async (ide) => {
    const payloadObject = {
      item_id: ide,
    };
    payloadObject.likes = 0;

    await fetch(likeUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payloadObject),
    });
    Like.likeUpdater(ide);
  };
}


/***/ }),

/***/ "./src/modules/movie.js":
/*!******************************!*\
  !*** ./src/modules/movie.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Movie)
/* harmony export */ });
/* harmony import */ var _like_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like.js */ "./src/modules/like.js");


const url = 'https://api.tvmaze.com/search/shows?q=simpsons';
const movieContaier = document.querySelector('.movieContaier');
class Movie {
  static getMovies = async () => {
    const request = new Request(url);
    const response = await fetch(request);
    const bodyResponse = await response.json();
    return bodyResponse;
  };

  static populate = async () => {
    const returnMovies = await Movie.getMovies();
    const likeArray = await _like_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLikes();
    let likeCou = 0;
    movieContaier.innerHTML = '';
    for (let i = 0; i < 6; i += 1) {
      for (let j = 0; j < likeArray.length; j += 1) {
        if (returnMovies[i].show.id === Number(likeArray[j].item_id)) {
          likeCou = likeArray[j].likes;
        }
      }
      movieContaier.innerHTML += `<div class="movie" id="${returnMovies[i].show.id}">
    <img class="picture" src="${returnMovies[i].show.image.original
    }" alt="">
    <div class="space-container">
        <h3 class="space">${returnMovies[i].show.name}</h3>
        <i class="fa-regular fa-heart"></i>
    </div>
    <span class="like-count">${likeCou} Likes</span>
    <button class="comments">Comments</button>
    <button class="reserve">Reservation</button>
</div>`;
    }
    const movieCount = document.querySelector('.movie-count');
    const movies = document.getElementsByClassName('movie');
    movieCount.textContent = `Movies (${Movie.countMovie(movies)})`;
  };

  static countMovie = (movieArray) => {
    if (movieArray == null || movieArray === undefined) {
      return 'The surver is not responding at the moment. Please wait!!';
    }
    const noOfMovies = movieArray.length;
    return noOfMovies;
  };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9CQUFvQjtBQUMxQztBQUNBO0FBQ0EsNkJBQTZCLHlCQUF5QixHQUFHLG9CQUFvQixJQUFJLG1CQUFtQjtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQ0FBcUM7QUFDaEY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFDQSwyRkFBMkYsT0FBTztBQUNsRztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxzR0FBc0csa0JBQWtCO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQztBQUNyRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQzZCOztBQUU3QjtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qix5REFBYTtBQUN6QztBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0Isc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCx3QkFBd0I7QUFDbkYsZ0NBQWdDO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx5QkFBeUI7QUFDakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9saWtlLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL21vdmllLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZmY1O1xcclxcbn1cXHJcXG5cXHJcXG4uZC1mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMCAxNSU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICB3aWR0aDogMy41cmVtO1xcclxcbiAgaGVpZ2h0OiAzLjVyZW07XFxyXFxuICBtYXJnaW46IDEuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2bGlua3Mge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZmxleDogMTE7XFxyXFxuICBwYWRkaW5nOiAzNXB4IDA7XFxyXFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmxpbmtzIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5uYXZpdGVtcyB7XFxyXFxuICBwYWRkaW5nOiAwIDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFpbiBzZWNpb24gKi9cXHJcXG5cXHJcXG4ubWFpbkNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVDb250YWllciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDdlN2U7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbjogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBpY3R1cmUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogMjByZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGljdHVyZTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi5zcGFjZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNwYWNlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQge1xcclxcbiAgY29sb3I6ICNlMjEwMTA7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWNvdW50IHtcXHJcXG4gIGNvbG9yOiAjNzcxZjFmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLC5yZXNlcnZlIHtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcclxcbiAgbWFyZ2luOiAwLjRyZW0gMDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdhOTIxO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjNzcxZjFmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHM6aG92ZXIsLnJlc2VydmU6aG92ZXIge1xcclxcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxyXFxuICBtYXJnaW46IDAuNHJlbSAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogI2U3YTkyMTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3JkZXItY29sb3I6ICM3NzFmMWY7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAycmVtIDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnQgcG9wdXAgcGFnZSAqL1xcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA2LjVyZW07XFxyXFxuICBsZWZ0OiA4cmVtO1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcmVtKTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXhtYXJrIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlYWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMDByZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbWcge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogMTZyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaW1nOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbS1oZWFkZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzY3JpcHRpb24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsUUFBUTtFQUNSLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUEsdUJBQXVCOztBQUV2QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTO0VBQ1QsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVmZjU7XFxyXFxufVxcclxcblxcclxcbi5kLWZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAwIDE1JTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIHdpZHRoOiAzLjVyZW07XFxyXFxuICBoZWlnaHQ6IDMuNXJlbTtcXHJcXG4gIG1hcmdpbjogMS41cmVtIDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rcyB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmbGV4OiAxMTtcXHJcXG4gIHBhZGRpbmc6IDM1cHggMDtcXHJcXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2bGlua3MgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdml0ZW1zIHtcXHJcXG4gIHBhZGRpbmc6IDAgMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtYWluIHNlY2lvbiAqL1xcclxcblxcclxcbi5tYWluQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZUNvbnRhaWVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwN2U3ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGljdHVyZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiAyMHJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5waWN0dXJlOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNwYWNlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BhY2Uge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5mYS1oZWFydCB7XFxyXFxuICBjb2xvcjogI2UyMTAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtY291bnQge1xcclxcbiAgY29sb3I6ICM3NzFmMWY7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMsLnJlc2VydmUge1xcclxcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxyXFxuICBtYXJnaW46IDAuNHJlbSAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2E5MjE7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3JkZXItY29sb3I6ICM3NzFmMWY7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50czpob3ZlciwucmVzZXJ2ZTpob3ZlciB7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXHJcXG4gIG1hcmdpbjogMC40cmVtIDA7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjZTdhOTIxO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzc3MWYxZjtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb290ZXIgKi9cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29tbWVudCBwb3B1cCBwYWdlICovXFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDYuNXJlbTtcXHJcXG4gIGxlZnQ6IDhyZW07XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDByZW0pO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEteG1hcmsge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVhY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAwMHJlbSk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWltZyB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiAxNnJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbWc6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tLWhlYWRlciB7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjZyZW07XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgTW92aWUgZnJvbSAnLi9tb2R1bGVzL21vdmllLmpzJztcbmltcG9ydCBDb21tZW50IGZyb20gJy4vbW9kdWxlcy9jb21tZW50LmpzJztcbmltcG9ydCBMaWtlIGZyb20gJy4vbW9kdWxlcy9saWtlLmpzJztcblxuY29uc3QgbW92aWVDb250YWllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZUNvbnRhaWVyJyk7XG5cbmNvbnN0IGNvbW1lbnRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcHVwJyk7XG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5Db250YWluZXInKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIE1vdmllLnBvcHVsYXRlKCk7XG59KTtcblxubW92aWVDb250YWllci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLWhlYXJ0JykpIHtcbiAgICBjb25zdCBnZXRJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcbiAgICBMaWtlLmxpa2VQb3N0KGdldElkKTtcbiAgfVxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21tZW50cycpKSB7XG4gICAgY29uc3QgY29tZW50SWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkO1xuICAgIGlmIChjb21tZW50UG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgY29tbWVudFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBjb21tZW50UG9wdXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2ZScpO1xuICAgIENvbW1lbnQuY29tbWVudFBvcHVsYXRvcihjb21lbnRJZCk7XG4gIH1cbn0pO1xuXG5jb21tZW50UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBsZXQgY29tbWVudE9iamVjdDtcbiAgbGV0IGlkcyA9IDA7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Ym1pdENvbW1lbnQnKSkge1xuICAgIGlkcyA9IGUudGFyZ2V0LmlkO1xuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJOYW1lJyk7XG4gICAgY29uc3QgdXNlckNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlckNvbW1lbnQnKTtcbiAgICBpZiAodXNlck5hbWUudmFsdWUgIT09ICcnICYmIHVzZXJDb21tZW50ICE9PSAnJykge1xuICAgICAgY29tbWVudE9iamVjdCA9IHtcbiAgICAgICAgaXRlbV9pZDogaWRzLFxuICAgICAgICB1c2VybmFtZTogdXNlck5hbWUudmFsdWUsXG4gICAgICAgIGNvbW1lbnQ6IHVzZXJDb21tZW50LnZhbHVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgQ29tbWVudC5jb21tZW50UG9zdChjb21tZW50T2JqZWN0LCBpZHMpO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEteG1hcmsnKSkge1xuICAgIGlmIChjb21tZW50UG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgY29tbWVudFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZlJyk7XG4gIH1cbn0pO1xuIiwiY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9c2ltcHNvbnMnO1xuY29uc3QgYXBwS2V5ID0gJ3h5VWM2dk9ST3JzUlZ1Y3JSZW45JztcbmNvbnN0IGNvbW1lbnRVcmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcHBLZXl9L2NvbW1lbnRzYDtcbmNvbnN0IGNvbW1lbnRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcHVwJyk7XG5sZXQgY29tbWVudEFycmF5ID0gW107XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IHtcbiAgc3RhdGljIGNvbW1lbnRQb3N0ID0gYXN5bmMgKGNvbW1lbnQsIGlkKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goY29tbWVudFVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpLFxuICAgIH0pO1xuICAgIENvbW1lbnQuY29tbWVudFBvcHVsYXRvcihpZCk7XG4gIH1cblxuICBzdGF0aWMgY29tbWVudENvdW50ZXIgPSAoY29tbWVucykgPT4ge1xuICAgIGlmIChjb21tZW5zID09IG51bGwgfHwgY29tbWVucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gJ1RoZSBzdXJ2ZXIgaXMgbm90IHJlc3BvbmRpbmcgYXQgdGhlIG1vbWVudC4gUGxlYXNlIHdhaXQhISc7XG4gICAgfVxuICAgIGNvbnN0IGNvdW50ID0gY29tbWVucy5sZW5ndGg7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgICBzdGF0aWMgY29tbWVudFBvcHVsYXRvciA9IGFzeW5jIChpZGVzKSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50TGlzdCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcEtleX0vY29tbWVudHM/aXRlbV9pZD0ke2lkZXN9YDtcbiAgICAgIGNvbnN0IHJlc2UgPSBhd2FpdCBmZXRjaChjb21tZW50TGlzdCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXNnZXR0ID0gYXdhaXQgcmVzZS5qc29uKCk7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG4gICAgICBjb25zdCBib2R5UmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvZHlSZXNwb25zZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoTnVtYmVyKGJvZHlSZXNwb25zZVtpXS5zaG93LmlkKSA9PT0gTnVtYmVyKGlkZXMpKSB7XG4gICAgICAgICAgY29tbWVudFBvcHVwLmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPjxpbWcgc3JjPVwiJHtib2R5UmVzcG9uc2VbaV0uc2hvdy5pbWFnZS5vcmlnaW5hbH1cIiBhbHQ9XCJcIiBjbGFzcz1cImNvbW1lbnQtaW1nXCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwiY29tLWhlYWRlclwiPiR7Ym9keVJlc3BvbnNlW2ldLnNob3cubmFtZX08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkZXRhaWxcIj5MYW5ndWFnZTogJHtib2R5UmVzcG9uc2VbaV0uc2hvdy5sYW5ndWFnZX08L2g0PlxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkZXRhaWxcIj5UeXBlOiAke2JvZHlSZXNwb25zZVtpXS5zaG93LnR5cGV9PC9oND5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZGV0YWlsXCI+UHJlbWllcmVkXG4gICAgICAgICAgICAgIDogJHtib2R5UmVzcG9uc2VbaV0uc2hvdy5wcmVtaWVyZWR9PC9oND5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZGV0YWlsXCI+U2NvcmU6ICR7Ym9keVJlc3BvbnNlW2ldLnNjb3JlfTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyIGNsYXNzPVwiY29tbWVudC1jb3VudFwiPjwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVhbmQtY29tbWVudC1jb250XCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC1jb21tZW50XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbS1oZWFkZXJcIj5BZGQgYSBjb21tZW50PC9oMj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ1c2VyTmFtZVwiIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCI+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIGNsYXNzPVwidXNlckNvbW1lbnRcIiBjb2xzPVwiMjBcIiByb3dzPVwiN1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBtZXNzYWdlLi4uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdENvbW1lbnRcIiBpZD1cIiR7Ym9keVJlc3BvbnNlW2ldLnNob3cuaWR9XCI+XG4gICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgY29tbWVudENvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lYW5kLWNvbW1lbnQtY29udCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNnZXR0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGltZS1jb20nKTtcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gYCR7cmVzZ2V0dFtpXS5jcmVhdGlvbl9kYXRlfS0ke3Jlc2dldHRbaV0udXNlcm5hbWV9OiAke3Jlc2dldHRbaV0uY29tbWVudH1gO1xuICAgICAgICBjb21tZW50Q29uLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB9XG4gICAgICBjb21tZW50QXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGltZS1jb20nKTtcbiAgICAgIGNvbnN0IGNvdW50Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWNvdW50Jyk7XG4gICAgICBjb3VudEJvZHkudGV4dENvbnRlbnQgPSBgQ29tbWVudHMgKCR7Q29tbWVudC5jb21tZW50Q291bnRlcihjb21tZW50QXJyYXkpfSlgO1xuICAgIH1cbn0iLCJjb25zdCBhcHBLZXkgPSAneHlVYzZ2T1JPcnNSVnVjclJlbjknO1xuY29uc3QgbGlrZVVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcEtleX0vbGlrZXNgO1xuY29uc3QgbW92aWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb3ZpZScpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlrZSB7XG4gIHN0YXRpYyBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBsaWtlUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsaWtlVXJsLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlc3BvbnNlSW5KYXNvbiA9IGF3YWl0IGxpa2VSZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlSW5KYXNvbjtcbiAgfTtcblxuICBzdGF0aWMgbGlrZVVwZGF0ZXIgPSBhc3luYyAobGlrZUlkKSA9PiB7XG4gICAgY29uc3QgcmVzZSA9IGF3YWl0IGZldGNoKGxpa2VVcmwsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgfSk7XG4gICAgY29uc3QgcmVzZ2V0dCA9IGF3YWl0IHJlc2UuanNvbigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW92aWUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChOdW1iZXIobW92aWVbaV0uaWQpID09PSBOdW1iZXIobGlrZUlkKSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc2dldHQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAoTnVtYmVyKHJlc2dldHRbal0uaXRlbV9pZCkgPT09IE51bWJlcihsaWtlSWQpKSB7XG4gICAgICAgICAgICBtb3ZpZVtcbiAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgXS5maXJzdENoaWxkLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gYCR7cmVzZ2V0dFtqXS5saWtlc30gTGlrZXNgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgbGlrZVBvc3QgPSBhc3luYyAoaWRlKSA9PiB7XG4gICAgY29uc3QgcGF5bG9hZE9iamVjdCA9IHtcbiAgICAgIGl0ZW1faWQ6IGlkZSxcbiAgICB9O1xuICAgIHBheWxvYWRPYmplY3QubGlrZXMgPSAwO1xuXG4gICAgYXdhaXQgZmV0Y2gobGlrZVVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWRPYmplY3QpLFxuICAgIH0pO1xuICAgIExpa2UubGlrZVVwZGF0ZXIoaWRlKTtcbiAgfTtcbn1cbiIsImltcG9ydCBMaWtlIGZyb20gJy4vbGlrZS5qcyc7XG5cbmNvbnN0IHVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPXNpbXBzb25zJztcbmNvbnN0IG1vdmllQ29udGFpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVDb250YWllcicpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUge1xuICBzdGF0aWMgZ2V0TW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG4gICAgY29uc3QgYm9keVJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBib2R5UmVzcG9uc2U7XG4gIH07XG5cbiAgc3RhdGljIHBvcHVsYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJldHVybk1vdmllcyA9IGF3YWl0IE1vdmllLmdldE1vdmllcygpO1xuICAgIGNvbnN0IGxpa2VBcnJheSA9IGF3YWl0IExpa2UuZ2V0TGlrZXMoKTtcbiAgICBsZXQgbGlrZUNvdSA9IDA7XG4gICAgbW92aWVDb250YWllci5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaWtlQXJyYXkubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHJldHVybk1vdmllc1tpXS5zaG93LmlkID09PSBOdW1iZXIobGlrZUFycmF5W2pdLml0ZW1faWQpKSB7XG4gICAgICAgICAgbGlrZUNvdSA9IGxpa2VBcnJheVtqXS5saWtlcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbW92aWVDb250YWllci5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJtb3ZpZVwiIGlkPVwiJHtyZXR1cm5Nb3ZpZXNbaV0uc2hvdy5pZH1cIj5cbiAgICA8aW1nIGNsYXNzPVwicGljdHVyZVwiIHNyYz1cIiR7cmV0dXJuTW92aWVzW2ldLnNob3cuaW1hZ2Uub3JpZ2luYWxcbiAgICB9XCIgYWx0PVwiXCI+XG4gICAgPGRpdiBjbGFzcz1cInNwYWNlLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJzcGFjZVwiPiR7cmV0dXJuTW92aWVzW2ldLnNob3cubmFtZX08L2gzPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtaGVhcnRcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPHNwYW4gY2xhc3M9XCJsaWtlLWNvdW50XCI+JHtsaWtlQ291fSBMaWtlczwvc3Bhbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudHNcIj5Db21tZW50czwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJyZXNlcnZlXCI+UmVzZXJ2YXRpb248L2J1dHRvbj5cbjwvZGl2PmA7XG4gICAgfVxuICAgIGNvbnN0IG1vdmllQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtY291bnQnKTtcbiAgICBjb25zdCBtb3ZpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb3ZpZScpO1xuICAgIG1vdmllQ291bnQudGV4dENvbnRlbnQgPSBgTW92aWVzICgke01vdmllLmNvdW50TW92aWUobW92aWVzKX0pYDtcbiAgfTtcblxuICBzdGF0aWMgY291bnRNb3ZpZSA9IChtb3ZpZUFycmF5KSA9PiB7XG4gICAgaWYgKG1vdmllQXJyYXkgPT0gbnVsbCB8fCBtb3ZpZUFycmF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnVGhlIHN1cnZlciBpcyBub3QgcmVzcG9uZGluZyBhdCB0aGUgbW9tZW50LiBQbGVhc2Ugd2FpdCEhJztcbiAgICB9XG4gICAgY29uc3Qgbm9PZk1vdmllcyA9IG1vdmllQXJyYXkubGVuZ3RoO1xuICAgIHJldHVybiBub09mTW92aWVzO1xuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9