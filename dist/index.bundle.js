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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #edeff5;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.navbar {\r\n  background-color: #444;\r\n  color: #fff;\r\n  padding: 0 15%;\r\n  font-weight: 600;\r\n}\r\n\r\n.logo {\r\n  width: 3.5rem;\r\n  height: 3.5rem;\r\n  margin: 1.5rem 1rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n.navlinks {\r\n  list-style: none;\r\n  justify-content: space-around;\r\n  flex: 11;\r\n  padding: 35px 0;\r\n  padding-inline-start: 0;\r\n}\r\n\r\n.navlinks a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n.navitems {\r\n  padding: 0 0.2rem;\r\n}\r\n\r\n/* main secion */\r\n\r\n.mainContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.movieContaier {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 3rem;\r\n}\r\n\r\n.movie {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #807e7e;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  margin: 2rem;\r\n}\r\n\r\n.picture {\r\n  border-radius: 5px;\r\n  width: 80%;\r\n  height: 20rem;\r\n  transition: all 0.4s ease-in-out;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.picture:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.space-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 80%;\r\n}\r\n\r\n.space {\r\n  text-align: center;\r\n  margin-bottom: 0.4rem;\r\n  color: #fff;\r\n}\r\n\r\n.fa-heart {\r\n  color: #e21010;\r\n  cursor: pointer;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.like-count {\r\n  color: #771f1f;\r\n  font-weight: 700;\r\n}\r\n\r\n.comments,\r\n.reserve {\r\n  padding: 0.4rem 1rem;\r\n  margin: 0.4rem 0;\r\n  text-transform: uppercase;\r\n  background-color: #e7a921;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  border-color: #771f1f;\r\n}\r\n\r\n.comments:hover,\r\n.reserve:hover {\r\n  padding: 0.4rem 1rem;\r\n  margin: 0.4rem 0;\r\n  text-transform: uppercase;\r\n  background-color: #fff;\r\n  color: #e7a921;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  border-color: #771f1f;\r\n}\r\n\r\nspan {\r\n  display: flex;\r\n  margin-bottom: 0.4rem;\r\n}\r\n\r\n/* footer */\r\n\r\n.footer {\r\n  text-align: center;\r\n  padding: 2rem 0;\r\n  color: #fff;\r\n  background-color: #444;\r\n}\r\n\r\n/* Comment popup page */\r\n\r\n.comment-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 6.5rem;\r\n  left: 16rem;\r\n  width: 60%;\r\n  transform: translateY(-100rem);\r\n  margin-top: 2rem;\r\n  background-color: #f7d336;\r\n  border-radius: 8px;\r\n}\r\n\r\n.fa-xmark {\r\n  font-size: 2.5rem;\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.active {\r\n  transform: translateY(0);\r\n}\r\n\r\n.deactive {\r\n  transform: translateY(-10000rem);\r\n}\r\n\r\n.comment-img {\r\n  width: 50%;\r\n  height: 25rem;\r\n  transition: all 0.4s ease-in-out;\r\n  border-radius: 8px;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.comment-img:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.com-header,\r\n.comment-count {\r\n  margin: 0.8rem 0;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n\r\n.discription {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 1rem;\r\n  justify-content: space-between;\r\n  color: #444;\r\n  margin-bottom: 0.8rem;\r\n}\r\n\r\n.time-com {\r\n  color: #444;\r\n  font-weight: 500;\r\n}\r\n\r\n.add-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.add-comment {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.submitComment {\r\n  padding: 0.4rem 1rem;\r\n  margin: 0.4rem 0;\r\n  text-transform: uppercase;\r\n  background-color: #429c42;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  border-color: #d4c117;\r\n}\r\n\r\n.submitComment:hover {\r\n  padding: 0.4rem 1rem;\r\n  margin: 0.4rem 0;\r\n  text-transform: uppercase;\r\n  background-color: #fff;\r\n  color: #444;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  border-color: #429c42;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  padding: 7px;\r\n  border-radius: 4px;\r\n  color: #242323;\r\n  font-weight: 600;\r\n  border: none;\r\n  outline: none;\r\n  margin: 0.2rem;\r\n}\r\n\r\n::placeholder {\r\n  color: #242323;\r\n  font-weight: 600;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n  border: 3px solid #77f373;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,QAAQ;EACR,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA,gBAAgB;;AAEhB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;;EAEE,oBAAoB;EACpB,gBAAgB;EAChB,yBAAyB;EACzB,yBAAyB;EACzB,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;;EAEE,oBAAoB;EACpB,gBAAgB;EAChB,yBAAyB;EACzB,sBAAsB;EACtB,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA,WAAW;;AAEX;EACE,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,sBAAsB;AACxB;;AAEA,uBAAuB;;AAEvB;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,UAAU;EACV,8BAA8B;EAC9B,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,QAAQ;AACV;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,UAAU;EACV,aAAa;EACb,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;EAEE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,8BAA8B;EAC9B,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,yBAAyB;EACzB,yBAAyB;EACzB,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;;EAEE,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;;EAEE,yBAAyB;AAC3B","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #edeff5;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.navbar {\r\n  background-color: #444;\r\n  color: #fff;\r\n  padding: 0 15%;\r\n  font-weight: 600;\r\n}\r\n\r\n.logo {\r\n  width: 3.5rem;\r\n  height: 3.5rem;\r\n  margin: 1.5rem 1rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n.navlinks {\r\n  list-style: none;\r\n  justify-content: space-around;\r\n  flex: 11;\r\n  padding: 35px 0;\r\n  padding-inline-start: 0;\r\n}\r\n\r\n.navlinks a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n.navitems {\r\n  padding: 0 0.2rem;\r\n}\r\n\r\n/* main secion */\r\n\r\n.mainContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.movieContaier {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 3rem;\r\n}\r\n\r\n.movie {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #807e7e;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  margin: 2rem;\r\n}\r\n\r\n.picture {\r\n  border-radius: 5px;\r\n  width: 80%;\r\n  height: 20rem;\r\n  transition: all 0.4s ease-in-out;\r\n  padding-top: 1rem;\r\n}\r\n\r\n.picture:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.space-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 80%;\r\n}\r\n\r\n.space {\r\n  text-align: center;\r\n  margin-bottom: 0.4rem;\r\n  color: #fff;\r\n}\r\n\r\n.fa-heart {\r\n  color: #e21010;\r\n  cursor: pointer;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.like-count {\r\n  color: #771f1f;\r\n  font-weight: 700;\r\n}\r\n\r\n.comments,\r\n.reserve {\r\n  padding: 0.4rem 1rem;\r\n  margin: 0.4rem 0;\r\n  text-transform: uppercase;\r\n  background-color: #e7a921;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  border-color: #771f1f;\r\n}\r\n\r\n.comments:hover,\r\n.reserve:hover {\r\n  padding: 0.4rem 1rem;\r\n  margin: 0.4rem 0;\r\n  text-transform: uppercase;\r\n  background-color: #fff;\r\n  color: #e7a921;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  border-color: #771f1f;\r\n}\r\n\r\nspan {\r\n  display: flex;\r\n  margin-bottom: 0.4rem;\r\n}\r\n\r\n/* footer */\r\n\r\n.footer {\r\n  text-align: center;\r\n  padding: 2rem 0;\r\n  color: #fff;\r\n  background-color: #444;\r\n}\r\n\r\n/* Comment popup page */\r\n\r\n.comment-popup {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 6.5rem;\r\n  left: 16rem;\r\n  width: 60%;\r\n  transform: translateY(-100rem);\r\n  margin-top: 2rem;\r\n  background-color: #f7d336;\r\n  border-radius: 8px;\r\n}\r\n\r\n.fa-xmark {\r\n  font-size: 2.5rem;\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.active {\r\n  transform: translateY(0);\r\n}\r\n\r\n.deactive {\r\n  transform: translateY(-10000rem);\r\n}\r\n\r\n.comment-img {\r\n  width: 50%;\r\n  height: 25rem;\r\n  transition: all 0.4s ease-in-out;\r\n  border-radius: 8px;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.comment-img:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.com-header,\r\n.comment-count {\r\n  margin: 0.8rem 0;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n\r\n.discription {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 1rem;\r\n  justify-content: space-between;\r\n  color: #444;\r\n  margin-bottom: 0.8rem;\r\n}\r\n\r\n.time-com {\r\n  color: #444;\r\n  font-weight: 500;\r\n}\r\n\r\n.add-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.add-comment {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.submitComment {\r\n  padding: 0.4rem 1rem;\r\n  margin: 0.4rem 0;\r\n  text-transform: uppercase;\r\n  background-color: #429c42;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  border-color: #d4c117;\r\n}\r\n\r\n.submitComment:hover {\r\n  padding: 0.4rem 1rem;\r\n  margin: 0.4rem 0;\r\n  text-transform: uppercase;\r\n  background-color: #fff;\r\n  color: #444;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  border-color: #429c42;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  padding: 7px;\r\n  border-radius: 4px;\r\n  color: #242323;\r\n  font-weight: 600;\r\n  border: none;\r\n  outline: none;\r\n  margin: 0.2rem;\r\n}\r\n\r\n::placeholder {\r\n  color: #242323;\r\n  font-weight: 600;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus {\r\n  border: 3px solid #77f373;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxP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YnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvbGlrZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9tb3ZpZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWZmNTtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDAgMTUlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgd2lkdGg6IDMuNXJlbTtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbiAgbWFyZ2luOiAxLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmxpbmtzIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZsZXg6IDExO1xcclxcbiAgcGFkZGluZzogMzVweCAwO1xcclxcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rcyBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aXRlbXMge1xcclxcbiAgcGFkZGluZzogMCAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4gc2VjaW9uICovXFxyXFxuXFxyXFxuLm1haW5Db250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllQ29udGFpZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA3ZTdlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBtYXJnaW46IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5waWN0dXJlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDIwcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBpY3R1cmU6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BhY2UtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5zcGFjZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGNvbG9yOiAjZTIxMDEwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5saWtlLWNvdW50IHtcXHJcXG4gIGNvbG9yOiAjNzcxZjFmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLFxcclxcbi5yZXNlcnZlIHtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcclxcbiAgbWFyZ2luOiAwLjRyZW0gMDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdhOTIxO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjNzcxZjFmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHM6aG92ZXIsXFxyXFxuLnJlc2VydmU6aG92ZXIge1xcclxcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxyXFxuICBtYXJnaW46IDAuNHJlbSAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogI2U3YTkyMTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3JkZXItY29sb3I6ICM3NzFmMWY7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAycmVtIDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnQgcG9wdXAgcGFnZSAqL1xcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA2LjVyZW07XFxyXFxuICBsZWZ0OiAxNnJlbTtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHJlbSk7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDMzNjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXhtYXJrIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxufVxcclxcblxcclxcbi5kZWFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDAwcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaW1nIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDI1cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbWc6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tLWhlYWRlcixcXHJcXG4uY29tbWVudC1jb3VudCB7XFxyXFxuICBtYXJnaW46IDAuOHJlbSAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5kaXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZS1jb20ge1xcclxcbiAgY29sb3I6ICM0NDQ7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0Q29tbWVudCB7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXHJcXG4gIG1hcmdpbjogMC40cmVtIDA7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOWM0MjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2Q0YzExNztcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdENvbW1lbnQ6aG92ZXIge1xcclxcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxyXFxuICBtYXJnaW46IDAuNHJlbSAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3JkZXItY29sb3I6ICM0MjljNDI7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDdweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGNvbG9yOiAjMjQyMzIzO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogIzI0MjMyMztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzLFxcclxcbnRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICM3N2YzNzM7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLFFBQVE7RUFDUixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxh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ZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWZmNTtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDAgMTUlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgd2lkdGg6IDMuNXJlbTtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbiAgbWFyZ2luOiAxLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmxpbmtzIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGZsZXg6IDExO1xcclxcbiAgcGFkZGluZzogMzVweCAwO1xcclxcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXZsaW5rcyBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aXRlbXMge1xcclxcbiAgcGFkZGluZzogMCAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4gc2VjaW9uICovXFxyXFxuXFxyXFxuLm1haW5Db250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllQ29udGFpZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA3ZTdlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBtYXJnaW46IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5waWN0dXJlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDIwcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBpY3R1cmU6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3BhY2UtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5zcGFjZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGNvbG9yOiAjZTIxMDEwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5saWtlLWNvdW50IHtcXHJcXG4gIGNvbG9yOiAjNzcxZjFmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLFxcclxcbi5yZXNlcnZlIHtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcclxcbiAgbWFyZ2luOiAwLjRyZW0gMDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdhOTIxO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjNzcxZjFmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHM6aG92ZXIsXFxyXFxuLnJlc2VydmU6aG92ZXIge1xcclxcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxyXFxuICBtYXJnaW46IDAuNHJlbSAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogI2U3YTkyMTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3JkZXItY29sb3I6ICM3NzFmMWY7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAycmVtIDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnQgcG9wdXAgcGFnZSAqL1xcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA2LjVyZW07XFxyXFxuICBsZWZ0OiAxNnJlbTtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHJlbSk7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDMzNjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXhtYXJrIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxufVxcclxcblxcclxcbi5kZWFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDAwcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaW1nIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDI1cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbWc6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tLWhlYWRlcixcXHJcXG4uY29tbWVudC1jb3VudCB7XFxyXFxuICBtYXJnaW46IDAuOHJlbSAwO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5kaXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZS1jb20ge1xcclxcbiAgY29sb3I6ICM0NDQ7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0Q29tbWVudCB7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXHJcXG4gIG1hcmdpbjogMC40cmVtIDA7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOWM0MjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2Q0YzExNztcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdENvbW1lbnQ6aG92ZXIge1xcclxcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxyXFxuICBtYXJnaW46IDAuNHJlbSAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3JkZXItY29sb3I6ICM0MjljNDI7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDdweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGNvbG9yOiAjMjQyMzIzO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogIzI0MjMyMztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzLFxcclxcbnRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICM3N2YzNzM7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL21vZHVsZXMvbW92aWUuanMnO1xuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQuanMnO1xuaW1wb3J0IExpa2UgZnJvbSAnLi9tb2R1bGVzL2xpa2UuanMnO1xuXG5jb25zdCBtb3ZpZUNvbnRhaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllQ29udGFpZXInKTtcblxuY29uc3QgY29tbWVudFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtcG9wdXAnKTtcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRhaW5lcicpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgTW92aWUucG9wdWxhdGUoKTtcbn0pO1xuXG5tb3ZpZUNvbnRhaWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtaGVhcnQnKSkge1xuICAgIGNvbnN0IGdldElkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlkO1xuICAgIExpa2UubGlrZVBvc3QoZ2V0SWQpO1xuICB9XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbW1lbnRzJykpIHtcbiAgICBjb25zdCBjb21lbnRJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgaWYgKGNvbW1lbnRQb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBjb21tZW50UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIGNvbW1lbnRQb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZlJyk7XG4gICAgQ29tbWVudC5jb21tZW50UG9wdWxhdG9yKGNvbWVudElkKTtcbiAgfVxufSk7XG5cbmNvbW1lbnRQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGxldCBjb21tZW50T2JqZWN0O1xuICBsZXQgaWRzID0gMDtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3VibWl0Q29tbWVudCcpKSB7XG4gICAgaWRzID0gZS50YXJnZXQuaWQ7XG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlck5hbWUnKTtcbiAgICBjb25zdCB1c2VyQ29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyQ29tbWVudCcpO1xuICAgIGlmICh1c2VyTmFtZS52YWx1ZSAhPT0gJycgJiYgdXNlckNvbW1lbnQgIT09ICcnKSB7XG4gICAgICBjb21tZW50T2JqZWN0ID0ge1xuICAgICAgICBpdGVtX2lkOiBpZHMsXG4gICAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZS52YWx1ZSxcbiAgICAgICAgY29tbWVudDogdXNlckNvbW1lbnQudmFsdWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBDb21tZW50LmNvbW1lbnRQb3N0KGNvbW1lbnRPYmplY3QsIGlkcyk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS14bWFyaycpKSB7XG4gICAgaWYgKGNvbW1lbnRQb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBjb21tZW50UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGVhY3RpdmUnKTtcbiAgfVxufSk7XG4iLCJjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1zaW1wc29ucyc7XG5jb25zdCBhcHBLZXkgPSAneHlVYzZ2T1JPcnNSVnVjclJlbjknO1xuY29uc3QgY29tbWVudFVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcEtleX0vY29tbWVudHNgO1xuY29uc3QgY29tbWVudFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtcG9wdXAnKTtcbmxldCBjb21tZW50QXJyYXkgPSBbXTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQge1xuICBzdGF0aWMgY29tbWVudFBvc3QgPSBhc3luYyAoY29tbWVudCwgaWQpID0+IHtcbiAgICBhd2FpdCBmZXRjaChjb21tZW50VXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29tbWVudCksXG4gICAgfSk7XG4gICAgQ29tbWVudC5jb21tZW50UG9wdWxhdG9yKGlkKTtcbiAgfVxuXG4gIHN0YXRpYyBjb21tZW50Q291bnRlciA9IChjb21tZW5zKSA9PiB7XG4gICAgaWYgKGNvbW1lbnMgPT0gbnVsbCB8fCBjb21tZW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnVGhlIHN1cnZlciBpcyBub3QgcmVzcG9uZGluZyBhdCB0aGUgbW9tZW50LiBQbGVhc2Ugd2FpdCEhJztcbiAgICB9XG4gICAgY29uc3QgY291bnQgPSBjb21tZW5zLmxlbmd0aDtcbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICAgIHN0YXRpYyBjb21tZW50UG9wdWxhdG9yID0gYXN5bmMgKGlkZXMpID0+IHtcbiAgICAgIGNvbnN0IGNvbW1lbnRMaXN0ID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBwS2V5fS9jb21tZW50cz9pdGVtX2lkPSR7aWRlc31gO1xuICAgICAgY29uc3QgcmVzZSA9IGF3YWl0IGZldGNoKGNvbW1lbnRMaXN0LCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlc2dldHQgPSBhd2FpdCByZXNlLmpzb24oKTtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcbiAgICAgIGNvbnN0IGJvZHlSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9keVJlc3BvbnNlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChOdW1iZXIoYm9keVJlc3BvbnNlW2ldLnNob3cuaWQpID09PSBOdW1iZXIoaWRlcykpIHtcbiAgICAgICAgICBjb21tZW50UG9wdXAuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmtcIj48L2k+PGltZyBzcmM9XCIke2JvZHlSZXNwb25zZVtpXS5zaG93LmltYWdlLm9yaWdpbmFsfVwiIGFsdD1cIlwiIGNsYXNzPVwiY29tbWVudC1pbWdcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJjb20taGVhZGVyXCI+JHtib2R5UmVzcG9uc2VbaV0uc2hvdy5uYW1lfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRpc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cImRldGFpbFwiPkxhbmd1YWdlOiAke2JvZHlSZXNwb25zZVtpXS5zaG93Lmxhbmd1YWdlfTwvaDQ+XG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cImRldGFpbFwiPlR5cGU6ICR7Ym9keVJlc3BvbnNlW2ldLnNob3cudHlwZX08L2g0PlxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkZXRhaWxcIj5QcmVtaWVyZWRcbiAgICAgICAgICAgICAgOiAke2JvZHlSZXNwb25zZVtpXS5zaG93LnByZW1pZXJlZH08L2g0PlxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkZXRhaWxcIj5TY29yZTogJHtib2R5UmVzcG9uc2VbaV0uc2NvcmV9PC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJjb21tZW50LWNvdW50XCI+PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWFuZC1jb21tZW50LWNvbnRcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLWNvbW1lbnRcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiY29tLWhlYWRlclwiPkFkZCBhIGNvbW1lbnQ8L2gyPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInVzZXJOYW1lXCIgcGxhY2Vob2xkZXI9XCJVc2VyIE5hbWVcIj5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ1c2VyQ29tbWVudFwiIGNvbHM9XCIyMFwiIHJvd3M9XCI3XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1lc3NhZ2UuLi5cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0Q29tbWVudFwiIGlkPVwiJHtib2R5UmVzcG9uc2VbaV0uc2hvdy5pZH1cIj5cbiAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBjb21tZW50Q29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVhbmQtY29tbWVudC1jb250Jyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc2dldHQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0aW1lLWNvbScpO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBgJHtyZXNnZXR0W2ldLmNyZWF0aW9uX2RhdGV9LSR7cmVzZ2V0dFtpXS51c2VybmFtZX06ICR7cmVzZ2V0dFtpXS5jb21tZW50fWA7XG4gICAgICAgIGNvbW1lbnRDb24uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH1cbiAgICAgIGNvbW1lbnRBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lLWNvbScpO1xuICAgICAgY29uc3QgY291bnRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtY291bnQnKTtcbiAgICAgIGNvdW50Qm9keS50ZXh0Q29udGVudCA9IGBDb21tZW50cyAoJHtDb21tZW50LmNvbW1lbnRDb3VudGVyKGNvbW1lbnRBcnJheSl9KWA7XG4gICAgfVxufSIsImNvbnN0IGFwcEtleSA9ICd4eVVjNnZPUk9yc1JWdWNyUmVuOSc7XG5jb25zdCBsaWtlVXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBwS2V5fS9saWtlc2A7XG5jb25zdCBtb3ZpZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vdmllJyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWtlIHtcbiAgc3RhdGljIGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGxpa2VSZXNwb25zZSA9IGF3YWl0IGZldGNoKGxpa2VVcmwsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgfSk7XG4gICAgY29uc3QgcmVzcG9uc2VJbkphc29uID0gYXdhaXQgbGlrZVJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcmVzcG9uc2VJbkphc29uO1xuICB9O1xuXG4gIHN0YXRpYyBsaWtlVXBkYXRlciA9IGFzeW5jIChsaWtlSWQpID0+IHtcbiAgICBjb25zdCByZXNlID0gYXdhaXQgZmV0Y2gobGlrZVVybCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICB9KTtcbiAgICBjb25zdCByZXNnZXR0ID0gYXdhaXQgcmVzZS5qc29uKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3ZpZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKE51bWJlcihtb3ZpZVtpXS5pZCkgPT09IE51bWJlcihsaWtlSWQpKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzZ2V0dC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGlmIChOdW1iZXIocmVzZ2V0dFtqXS5pdGVtX2lkKSA9PT0gTnVtYmVyKGxpa2VJZCkpIHtcbiAgICAgICAgICAgIG1vdmllW1xuICAgICAgICAgICAgICBpXG4gICAgICAgICAgICBdLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcudGV4dENvbnRlbnQgPSBgJHtyZXNnZXR0W2pdLmxpa2VzfSBMaWtlc2A7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBsaWtlUG9zdCA9IGFzeW5jIChpZGUpID0+IHtcbiAgICBjb25zdCBwYXlsb2FkT2JqZWN0ID0ge1xuICAgICAgaXRlbV9pZDogaWRlLFxuICAgIH07XG4gICAgcGF5bG9hZE9iamVjdC5saWtlcyA9IDA7XG5cbiAgICBhd2FpdCBmZXRjaChsaWtlVXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZE9iamVjdCksXG4gICAgfSk7XG4gICAgTGlrZS5saWtlVXBkYXRlcihpZGUpO1xuICB9O1xufVxuIiwiaW1wb3J0IExpa2UgZnJvbSAnLi9saWtlLmpzJztcblxuY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9c2ltcHNvbnMnO1xuY29uc3QgbW92aWVDb250YWllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZUNvbnRhaWVyJyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZSB7XG4gIHN0YXRpYyBnZXRNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcbiAgICBjb25zdCBib2R5UmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGJvZHlSZXNwb25zZTtcbiAgfTtcblxuICBzdGF0aWMgcG9wdWxhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmV0dXJuTW92aWVzID0gYXdhaXQgTW92aWUuZ2V0TW92aWVzKCk7XG4gICAgY29uc3QgbGlrZUFycmF5ID0gYXdhaXQgTGlrZS5nZXRMaWtlcygpO1xuICAgIGxldCBsaWtlQ291ID0gMDtcbiAgICBtb3ZpZUNvbnRhaWVyLmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxpa2VBcnJheS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBpZiAocmV0dXJuTW92aWVzW2ldLnNob3cuaWQgPT09IE51bWJlcihsaWtlQXJyYXlbal0uaXRlbV9pZCkpIHtcbiAgICAgICAgICBsaWtlQ291ID0gbGlrZUFycmF5W2pdLmxpa2VzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBtb3ZpZUNvbnRhaWVyLmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cIm1vdmllXCIgaWQ9XCIke3JldHVybk1vdmllc1tpXS5zaG93LmlkfVwiPlxuICAgIDxpbWcgY2xhc3M9XCJwaWN0dXJlXCIgc3JjPVwiJHtyZXR1cm5Nb3ZpZXNbaV0uc2hvdy5pbWFnZS5vcmlnaW5hbFxuICAgIH1cIiBhbHQ9XCJcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3BhY2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cInNwYWNlXCI+JHtyZXR1cm5Nb3ZpZXNbaV0uc2hvdy5uYW1lfTwvaDM+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1oZWFydFwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8c3BhbiBjbGFzcz1cImxpa2UtY291bnRcIj4ke2xpa2VDb3V9IExpa2VzPC9zcGFuPlxuICAgIDxidXR0b24gY2xhc3M9XCJjb21tZW50c1wiPkNvbW1lbnRzPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInJlc2VydmVcIj5SZXNlcnZhdGlvbjwvYnV0dG9uPlxuPC9kaXY+YDtcbiAgICB9XG4gICAgY29uc3QgbW92aWVDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS1jb3VudCcpO1xuICAgIGNvbnN0IG1vdmllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vdmllJyk7XG4gICAgbW92aWVDb3VudC50ZXh0Q29udGVudCA9IGBNb3ZpZXMgKCR7TW92aWUuY291bnRNb3ZpZShtb3ZpZXMpfSlgO1xuICB9O1xuXG4gIHN0YXRpYyBjb3VudE1vdmllID0gKG1vdmllQXJyYXkpID0+IHtcbiAgICBpZiAobW92aWVBcnJheSA9PSBudWxsIHx8IG1vdmllQXJyYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICdUaGUgc3VydmVyIGlzIG5vdCByZXNwb25kaW5nIGF0IHRoZSBtb21lbnQuIFBsZWFzZSB3YWl0ISEnO1xuICAgIH1cbiAgICBjb25zdCBub09mTW92aWVzID0gbW92aWVBcnJheS5sZW5ndGg7XG4gICAgcmV0dXJuIG5vT2ZNb3ZpZXM7XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=