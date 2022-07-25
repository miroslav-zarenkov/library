/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: monospace;\n}\n\nhtml {\n  font-size: 62.5%;\n  height: 100vh;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  font-family: \"Roboto\", sans-serif;\n  background-color: rgb(245, 230, 204);\n}\n\n.blur {\n  filter: blur(5px);\n}\n\nheader {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  border-bottom: 1px solid gray;\n  background-color: rgb(204, 245, 230);\n}\n\nmain {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  word-break: break-word;\n  background-color: purple;\n  font-size: 2rem;\n}\n\nfooter > * {\n  padding: 0.5rem;\n  font-family: \"ShortStack\";\n}\n\n.github-logo {\n  display: block;\n  width: 32px;\n  height: auto;\n}\n\n.main-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 auto;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.add-book-div {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-book-form-container {\n  display: none;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n  filter: blur(0px);\n}\n\n.add-book-form {\n  background-color: rgb(232, 240, 160);\n  border: 5px solid black;\n  width: 250px;\n  height: 350px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n\n.book-list {\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  grid-template-columns: 1fr;\n  column-gap: 30px;\n  row-gap: 30px;\n}\n\n@media (min-width: 641px) {\n  .book-list {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 30px;\n    row-gap: 30px;\n  }\n}\n.book-card {\n  background-color: rgb(204, 219, 245);\n  height: 400px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 20px;\n  padding: 20px;\n  border: 3px solid black;\n  border-radius: 10%;\n}\n\n.book-card-title {\n  background-color: rgb(245, 245, 245);\n  height: auto;\n  max-width: 300px;\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  margin: 5px;\n  padding: 10px;\n  font-size: 24px;\n}\n\n.book-card-author {\n  background-color: rgb(245, 245, 245);\n  height: auto;\n  max-width: 300px;\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  margin: 5px;\n  padding: 10px;\n  font-size: 24px;\n}\n\n.book-card-pages {\n  background-color: rgb(245, 245, 245);\n  height: auto;\n  max-width: 300px;\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  margin: 5px;\n  padding: 10px;\n  font-size: 24px;\n}\n\n.book-card-read {\n  background-color: rgb(245, 245, 245);\n  height: auto;\n  max-width: 300px;\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  cursor: pointer;\n  margin: 5px;\n  padding: 10px;\n  font-size: 24px;\n}\n\nbutton {\n  cursor: pointer;\n  padding: 5px;\n  margin: 10px;\n  font-size: 1.3rem;\n}\n\n.green {\n  background-color: rgb(120, 231, 120);\n}\n\n.red {\n  background-color: rgb(243, 97, 72);\n}\n\n.small-text {\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n}\n\n.add-book-form-buttons-row {\n  display: flex;\n}\n\nlabel {\n  text-align: center;\n  margin: 5px;\n  padding: 5px;\n}\n\ninput[type=text],\ninput[type=number] {\n  width: 200px;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AAHF;;AAMA;EACE,gBAAA;EACA,aAAA;AAHF;;AAMA;EACE,SAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,iCAAA;EACA,oCArBW;AAkBb;;AAMA;EACE,iBAAA;AAHF;;AAMA;EACE,WAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,6BAAA;EACA,oCApCa;AAiCf;;AAMA;EACE,cAAA;EACA,aAAA;EACA,sBAAA;AAHF;;AAMA;EACE,aAAA;EACA,WAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,sBAAA;EACA,wBAnDa;EAoDb,eAAA;AAHF;;AAMA;EACE,eAAA;EACA,yBAAA;AAHF;;AAMA;EACE,cAAA;EACA,WAAA;EACA,YAAA;AAHF;;AAMA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,UAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;AAHF;;AAMA;EACE,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAHF;;AAMA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,aAAA;EACA,iBAAA;AAHF;;AAMA;EACE,oCAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;AAHF;;AAMA;EACE,aAAA;EACA,uBAAA;EACA,qBAAA;EACA,0BAAA;EACA,gBAAA;EACA,aAAA;AAHF;;AAMA;EACE;IACE,aAAA;IACA,uBAAA;IACA,qBAAA;IACA,qCAAA;IACA,gBAAA;IACA,aAAA;EAHF;AACF;AAMA;EACE,oCAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;AAJF;;AAOA;EACE,oCAAA;EACA,YAAA;EACA,gBAAA;EACA,uBAAA;EACA,uBAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;AAJF;;AAOA;EACE,oCAAA;EACA,YAAA;EACA,gBAAA;EACA,uBAAA;EACA,uBAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;AAJF;;AAOA;EACE,oCAAA;EACA,YAAA;EACA,gBAAA;EACA,uBAAA;EACA,uBAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;AAJF;;AAOA;EACE,oCAAA;EACA,YAAA;EACA,gBAAA;EACA,uBAAA;EACA,uBAAA;EACA,eAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;AAJF;;AAOA;EACE,eAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;AAJF;;AAOA;EACE,oCAAA;AAJF;;AAOA;EACE,kCAAA;AAJF;;AAOA;EACE,eAAA;EACA,SAAA;EACA,UAAA;AAJF;;AAOA;EACE,aAAA;AAJF;;AAOA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;AAJF;;AAOA;;EAEE,YAAA;AAJF","sourcesContent":["$body-color: rgb(245, 230, 204);\n$header-color: rgb(204, 245, 230);\n$footer-color: purple;\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: monospace;\n}\n\nhtml {\n  font-size: 62.5%;\n  height: 100vh;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  font-family: \"Roboto\", sans-serif;\n  background-color: $body-color;\n}\n\n.blur {\n  filter: blur(5px);\n}\n\nheader {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  border-bottom: 1px solid gray;\n  background-color: $header-color;\n}\n\nmain {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  word-break: break-word;\n  background-color: $footer-color;\n  font-size: 2rem;\n}\n\nfooter > * {\n  padding: 0.5rem;\n  font-family: \"ShortStack\";\n}\n\n.github-logo {\n  display: block;\n  width: 32px;\n  height: auto;\n}\n\n.main-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 auto;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.add-book-div {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-book-form-container {\n  display: none;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 9999;\n  filter: blur(0px);\n}\n\n.add-book-form {\n  background-color: rgb(232, 240, 160);\n  border: 5px solid black;\n  width: 250px;\n  height: 350px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n\n.book-list {\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  grid-template-columns: 1fr;\n  column-gap: 30px;\n  row-gap: 30px;\n}\n\n@media (min-width: 641px) {\n  .book-list {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 30px;\n    row-gap: 30px;\n  }\n}\n\n.book-card {\n  background-color: rgb(204, 219, 245);\n  height: 400px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 20px;\n  padding: 20px;\n  border: 3px solid black;\n  border-radius: 10%;\n}\n\n.book-card-title {\n  background-color: rgb(245, 245, 245);\n  height: auto;\n  max-width: 300px;\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  margin: 5px;\n  padding: 10px;\n  font-size: 24px;\n}\n\n.book-card-author {\n  background-color: rgb(245, 245, 245);\n  height: auto;\n  max-width: 300px;\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  margin: 5px;\n  padding: 10px;\n  font-size: 24px;\n}\n\n.book-card-pages {\n  background-color: rgb(245, 245, 245);\n  height: auto;\n  max-width: 300px;\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  margin: 5px;\n  padding: 10px;\n  font-size: 24px;\n}\n\n.book-card-read {\n  background-color: rgb(245, 245, 245);\n  height: auto;\n  max-width: 300px;\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  cursor: pointer;\n  margin: 5px;\n  padding: 10px;\n  font-size: 24px;\n}\n\nbutton {\n  cursor: pointer;\n  padding: 5px;\n  margin: 10px;\n  font-size: 1.3rem;\n}\n\n.green {\n  background-color: rgb(120, 231, 120);\n}\n\n.red {\n  background-color: rgb(243, 97, 72);\n}\n\n.small-text {\n  font-size: 12px;\n  margin: 0;\n  padding: 0;\n}\n\n.add-book-form-buttons-row {\n  display: flex;\n}\n\nlabel {\n  text-align: center;\n  margin: 5px;\n  padding: 5px;\n}\n\ninput[type=\"text\"],\ninput[type=\"number\"] {\n  width: 200px;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToLocalStorage": () => (/* binding */ addToLocalStorage),
/* harmony export */   "clearLocalStorage": () => (/* binding */ clearLocalStorage),
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "getFromLocalStorage": () => (/* binding */ getFromLocalStorage),
/* harmony export */   "openForm": () => (/* binding */ openForm)
/* harmony export */ });

let myLibrary = [];
let book;

let bookList = document.querySelector(".book-list");

/* getFromLocalStorage();
displayBooks(); */

// function Book(title, author, pages, read) {
//     this.title = title,
//         this.author = author,
//         this.pages = pages,
//         this.read = read
// }

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const addSomeBooks = () => {
  book = new Book("The Wisdom Of Crowds", "Joe Abercrombie", "528", false);
  myLibrary.push(book);
  book = new Book("A Game of Thrones", "George R.R. Martin", "720", true);
  myLibrary.push(book);
  resetBookList();
  displayBooks();
  addToLocalStorage();
};

const addBookToLibrary = () => {
  if (myLibrary === null) {
    myLibrary = [];
  }

  book = new Book(
    document.querySelector("#book-title").value,
    document.querySelector("#book-author").value,
    document.querySelector("#book-pages").value,
    document.querySelector("#book-read").checked
  );

  myLibrary.push(book);
  document.querySelector("#book-title").value = "";
  document.querySelector("#book-author").value = "";
  document.querySelector("#book-pages").value = "";
  document.querySelector("#book-read").checked = false;
  resetBookList();
  displayBooks();
  addToLocalStorage();
};

const resetBookList = () => {
  bookList.innerHTML = "";
};

const displayBooks = () => {
  if (myLibrary === null) {
    return;
  }

  for (i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement("div");
    const bookCardTitle = document.createElement("div");
    const bookCardTitleSmall = document.createElement("div");
    const bookCardAuthor = document.createElement("div");
    const bookCardAuthorSmall = document.createElement("div");
    const bookCardPages = document.createElement("div");
    const bookCardPagesSmall = document.createElement("div");
    const bookCardRead = document.createElement("div");
    const bookCardDelete = document.createElement("button");

    bookCard.classList.add("book-card");
    bookCardTitle.classList.add("book-card-title");
    bookCardTitleSmall.classList.add("small-text");
    bookCardAuthor.classList.add("book-card-author");
    bookCardAuthorSmall.classList.add("small-text");
    bookCardPages.classList.add("book-card-pages");
    bookCardPagesSmall.classList.add("small-text");
    bookCardRead.classList.add("book-card-read");

    bookCard.setAttribute("data-number", i);

    bookCardTitle.textContent = myLibrary[i].title;
    bookCardTitleSmall.textContent = "title";
    bookCardAuthor.textContent = myLibrary[i].author;
    bookCardAuthorSmall.textContent = "author";
    bookCardPages.textContent = myLibrary[i].pages;
    bookCardPagesSmall.textContent = "pages";
    if (myLibrary[i].read) {
      bookCardRead.textContent = "Read";
      bookCardRead.classList.add("green");
    } else {
      bookCardRead.textContent = "Not read";
      bookCardRead.classList.add("red");
    }
    bookCardDelete.textContent = "Delete book";

    bookCard.appendChild(bookCardTitle);
    bookCard.appendChild(bookCardTitleSmall);
    bookCard.appendChild(bookCardAuthor);
    bookCard.appendChild(bookCardAuthorSmall);
    bookCard.appendChild(bookCardPages);
    bookCard.appendChild(bookCardPagesSmall);
    bookCard.appendChild(bookCardRead);
    bookCard.appendChild(bookCardDelete);
    bookList.appendChild(bookCard);

    bookCardDelete.addEventListener("click", deleteBook);
    bookCardRead.addEventListener("click", toggleRead);
  }
};

const openForm = () => {
  document.querySelector(".main-wrapper").classList.add("blur");
  document.querySelector(".add-book-form-container").style.display = "block";
};

const closeForm = () => {
  document.querySelector(".main-wrapper").classList.remove("blur");
  document.querySelector(".add-book-form-container").style.display = "none";
};

const deleteBook = () => {
  let attribute = undefined.parentElement.getAttribute("data-number");
  myLibrary.splice(attribute, 1);
  undefined.parentElement.remove();
  resetBookList();
  displayBooks();
  addToLocalStorage();
};

const toggleRead = () => {
  let attribute = undefined.parentElement.getAttribute("data-number");
  if (myLibrary[attribute].read) {
    myLibrary[attribute].read = false;
    undefined.textContent = "Not read";
    undefined.classList.remove("green");
    undefined.classList.add("red");
  } else {
    myLibrary[attribute].read = true;
    undefined.textContent = "Read";
    undefined.classList.remove("red");
    undefined.classList.add("green");
  }
  addToLocalStorage();
};

const addToLocalStorage = () => {
  localStorage.setItem("myLibraryLocal", JSON.stringify(myLibrary));
};

const getFromLocalStorage = () => {
  myLibrary = JSON.parse(localStorage.getItem("myLibraryLocal"));
};

const clearLocalStorage = () => {
  localStorage.clear();
};


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPage": () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github.png */ "./src/github.png");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/logic.js");





const createWrapper = () => {
  const mainWrapper = document.createElement("div");
  mainWrapper.classList.add("main-wrapper");

  return mainWrapper;
};

const createHeader = () => {
  const header = document.createElement("header");
  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "Library";
  header.appendChild(headerTitle);

  return header;
};

const createForm = () => {
  const formDiv = document.createElement("div");
  formDiv.classList.add("add-book-form-container");
  const formDivFormWrapper = document.createElement("form");
  formDivFormWrapper.classList.add("add-book-form");
  const formBookTitle = document.createElement("label");
  formBookTitle.textContent = "Title";
  const formBookTitleInput = document.createElement("input");
  formBookTitleInput.setAttribute("type", "text");
  formBookTitleInput.setAttribute("id", "book-title");
  formBookTitleInput.setAttribute("maxlength", "30");
  formBookTitle.appendChild(formBookTitleInput);
  formDivFormWrapper.appendChild(formBookTitle);
  formDiv.appendChild(formDivFormWrapper);

  return formDiv;
};

const createMain = () => {
  const main = document.createElement("main");
  const mainAddBook = document.createElement("div");
  mainAddBook.classList.add("add-book-div");
  const mainAddBookButton = document.createElement("button");
  mainAddBookButton.classList.add("add-book-button");
  mainAddBookButton.textContent = "Add book";
  const mainBookList = document.createElement("div");
  mainBookList.classList.add("book-list");
  mainAddBook.appendChild(mainAddBookButton);
  main.appendChild(mainAddBook);
  main.appendChild(mainBookList);

  return main;
};

const createFooter = () => {
  const footer = document.createElement("footer");
  const footerDiv = document.createElement("div");
  const footerLink = document.createElement("a");
  const footerLinkImg = document.createElement("img");
  footerLinkImg.classList.add("github-logo");
  footerLinkImg.setAttribute("src", _github_png__WEBPACK_IMPORTED_MODULE_1__);
  footerDiv.textContent = "Developed by miroslav-zarenkov";
  footerLink.setAttribute("href", "https://github.com/miroslav-zarenkov");
  footerLink.setAttribute("target", "_blank");
  footerLink.setAttribute("rel", "noopener noreferrer");
  footer.appendChild(footerDiv);
  footer.appendChild(footerLink);
  footerLink.appendChild(footerLinkImg);

  return footer;
};

const createPage = (event) => {
  document.body.appendChild(createWrapper());
  document.querySelector(".main-wrapper").appendChild(createHeader());
  document.querySelector(".main-wrapper").appendChild(createMain());

  document.querySelector(".main-wrapper").appendChild(createFooter());
  document.body.appendChild(createForm());
};

const renderPage = (event) => {
  (0,_logic__WEBPACK_IMPORTED_MODULE_2__.getFromLocalStorage)();
  createPage(event);
  /*   let submitButton = document.querySelector("#submit-button");
  let cancelSubmitButton = document.querySelector("#cancel-submit-button"); */
  let addBookButton = document.querySelector(".add-book-button");
  /*  submitButton.addEventListener("click", addBookToLibrary);
  submitButton.addEventListener("click", closeForm);
  cancelSubmitButton.addEventListener("click", closeForm); */
  addBookButton.addEventListener("click", _logic__WEBPACK_IMPORTED_MODULE_2__.openForm);
};


/***/ }),

/***/ "./src/github.png":
/*!************************!*\
  !*** ./src/github.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a38fb992fc0b988f234.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");


document.addEventListener("DOMContentLoaded", _ui__WEBPACK_IMPORTED_MODULE_0__.renderPage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0EsRUFBRSwyREFBbUI7QUFDckI7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0QsMENBQTBDLDRDQUFRO0FBQ2xEOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7O0FDQWtDOztBQUVsQyw4Q0FBOEMsMkNBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIzMCwgMjA0KTtcXG59XFxuXFxuLmJsdXIge1xcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyNDUsIDIzMCk7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuZm9vdGVyID4gKiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIlNob3J0U3RhY2tcXFwiO1xcbn1cXG5cXG4uZ2l0aHViLWxvZ28ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLm1haW4td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYWRkLWJvb2stZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1ib29rLWZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIGZpbHRlcjogYmx1cigwcHgpO1xcbn1cXG5cXG4uYWRkLWJvb2stZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMyLCAyNDAsIDE2MCk7XFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmJvb2stbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGNvbHVtbi1nYXA6IDMwcHg7XFxuICByb3ctZ2FwOiAzMHB4O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQxcHgpIHtcXG4gIC5ib29rLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBjb2x1bW4tZ2FwOiAzMHB4O1xcbiAgICByb3ctZ2FwOiAzMHB4O1xcbiAgfVxcbn1cXG4uYm9vay1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDIxOSwgMjQ1KTtcXG4gIGhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuLmJvb2stY2FyZC10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmJvb2stY2FyZC1hdXRob3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5ib29rLWNhcmQtcGFnZXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5ib29rLWNhcmQtcmVhZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgMjMxLCAxMjApO1xcbn1cXG5cXG4ucmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDk3LCA3Mik7XFxufVxcblxcbi5zbWFsbC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hZGQtYm9vay1mb3JtLWJ1dHRvbnMtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLFxcbmlucHV0W3R5cGU9bnVtYmVyXSB7XFxuICB3aWR0aDogMjAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNc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MzAsIDIwNCk7XFxuJGhlYWRlci1jb2xvcjogcmdiKDIwNCwgMjQ1LCAyMzApO1xcbiRmb290ZXItY29sb3I6IHB1cnBsZTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWNvbG9yO1xcbn1cXG5cXG4uYmx1ciB7XFxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItY29sb3I7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb290ZXItY29sb3I7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmZvb3RlciA+ICoge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTaG9ydFN0YWNrXFxcIjtcXG59XFxuXFxuLmdpdGh1Yi1sb2dvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5tYWluLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmFkZC1ib29rLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtYm9vay1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBmaWx0ZXI6IGJsdXIoMHB4KTtcXG59XFxuXFxuLmFkZC1ib29rLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgMjQwLCAxNjApO1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5ib29rLWxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBjb2x1bW4tZ2FwOiAzMHB4O1xcbiAgcm93LWdhcDogMzBweDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MXB4KSB7XFxuICAuYm9vay1saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgY29sdW1uLWdhcDogMzBweDtcXG4gICAgcm93LWdhcDogMzBweDtcXG4gIH1cXG59XFxuXFxuLmJvb2stY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMTksIDI0NSk7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxufVxcblxcbi5ib29rLWNhcmQtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5ib29rLWNhcmQtYXV0aG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uYm9vay1jYXJkLXBhZ2VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uYm9vay1jYXJkLXJlYWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDIzMSwgMTIwKTtcXG59XFxuXFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCA5NywgNzIpO1xcbn1cXG5cXG4uc21hbGwtdGV4dCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYWRkLWJvb2stZm9ybS1idXR0b25zLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHtcbiAgYWRkVG9Mb2NhbFN0b3JhZ2UsXG4gIGdldEZyb21Mb2NhbFN0b3JhZ2UsXG4gIGNsZWFyTG9jYWxTdG9yYWdlLFxuICBvcGVuRm9ybSxcbiAgY2xvc2VGb3JtLFxufTtcbmxldCBteUxpYnJhcnkgPSBbXTtcbmxldCBib29rO1xuXG5sZXQgYm9va0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2stbGlzdFwiKTtcblxuLyogZ2V0RnJvbUxvY2FsU3RvcmFnZSgpO1xuZGlzcGxheUJvb2tzKCk7ICovXG5cbi8vIGZ1bmN0aW9uIEJvb2sodGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWQpIHtcbi8vICAgICB0aGlzLnRpdGxlID0gdGl0bGUsXG4vLyAgICAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yLFxuLy8gICAgICAgICB0aGlzLnBhZ2VzID0gcGFnZXMsXG4vLyAgICAgICAgIHRoaXMucmVhZCA9IHJlYWRcbi8vIH1cblxuY2xhc3MgQm9vayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCByZWFkKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuICAgIHRoaXMucGFnZXMgPSBwYWdlcztcbiAgICB0aGlzLnJlYWQgPSByZWFkO1xuICB9XG59XG5cbmNvbnN0IGFkZFNvbWVCb29rcyA9ICgpID0+IHtcbiAgYm9vayA9IG5ldyBCb29rKFwiVGhlIFdpc2RvbSBPZiBDcm93ZHNcIiwgXCJKb2UgQWJlcmNyb21iaWVcIiwgXCI1MjhcIiwgZmFsc2UpO1xuICBteUxpYnJhcnkucHVzaChib29rKTtcbiAgYm9vayA9IG5ldyBCb29rKFwiQSBHYW1lIG9mIFRocm9uZXNcIiwgXCJHZW9yZ2UgUi5SLiBNYXJ0aW5cIiwgXCI3MjBcIiwgdHJ1ZSk7XG4gIG15TGlicmFyeS5wdXNoKGJvb2spO1xuICByZXNldEJvb2tMaXN0KCk7XG4gIGRpc3BsYXlCb29rcygpO1xuICBhZGRUb0xvY2FsU3RvcmFnZSgpO1xufTtcblxuY29uc3QgYWRkQm9va1RvTGlicmFyeSA9ICgpID0+IHtcbiAgaWYgKG15TGlicmFyeSA9PT0gbnVsbCkge1xuICAgIG15TGlicmFyeSA9IFtdO1xuICB9XG5cbiAgYm9vayA9IG5ldyBCb29rKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay10aXRsZVwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stYXV0aG9yXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1wYWdlc1wiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stcmVhZFwiKS5jaGVja2VkXG4gICk7XG5cbiAgbXlMaWJyYXJ5LnB1c2goYm9vayk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay10aXRsZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1hdXRob3JcIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stcGFnZXNcIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stcmVhZFwiKS5jaGVja2VkID0gZmFsc2U7XG4gIHJlc2V0Qm9va0xpc3QoKTtcbiAgZGlzcGxheUJvb2tzKCk7XG4gIGFkZFRvTG9jYWxTdG9yYWdlKCk7XG59O1xuXG5jb25zdCByZXNldEJvb2tMaXN0ID0gKCkgPT4ge1xuICBib29rTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuY29uc3QgZGlzcGxheUJvb2tzID0gKCkgPT4ge1xuICBpZiAobXlMaWJyYXJ5ID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IG15TGlicmFyeS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGJvb2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZFRpdGxlU21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJvb2tDYXJkQXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZEF1dGhvclNtYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZFBhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZFBhZ2VzU21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJvb2tDYXJkUmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm9va0NhcmREZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgYm9va0NhcmQuY2xhc3NMaXN0LmFkZChcImJvb2stY2FyZFwiKTtcbiAgICBib29rQ2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJib29rLWNhcmQtdGl0bGVcIik7XG4gICAgYm9va0NhcmRUaXRsZVNtYWxsLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC10ZXh0XCIpO1xuICAgIGJvb2tDYXJkQXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJib29rLWNhcmQtYXV0aG9yXCIpO1xuICAgIGJvb2tDYXJkQXV0aG9yU21hbGwuY2xhc3NMaXN0LmFkZChcInNtYWxsLXRleHRcIik7XG4gICAgYm9va0NhcmRQYWdlcy5jbGFzc0xpc3QuYWRkKFwiYm9vay1jYXJkLXBhZ2VzXCIpO1xuICAgIGJvb2tDYXJkUGFnZXNTbWFsbC5jbGFzc0xpc3QuYWRkKFwic21hbGwtdGV4dFwiKTtcbiAgICBib29rQ2FyZFJlYWQuY2xhc3NMaXN0LmFkZChcImJvb2stY2FyZC1yZWFkXCIpO1xuXG4gICAgYm9va0NhcmQuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIiwgaSk7XG5cbiAgICBib29rQ2FyZFRpdGxlLnRleHRDb250ZW50ID0gbXlMaWJyYXJ5W2ldLnRpdGxlO1xuICAgIGJvb2tDYXJkVGl0bGVTbWFsbC50ZXh0Q29udGVudCA9IFwidGl0bGVcIjtcbiAgICBib29rQ2FyZEF1dGhvci50ZXh0Q29udGVudCA9IG15TGlicmFyeVtpXS5hdXRob3I7XG4gICAgYm9va0NhcmRBdXRob3JTbWFsbC50ZXh0Q29udGVudCA9IFwiYXV0aG9yXCI7XG4gICAgYm9va0NhcmRQYWdlcy50ZXh0Q29udGVudCA9IG15TGlicmFyeVtpXS5wYWdlcztcbiAgICBib29rQ2FyZFBhZ2VzU21hbGwudGV4dENvbnRlbnQgPSBcInBhZ2VzXCI7XG4gICAgaWYgKG15TGlicmFyeVtpXS5yZWFkKSB7XG4gICAgICBib29rQ2FyZFJlYWQudGV4dENvbnRlbnQgPSBcIlJlYWRcIjtcbiAgICAgIGJvb2tDYXJkUmVhZC5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvb2tDYXJkUmVhZC50ZXh0Q29udGVudCA9IFwiTm90IHJlYWRcIjtcbiAgICAgIGJvb2tDYXJkUmVhZC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgIH1cbiAgICBib29rQ2FyZERlbGV0ZS50ZXh0Q29udGVudCA9IFwiRGVsZXRlIGJvb2tcIjtcblxuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkVGl0bGUpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkVGl0bGVTbWFsbCk7XG4gICAgYm9va0NhcmQuYXBwZW5kQ2hpbGQoYm9va0NhcmRBdXRob3IpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkQXV0aG9yU21hbGwpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkUGFnZXMpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkUGFnZXNTbWFsbCk7XG4gICAgYm9va0NhcmQuYXBwZW5kQ2hpbGQoYm9va0NhcmRSZWFkKTtcbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChib29rQ2FyZERlbGV0ZSk7XG4gICAgYm9va0xpc3QuYXBwZW5kQ2hpbGQoYm9va0NhcmQpO1xuXG4gICAgYm9va0NhcmREZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZUJvb2spO1xuICAgIGJvb2tDYXJkUmVhZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlUmVhZCk7XG4gIH1cbn07XG5cbmNvbnN0IG9wZW5Gb3JtID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKS5jbGFzc0xpc3QuYWRkKFwiYmx1clwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYm9vay1mb3JtLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufTtcblxuY29uc3QgY2xvc2VGb3JtID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1clwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYm9vay1mb3JtLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59O1xuXG5jb25zdCBkZWxldGVCb29rID0gKCkgPT4ge1xuICBsZXQgYXR0cmlidXRlID0gdGhpcy5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbnVtYmVyXCIpO1xuICBteUxpYnJhcnkuc3BsaWNlKGF0dHJpYnV0ZSwgMSk7XG4gIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgcmVzZXRCb29rTGlzdCgpO1xuICBkaXNwbGF5Qm9va3MoKTtcbiAgYWRkVG9Mb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IHRvZ2dsZVJlYWQgPSAoKSA9PiB7XG4gIGxldCBhdHRyaWJ1dGUgPSB0aGlzLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIik7XG4gIGlmIChteUxpYnJhcnlbYXR0cmlidXRlXS5yZWFkKSB7XG4gICAgbXlMaWJyYXJ5W2F0dHJpYnV0ZV0ucmVhZCA9IGZhbHNlO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSBcIk5vdCByZWFkXCI7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JlZW5cIik7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICB9IGVsc2Uge1xuICAgIG15TGlicmFyeVthdHRyaWJ1dGVdLnJlYWQgPSB0cnVlO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSBcIlJlYWRcIjtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJyZWRcIik7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5cIik7XG4gIH1cbiAgYWRkVG9Mb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IGFkZFRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15TGlicmFyeUxvY2FsXCIsIEpTT04uc3RyaW5naWZ5KG15TGlicmFyeSkpO1xufTtcblxuY29uc3QgZ2V0RnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgbXlMaWJyYXJ5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15TGlicmFyeUxvY2FsXCIpKTtcbn07XG5cbmNvbnN0IGNsZWFyTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbn07XG4iLCJleHBvcnQgeyByZW5kZXJQYWdlIH07XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBHaXRodWJMb2dvIGZyb20gXCIuL2dpdGh1Yi5wbmdcIjtcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UsIG9wZW5Gb3JtIH0gZnJvbSBcIi4vbG9naWNcIjtcblxuY29uc3QgY3JlYXRlV3JhcHBlciA9ICgpID0+IHtcbiAgY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibWFpbi13cmFwcGVyXCIpO1xuXG4gIHJldHVybiBtYWluV3JhcHBlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJMaWJyYXJ5XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJhZGQtYm9vay1mb3JtLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgZm9ybURpdkZvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm1EaXZGb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYWRkLWJvb2stZm9ybVwiKTtcbiAgY29uc3QgZm9ybUJvb2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZm9ybUJvb2tUaXRsZS50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgY29uc3QgZm9ybUJvb2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBmb3JtQm9va1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGZvcm1Cb29rVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJvb2stdGl0bGVcIik7XG4gIGZvcm1Cb29rVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIzMFwiKTtcbiAgZm9ybUJvb2tUaXRsZS5hcHBlbmRDaGlsZChmb3JtQm9va1RpdGxlSW5wdXQpO1xuICBmb3JtRGl2Rm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybUJvb2tUaXRsZSk7XG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybURpdkZvcm1XcmFwcGVyKTtcblxuICByZXR1cm4gZm9ybURpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgbWFpbkFkZEJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQWRkQm9vay5jbGFzc0xpc3QuYWRkKFwiYWRkLWJvb2stZGl2XCIpO1xuICBjb25zdCBtYWluQWRkQm9va0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1haW5BZGRCb29rQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtYm9vay1idXR0b25cIik7XG4gIG1haW5BZGRCb29rQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgYm9va1wiO1xuICBjb25zdCBtYWluQm9va0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQm9va0xpc3QuY2xhc3NMaXN0LmFkZChcImJvb2stbGlzdFwiKTtcbiAgbWFpbkFkZEJvb2suYXBwZW5kQ2hpbGQobWFpbkFkZEJvb2tCdXR0b24pO1xuICBtYWluLmFwcGVuZENoaWxkKG1haW5BZGRCb29rKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluQm9va0xpc3QpO1xuXG4gIHJldHVybiBtYWluO1xufTtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGZvb3RlckxpbmtJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBmb290ZXJMaW5rSW1nLmNsYXNzTGlzdC5hZGQoXCJnaXRodWItbG9nb1wiKTtcbiAgZm9vdGVyTGlua0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgR2l0aHViTG9nbyk7XG4gIGZvb3RlckRpdi50ZXh0Q29udGVudCA9IFwiRGV2ZWxvcGVkIGJ5IG1pcm9zbGF2LXphcmVua292XCI7XG4gIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9taXJvc2xhdi16YXJlbmtvdlwiKTtcbiAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwibm9vcGVuZXIgbm9yZWZlcnJlclwiKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckRpdik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5rKTtcbiAgZm9vdGVyTGluay5hcHBlbmRDaGlsZChmb290ZXJMaW5rSW1nKTtcblxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuY29uc3QgY3JlYXRlUGFnZSA9IChldmVudCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVdyYXBwZXIoKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi13cmFwcGVyXCIpLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybSgpKTtcbn07XG5cbmNvbnN0IHJlbmRlclBhZ2UgPSAoZXZlbnQpID0+IHtcbiAgZ2V0RnJvbUxvY2FsU3RvcmFnZSgpO1xuICBjcmVhdGVQYWdlKGV2ZW50KTtcbiAgLyogICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXQtYnV0dG9uXCIpO1xuICBsZXQgY2FuY2VsU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtc3VibWl0LWJ1dHRvblwiKTsgKi9cbiAgbGV0IGFkZEJvb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1ib29rLWJ1dHRvblwiKTtcbiAgLyogIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkQm9va1RvTGlicmFyeSk7XG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtKTtcbiAgY2FuY2VsU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm0pOyAqL1xuICBhZGRCb29rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRm9ybSk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHJlbmRlclBhZ2UgfSBmcm9tIFwiLi91aVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCByZW5kZXJQYWdlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==