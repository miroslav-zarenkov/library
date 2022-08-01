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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  height: 100vh;\n}\n\nbody {\n  font-family: sans-serif;\n  background-color: #f2f2f2;\n}\n\n.blur {\n  filter: blur(1rem);\n}\n\n.form-btn-wrapper, .book-card-pages, .book-card-author, .book-card-title, .book-card, .book-list, .add-book-form, .add-book-div, .main-wrapper, footer, header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nheader {\n  width: 100%;\n  border-bottom: 1px solid gray;\n  background-color: #c40505;\n}\nheader h1 {\n  font-size: 5rem;\n  margin: 1rem;\n  padding: 1rem;\n}\n\nmain {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  width: 100%;\n  flex-shrink: 0;\n  word-break: break-word;\n  background-color: #c40505;\n  margin-top: 2rem;\n}\nfooter div {\n  font-size: 1.6rem;\n}\n\nfooter > * {\n  padding: 0.5rem;\n}\n\n.github-logo {\n  display: block;\n  width: 32px;\n  height: auto;\n}\n\n.main-wrapper {\n  flex-direction: column;\n  flex: 0 0 auto;\n  width: 100%;\n  min-height: 100vh;\n}\n\n.add-book-div {\n  width: 100%;\n  margin: 2rem 0;\n}\n\n.add-book-form-container {\n  display: none;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.add-book-form {\n  background-color: rgb(204, 219, 245);\n  height: 40rem;\n  width: 25rem;\n  flex-direction: column;\n  padding: 2rem;\n  border: 3px solid black;\n  border-radius: 2rem;\n}\n\n.book-list {\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n\n.book-card {\n  background-color: rgb(204, 219, 245);\n  height: 40rem;\n  width: 25rem;\n  flex-direction: column;\n  padding: 2rem;\n  border: 3px solid black;\n  border-radius: 2rem;\n}\n\n.book-card-read {\n  font-size: 3rem;\n  line-height: 3rem;\n  background-color: rgb(245, 245, 245);\n  height: auto;\n  max-width: 30rem;\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  cursor: pointer;\n  margin: 1rem;\n  padding: 1rem;\n  user-select: none;\n  border-radius: 0.5rem;\n  min-width: 50%;\n  text-align: center;\n}\n\nbutton {\n  align-items: center;\n  appearance: none;\n  background-color: #fcfcfd;\n  border-radius: 4px;\n  border-width: 0;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #36395a;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: \"JetBrains Mono\", monospace;\n  height: 3.5rem;\n  justify-content: center;\n  line-height: 2rem;\n  list-style: none;\n  overflow: hidden;\n  padding: 1rem;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: box-shadow 0.15s, transform 0.15s;\n  user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow, transform;\n  font-size: 2rem;\n}\nbutton:hover {\n  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  transform: translateY(-2px);\n}\nbutton:focus {\n  box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n}\nbutton:active {\n  box-shadow: #d6d6e7 0 3px 7px inset;\n  transform: translateY(2px);\n}\n\n.green {\n  background-color: #78e778;\n}\n\n.red {\n  background-color: #f36148;\n}\n\n.small-text {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n}\n\nlabel {\n  text-align: center;\n  margin: 0.5rem;\n  padding: 0.5rem;\n}\n\n.error-p {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  color: red;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\ninput[type=text],\ninput[type=number] {\n  width: 20rem;\n}\n\ninput.invalid-data {\n  border-color: red;\n  outline-color: red;\n}\n\n.book-card-pages, .book-card-author, .book-card-title {\n  text-align: center;\n  width: 70%;\n  background-color: rgb(245, 245, 245);\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  margin: 0.5rem;\n  padding: 1rem;\n  font-size: 2.4rem;\n  height: 5rem;\n  line-height: 2.4rem;\n  border-radius: 0.5rem;\n}\n\n.form-btn-wrapper {\n  gap: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAMA;EACE,SAAA;EACA,UAAA;AALF;;AAQA;EACE,gBAAA;EACA,aAAA;AALF;;AAQA;EACE,uBAAA;EACA,yBAlBc;AAahB;;AAQA;EACE,kBAAA;AALF;;AAQA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AALF;;AAWA;EAEE,WAAA;EACA,6BAAA;EACA,yBArCgB;AA4BlB;AAUE;EACE,eAAA;EACA,YAAA;EACA,aAAA;AARJ;;AAYA;EACE,cAAA;EACA,aAAA;EACA,sBAAA;AATF;;AAYA;EAEE,WAAA;EACA,cAAA;EACA,sBAAA;EACA,yBAvDgB;EAwDhB,gBAAA;AAVF;AAWE;EACE,iBAAA;AATJ;;AAaA;EACE,eAAA;AAVF;;AAaA;EACE,cAAA;EACA,WAAA;EACA,YAAA;AAVF;;AAaA;EAEE,sBAAA;EACA,cAAA;EACA,WAAA;EACA,iBAAA;AAXF;;AAcA;EAEE,WAAA;EACA,cAAA;AAZF;;AAeA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;AAZF;;AAeA;EAEE,oCAAA;EACA,aAAA;EACA,YAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAbF;;AAgBA;EAEE,mBAAA;EACA,eAAA;EACA,SAAA;AAdF;;AAiBA;EAEE,oCAAA;EACA,aAAA;EACA,YAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAfF;;AAkBA;EA9FE,eA+FmB;EA9FnB,iBA8FmB;EACnB,oCAAA;EACA,YAAA;EACA,gBAAA;EACA,uBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;AAdF;;AAiBA;EACE,mBAAA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,0GAAA;EAEA,sBAAA;EACA,cAAA;EACA,eAAA;EACA,oBAAA;EACA,wCAAA;EACA,cAAA;EACA,uBAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,6CAAA;EACA,iBAAA;EACA,0BAAA;EACA,mBAAA;EACA,kCAAA;EACA,eAAA;AAfF;AAgBE;EACE,0GAAA;EAEA,2BAAA;AAfJ;AAiBE;EACE,qIAAA;AAfJ;AAkBE;EACE,mCAAA;EACA,0BAAA;AAhBJ;;AAoBA;EACE,yBArLY;AAoKd;;AAoBA;EACE,yBA1LU;AAyKZ;;AAoBA;EAjKE,iBAkKmB;EAjKnB,mBAiKmB;AAhBrB;;AAmBA;EACE,kBAAA;EACA,cAAA;EACA,eAAA;AAhBF;;AAmBA;EA3KE,iBA4KmB;EA3KnB,mBA2KmB;EACnB,UAAA;AAfF;;AAkBA;EACE,kBAAA;AAfF;;AAkBA;;EAEE,YAAA;AAfF;;AAiBA;EACE,iBAAA;EACA,kBAAA;AAdF;;AAiBA;EAEE,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,uBAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;EACA,iBAAA;EACA,YAAA;EACA,mBAAA;EACA,qBAAA;AAfF;;AA2BA;EAEE,SAAA;AAzBF","sourcesContent":["$body-bg-color: #f2f2f2;\n$header-bg-color: #c40505;\n$footer-bg-color: #c40505;\n$red-color: #f36148;\n$green-color: #78e778;\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  height: 100vh;\n}\n\nbody {\n  font-family: sans-serif;\n  background-color: $body-bg-color;\n}\n\n.blur {\n  filter: blur(1rem);\n}\n\n%flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@mixin font-size($size) {\n  font-size: $size;\n  line-height: $size;\n}\nheader {\n  @extend %flex-center;\n  width: 100%;\n  border-bottom: 1px solid gray;\n  background-color: $header-bg-color;\n  h1 {\n    font-size: 5rem;\n    margin: 1rem;\n    padding: 1rem;\n  }\n}\n\nmain {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  @extend %flex-center;\n  width: 100%;\n  flex-shrink: 0;\n  word-break: break-word;\n  background-color: $footer-bg-color;\n  margin-top: 2rem;\n  div {\n    font-size: 1.6rem;\n  }\n}\n\nfooter > * {\n  padding: 0.5rem;\n}\n\n.github-logo {\n  display: block;\n  width: 32px;\n  height: auto;\n}\n\n.main-wrapper {\n  @extend %flex-center;\n  flex-direction: column;\n  flex: 0 0 auto;\n  width: 100%;\n  min-height: 100vh;\n}\n\n.add-book-div {\n  @extend %flex-center;\n  width: 100%;\n  margin: 2rem 0;\n}\n\n.add-book-form-container {\n  display: none;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.add-book-form {\n  @extend %flex-center;\n  background-color: rgb(204, 219, 245);\n  height: 40rem;\n  width: 25rem;\n  flex-direction: column;\n  padding: 2rem;\n  border: 3px solid black;\n  border-radius: 2rem;\n}\n\n.book-list {\n  @extend %flex-center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n\n.book-card {\n  @extend %flex-center;\n  background-color: rgb(204, 219, 245);\n  height: 40rem;\n  width: 25rem;\n  flex-direction: column;\n  padding: 2rem;\n  border: 3px solid black;\n  border-radius: 2rem;\n}\n\n.book-card-read {\n  @include font-size(3rem);\n  background-color: rgb(245, 245, 245);\n  height: auto;\n  max-width: 30rem;\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  cursor: pointer;\n  margin: 1rem;\n  padding: 1rem;\n  user-select: none;\n  border-radius: 0.5rem;\n  min-width: 50%;\n  text-align: center;\n}\n\nbutton {\n  align-items: center;\n  appearance: none;\n  background-color: #fcfcfd;\n  border-radius: 4px;\n  border-width: 0;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,\n    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #36395a;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: \"JetBrains Mono\", monospace;\n  height: 3.5rem;\n  justify-content: center;\n  line-height: 2rem;\n  list-style: none;\n  overflow: hidden;\n  padding: 1rem;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: box-shadow 0.15s, transform 0.15s;\n  user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow, transform;\n  font-size: 2rem;\n  &:hover {\n    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n    transform: translateY(-2px);\n  }\n  &:focus {\n    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  }\n  &:active {\n    box-shadow: #d6d6e7 0 3px 7px inset;\n    transform: translateY(2px);\n  }\n}\n\n.green {\n  background-color: $green-color;\n}\n\n.red {\n  background-color: $red-color;\n}\n\n.small-text {\n  @include font-size(1.5rem);\n}\n\nlabel {\n  text-align: center;\n  margin: 0.5rem;\n  padding: 0.5rem;\n}\n\n.error-p {\n  @include font-size(1.5rem);\n  color: red;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\ninput[type=\"text\"],\ninput[type=\"number\"] {\n  width: 20rem;\n}\ninput.invalid-data {\n  border-color: red;\n  outline-color: red;\n}\n\n%book-card-info {\n  @extend %flex-center;\n  text-align: center;\n  width: 70%;\n  background-color: rgb(245, 245, 245);\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  margin: 0.5rem;\n  padding: 1rem;\n  font-size: 2.4rem;\n  height: 5rem;\n  line-height: 2.4rem;\n  border-radius: 0.5rem;\n}\n.book-card-title {\n  @extend %book-card-info;\n}\n.book-card-author {\n  @extend %book-card-info;\n}\n.book-card-pages {\n  @extend %book-card-info;\n}\n\n.form-btn-wrapper {\n  @extend %flex-center;\n  gap: 2rem;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "addBookToLibrary": () => (/* binding */ addBookToLibrary),
/* harmony export */   "addSomeBooks": () => (/* binding */ addSomeBooks),
/* harmony export */   "addToLocalStorage": () => (/* binding */ addToLocalStorage),
/* harmony export */   "clearLocalStorage": () => (/* binding */ clearLocalStorage),
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "displayBooks": () => (/* binding */ displayBooks),
/* harmony export */   "getFromLocalStorage": () => (/* binding */ getFromLocalStorage),
/* harmony export */   "inputValidation": () => (/* binding */ inputValidation),
/* harmony export */   "myLibrary": () => (/* binding */ myLibrary),
/* harmony export */   "openForm": () => (/* binding */ openForm),
/* harmony export */   "submitForm": () => (/* binding */ submitForm)
/* harmony export */ });

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const addSomeBooks = () => {
  let book;
  book = new Book("The Wisdom Of Crowds", "Joe Abercrombie", "528", false);
  myLibrary.push(book);
  book = new Book("A Game of Thrones", "George R.R. Martin", "720", true);
  myLibrary.push(book);
  addToLocalStorage();
};

const addBookToLibrary = () => {
  if (myLibrary === null) {
    myLibrary = [];
  }
  let book;
  book = new Book(
    document.querySelector("#book-title").value,
    document.querySelector("#book-author").value,
    document.querySelector("#book-pages").value,
    document.querySelector("#book-read").checked
  );

  myLibrary.push(book);
  closeForm();
  resetBookList();
  displayBooks();
  addToLocalStorage();
};

const resetBookList = () => {
  document.querySelector(".book-list").innerHTML = "";
};

const displayBooks = () => {
  if (myLibrary === null) {
    return;
  }

  for (let i = 0; i < myLibrary.length; i++) {
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
    document.querySelector(".book-list").appendChild(bookCard);

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
  clearFormInputs();
};

const deleteBook = (e) => {
  let attribute = e.target.parentElement.getAttribute("data-number");
  myLibrary.splice(attribute, 1);
  e.target.parentElement.remove();
  resetBookList();
  displayBooks();
  addToLocalStorage();
};

const toggleRead = (e) => {
  let attribute = e.target.parentElement.getAttribute("data-number");
  if (myLibrary[attribute].read) {
    myLibrary[attribute].read = false;
    e.target.textContent = "Not read";
    e.target.classList.remove("green");
    e.target.classList.add("red");
  } else {
    myLibrary[attribute].read = true;
    e.target.textContent = "Read";
    e.target.classList.remove("red");
    e.target.classList.add("green");
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

const clearFormInputs = () => {
  document.querySelector("#book-title").value = "";
  document.querySelector("#book-author").value = "";
  document.querySelector("#book-pages").value = "";
  document.querySelector("#book-read").checked = false;
};

const submitForm = (event) => {
  event.preventDefault();
  const inputTitle = document.querySelector("#book-title");
  const inputAuthor = document.querySelector("#book-author");
  const inputPages = document.querySelector("#book-pages");

  /* if (inputTitle.validity.valid) {
    console.log("title ok");
    document.querySelector("#title-error-span").textContent = "";
    document.querySelector("#title-error-span").classList.add("hidden");
  } else {
    console.log("title error");
    document.querySelector("#title-error-span").textContent = "STUPID";
    document.querySelector("#title-error-span").classList.remove("hidden");
  }
  if (inputAuthor.validity.valid) {
    console.log("author ok");
    document.querySelector("#author-error-span").textContent = "";
    document.querySelector("#author-error-span").classList.add("hidden");
  } else {
    console.log("author error");
    document.querySelector("#author-error-span").textContent = "STUPID";
    document.querySelector("#author-error-span").classList.remove("hidden");
  }
  if (inputPages.validity.valid) {
    console.log("pages ok");
    document.querySelector("#pages-error-span").textContent = "";
    document.querySelector("#pages-error-span").classList.add("hidden");
  } else {
    console.log("pages error");
    document.querySelector("#pages-error-span").textContent = "STUPID";
    document.querySelector("#pages-error-span").classList.remove("hidden");
  } */
  if (
    inputTitle.validity.valid &&
    inputAuthor.validity.valid &&
    inputPages.validity.valid
  ) {
    addBookToLibrary();
  }
};

const inputValidation = () => {
  const inputTitle = document.querySelector("#book-title");
  const inputAuthor = document.querySelector("#book-author");
  const inputPages = document.querySelector("#book-pages");

  const bookTitleValidation = () => {
    if (inputTitle.validity.valid) {
      console.log("title ok");
      inputTitle.classList.remove("invalid-data");
      document.querySelector("#title-error-p").textContent = "Everything OK!";
      document.querySelector("#title-error-p").classList.add("hidden");
    } else if (inputTitle.validity.valueMissing) {
      console.log("title error");
      inputTitle.classList.add("invalid-data");
      document.querySelector("#title-error-p").textContent =
        "You forgot book title";
      document.querySelector("#title-error-p").classList.remove("hidden");
    } else {
      console.log("title error");
      inputTitle.classList.add("invalid-data");
      document.querySelector("#title-error-p").textContent =
        "What is this error";
      document.querySelector("#title-error-p").classList.remove("hidden");
    }
    if (inputTitle.value.length === 30) {
      inputTitle.classList.add("invalid-data");
      document.querySelector("#title-error-p").textContent =
        "Maximum 30 characters";
      document.querySelector("#title-error-p").classList.remove("hidden");
    }
  };

  inputTitle.addEventListener("input", bookTitleValidation);
  inputTitle.addEventListener("focusout", bookTitleValidation);
  document.querySelector("#book-author").addEventListener("input", () => {
    console.log("kek2");
  });
  document.querySelector("#book-pages").addEventListener("input", () => {
    console.log("kek3");
  });
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
  const formBookTitlePara = document.createElement("p");
  formBookTitlePara.textContent = "Title";
  formBookTitle.appendChild(formBookTitlePara);
  const formBookTitleInput = document.createElement("input");
  formBookTitleInput.setAttribute("type", "text");
  formBookTitleInput.setAttribute("id", "book-title");
  formBookTitleInput.setAttribute("name", "book-title");
  formBookTitleInput.setAttribute("maxlength", "30");
  formBookTitleInput.setAttribute("placeholder", "1984");
  formBookTitleInput.setAttribute("required", "");
  const formBookTitleErrorPara = document.createElement("p");
  formBookTitleErrorPara.classList.add("error-p", "hidden");
  formBookTitleErrorPara.setAttribute("id", "title-error-p");
  formBookTitleErrorPara.textContent = "Everything OK!";
  const formBookAuthor = document.createElement("label");
  const formBookAuthorPara = document.createElement("p");
  formBookAuthorPara.textContent = "Author";
  formBookAuthor.appendChild(formBookAuthorPara);
  formBookAuthor.textContent = "Author";
  const formBookAuthorInput = document.createElement("input");
  formBookAuthorInput.setAttribute("type", "text");
  formBookAuthorInput.setAttribute("id", "book-author");
  formBookAuthorInput.setAttribute("name", "book-author");
  formBookAuthorInput.setAttribute("maxlength", "30");
  formBookAuthorInput.setAttribute("placeholder", "George Orwell");
  formBookAuthorInput.setAttribute("required", "");
  const formBookAuthorErrorPara = document.createElement("p");
  formBookAuthorErrorPara.classList.add("error-p", "hidden");
  formBookAuthorErrorPara.setAttribute("id", "author-error-p");
  formBookAuthorErrorPara.textContent = "Everything OK!";
  const formBookPages = document.createElement("label");
  const formBookPagesPara = document.createElement("p");
  formBookPagesPara.textContent = "Pages";
  formBookPages.appendChild(formBookPagesPara);
  formBookPages.textContent = "Pages";
  const formBookPagesInput = document.createElement("input");
  formBookPagesInput.setAttribute("type", "number");
  formBookPagesInput.setAttribute("id", "book-pages");
  formBookPagesInput.setAttribute("name", "book-pages");
  formBookPagesInput.setAttribute("min", "0");
  formBookPagesInput.setAttribute("max", "9999");
  formBookPagesInput.setAttribute("placeholder", "328");
  formBookPagesInput.setAttribute("required", "");
  const formBookPagesErrorPara = document.createElement("p");
  formBookPagesErrorPara.classList.add("error-p", "hidden");
  formBookPagesErrorPara.setAttribute("id", "pages-error-p");
  formBookPagesErrorPara.textContent = "Everything OK!";
  const formBookRead = document.createElement("label");
  formBookRead.textContent = "Read";
  const formBookReadInput = document.createElement("input");
  formBookReadInput.setAttribute("type", "checkbox");
  formBookReadInput.setAttribute("id", "book-read");
  formBookReadInput.setAttribute("name", "book-read");
  const formBookButtonsWrapper = document.createElement("div");
  formBookButtonsWrapper.classList.add("form-btn-wrapper");
  const formBookSubmit = document.createElement("button");
  formBookSubmit.textContent = "Submit";
  formBookSubmit.classList.add("submit-form-button");
  formBookSubmit.setAttribute("type", "submit");
  const formBookCancel = document.createElement("button");
  formBookCancel.textContent = "Cancel";
  formBookCancel.classList.add("cancel-form-button");
  formBookCancel.setAttribute("type", "button");
  formBookTitle.appendChild(formBookTitleInput);
  formBookTitle.appendChild(formBookTitleErrorPara);
  formBookAuthor.appendChild(formBookAuthorInput);
  formBookAuthor.appendChild(formBookAuthorErrorPara);
  formBookPages.appendChild(formBookPagesInput);
  formBookPages.appendChild(formBookPagesErrorPara);
  formBookRead.appendChild(formBookReadInput);
  formBookButtonsWrapper.appendChild(formBookSubmit);
  formBookButtonsWrapper.appendChild(formBookCancel);
  formDivFormWrapper.appendChild(formBookTitle);
  formDivFormWrapper.appendChild(formBookAuthor);
  formDivFormWrapper.appendChild(formBookPages);
  formDivFormWrapper.appendChild(formBookRead);
  formDivFormWrapper.appendChild(formBookButtonsWrapper);
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
  console.log(_logic__WEBPACK_IMPORTED_MODULE_2__.myLibrary);
  createPage(event);
  document
    .querySelector(".add-book-button")
    .addEventListener("click", _logic__WEBPACK_IMPORTED_MODULE_2__.openForm);
  /*   document
    .querySelector(".submit-form-button")
    .addEventListener("click", addBookToLibrary); */
  document
    .querySelector(".submit-form-button")
    .addEventListener("click", _logic__WEBPACK_IMPORTED_MODULE_2__.submitForm);
  document
    .querySelector(".cancel-form-button")
    .addEventListener("click", _logic__WEBPACK_IMPORTED_MODULE_2__.closeForm);
  (0,_logic__WEBPACK_IMPORTED_MODULE_2__.displayBooks)();
  (0,_logic__WEBPACK_IMPORTED_MODULE_2__.inputValidation)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLEdBQUcsVUFBVSxxQkFBcUIsa0JBQWtCLEdBQUcsVUFBVSw0QkFBNEIsOEJBQThCLEdBQUcsV0FBVyx1QkFBdUIsR0FBRyxvS0FBb0ssa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxZQUFZLGdCQUFnQixrQ0FBa0MsOEJBQThCLEdBQUcsYUFBYSxvQkFBb0IsaUJBQWlCLGtCQUFrQixHQUFHLFVBQVUsbUJBQW1CLGtCQUFrQiwyQkFBMkIsR0FBRyxZQUFZLGdCQUFnQixtQkFBbUIsMkJBQTJCLDhCQUE4QixxQkFBcUIsR0FBRyxjQUFjLHNCQUFzQixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxrQkFBa0IsbUJBQW1CLGdCQUFnQixpQkFBaUIsR0FBRyxtQkFBbUIsMkJBQTJCLG1CQUFtQixnQkFBZ0Isc0JBQXNCLEdBQUcsbUJBQW1CLGdCQUFnQixtQkFBbUIsR0FBRyw4QkFBOEIsa0JBQWtCLG9CQUFvQixjQUFjLGFBQWEscUNBQXFDLEdBQUcsb0JBQW9CLHlDQUF5QyxrQkFBa0IsaUJBQWlCLDJCQUEyQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGdCQUFnQix3QkFBd0Isb0JBQW9CLGNBQWMsR0FBRyxnQkFBZ0IseUNBQXlDLGtCQUFrQixpQkFBaUIsMkJBQTJCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcscUJBQXFCLG9CQUFvQixzQkFBc0IseUNBQXlDLGlCQUFpQixxQkFBcUIsNEJBQTRCLDRCQUE0QixvQkFBb0IsaUJBQWlCLGtCQUFrQixzQkFBc0IsMEJBQTBCLG1CQUFtQix1QkFBdUIsR0FBRyxZQUFZLHdCQUF3QixxQkFBcUIsOEJBQThCLHVCQUF1QixvQkFBb0IsK0dBQStHLDJCQUEyQixtQkFBbUIsb0JBQW9CLHlCQUF5QiwrQ0FBK0MsbUJBQW1CLDRCQUE0QixzQkFBc0IscUJBQXFCLHFCQUFxQixrQkFBa0IsdUJBQXVCLHVCQUF1QiwwQkFBMEIsa0RBQWtELHNCQUFzQiwrQkFBK0Isd0JBQXdCLHVDQUF1QyxvQkFBb0IsR0FBRyxnQkFBZ0IsK0dBQStHLGdDQUFnQyxHQUFHLGdCQUFnQiwwSUFBMEksR0FBRyxpQkFBaUIsd0NBQXdDLCtCQUErQixHQUFHLFlBQVksOEJBQThCLEdBQUcsVUFBVSw4QkFBOEIsR0FBRyxpQkFBaUIsc0JBQXNCLHdCQUF3QixHQUFHLFdBQVcsdUJBQXVCLG1CQUFtQixvQkFBb0IsR0FBRyxjQUFjLHNCQUFzQix3QkFBd0IsZUFBZSxHQUFHLGFBQWEsdUJBQXVCLEdBQUcsMkNBQTJDLGlCQUFpQixHQUFHLHdCQUF3QixzQkFBc0IsdUJBQXVCLEdBQUcsMkRBQTJELHVCQUF1QixlQUFlLHlDQUF5Qyw0QkFBNEIsNEJBQTRCLG1CQUFtQixrQkFBa0Isc0JBQXNCLGlCQUFpQix3QkFBd0IsMEJBQTBCLEdBQUcsdUJBQXVCLGNBQWMsR0FBRyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsYUFBYSxhQUFhLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxhQUFhLGVBQWUsWUFBWSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLGNBQWMsZUFBZSxRQUFRLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLGNBQWMsZUFBZSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxrREFBa0QsNEJBQTRCLDRCQUE0QixzQkFBc0Isd0JBQXdCLE9BQU8sY0FBYyxlQUFlLEdBQUcsVUFBVSxxQkFBcUIsa0JBQWtCLEdBQUcsVUFBVSw0QkFBNEIscUNBQXFDLEdBQUcsV0FBVyx1QkFBdUIsR0FBRyxrQkFBa0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRywyQkFBMkIscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUseUJBQXlCLGdCQUFnQixrQ0FBa0MsdUNBQXVDLFFBQVEsc0JBQXNCLG1CQUFtQixvQkFBb0IsS0FBSyxHQUFHLFVBQVUsbUJBQW1CLGtCQUFrQiwyQkFBMkIsR0FBRyxZQUFZLHlCQUF5QixnQkFBZ0IsbUJBQW1CLDJCQUEyQix1Q0FBdUMscUJBQXFCLFNBQVMsd0JBQXdCLEtBQUssR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsa0JBQWtCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLEdBQUcsbUJBQW1CLHlCQUF5QiwyQkFBMkIsbUJBQW1CLGdCQUFnQixzQkFBc0IsR0FBRyxtQkFBbUIseUJBQXlCLGdCQUFnQixtQkFBbUIsR0FBRyw4QkFBOEIsa0JBQWtCLG9CQUFvQixjQUFjLGFBQWEscUNBQXFDLEdBQUcsb0JBQW9CLHlCQUF5Qix5Q0FBeUMsa0JBQWtCLGlCQUFpQiwyQkFBMkIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxnQkFBZ0IseUJBQXlCLHdCQUF3QixvQkFBb0IsY0FBYyxHQUFHLGdCQUFnQix5QkFBeUIseUNBQXlDLGtCQUFrQixpQkFBaUIsMkJBQTJCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcscUJBQXFCLDZCQUE2Qix5Q0FBeUMsaUJBQWlCLHFCQUFxQiw0QkFBNEIsNEJBQTRCLG9CQUFvQixpQkFBaUIsa0JBQWtCLHNCQUFzQiwwQkFBMEIsbUJBQW1CLHVCQUF1QixHQUFHLFlBQVksd0JBQXdCLHFCQUFxQiw4QkFBOEIsdUJBQXVCLG9CQUFvQixvSEFBb0gsMkJBQTJCLG1CQUFtQixvQkFBb0IseUJBQXlCLCtDQUErQyxtQkFBbUIsNEJBQTRCLHNCQUFzQixxQkFBcUIscUJBQXFCLGtCQUFrQix1QkFBdUIsdUJBQXVCLDBCQUEwQixrREFBa0Qsc0JBQXNCLCtCQUErQix3QkFBd0IsdUNBQXVDLG9CQUFvQixhQUFhLHdIQUF3SCxrQ0FBa0MsS0FBSyxhQUFhLG1KQUFtSixLQUFLLGNBQWMsMENBQTBDLGlDQUFpQyxLQUFLLEdBQUcsWUFBWSxtQ0FBbUMsR0FBRyxVQUFVLGlDQUFpQyxHQUFHLGlCQUFpQiwrQkFBK0IsR0FBRyxXQUFXLHVCQUF1QixtQkFBbUIsb0JBQW9CLEdBQUcsY0FBYywrQkFBK0IsZUFBZSxHQUFHLGFBQWEsdUJBQXVCLEdBQUcsbURBQW1ELGlCQUFpQixHQUFHLHNCQUFzQixzQkFBc0IsdUJBQXVCLEdBQUcscUJBQXFCLHlCQUF5Qix1QkFBdUIsZUFBZSx5Q0FBeUMsNEJBQTRCLDRCQUE0QixtQkFBbUIsa0JBQWtCLHNCQUFzQixpQkFBaUIsd0JBQXdCLDBCQUEwQixHQUFHLG9CQUFvQiw0QkFBNEIsR0FBRyxxQkFBcUIsNEJBQTRCLEdBQUcsb0JBQW9CLDRCQUE0QixHQUFHLHVCQUF1Qix5QkFBeUIsY0FBYyxHQUFHLHFCQUFxQjtBQUNyeVU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE0STtBQUM1STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSXNGO0FBQzlHLE9BQU8saUVBQWUsNEhBQU8sSUFBSSxtSUFBYyxHQUFHLG1JQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFQc0I7QUFDQTtBQUNnQjtBQVlyQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx3Q0FBVTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwyREFBbUI7QUFDckIsY0FBYyw2Q0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNENBQVE7QUFDdkM7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsK0JBQStCLDhDQUFVO0FBQ3pDO0FBQ0E7QUFDQSwrQkFBK0IsNkNBQVM7QUFDeEMsRUFBRSxvREFBWTtBQUNkLEVBQUUsdURBQWU7QUFDakI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcExBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7QUNBa0M7O0FBRWxDLDhDQUE4QywyQ0FBVSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tbGlicmFyeS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbi5ibHVyIHtcXG4gIGZpbHRlcjogYmx1cigxcmVtKTtcXG59XFxuXFxuLmZvcm0tYnRuLXdyYXBwZXIsIC5ib29rLWNhcmQtcGFnZXMsIC5ib29rLWNhcmQtYXV0aG9yLCAuYm9vay1jYXJkLXRpdGxlLCAuYm9vay1jYXJkLCAuYm9vay1saXN0LCAuYWRkLWJvb2stZm9ybSwgLmFkZC1ib29rLWRpdiwgLm1haW4td3JhcHBlciwgZm9vdGVyLCBoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQwNTA1O1xcbn1cXG5oZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQwNTA1O1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuZm9vdGVyIGRpdiB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuZm9vdGVyID4gKiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5naXRodWItbG9nbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubWFpbi13cmFwcGVyIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5hZGQtYm9vay1kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDJyZW0gMDtcXG59XFxuXFxuLmFkZC1ib29rLWZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uYWRkLWJvb2stZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMTksIDI0NSk7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbi5ib29rLWxpc3Qge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmJvb2stY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMTksIDI0NSk7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbi5ib29rLWNhcmQtcmVhZCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMzByZW07XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWluLXdpZHRoOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDQ1LCAzNSwgNjYsIDAuNCkgMCAycHggNHB4LCByZ2JhKDQ1LCAzNSwgNjYsIDAuMykgMCA3cHggMTNweCAtM3B4LCAjZDZkNmU3IDAgLTNweCAwIGluc2V0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjMzYzOTVhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmb250LWZhbWlseTogXFxcIkpldEJyYWlucyBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cywgdHJhbnNmb3JtIDAuMTVzO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3aWxsLWNoYW5nZTogYm94LXNoYWRvdywgdHJhbnNmb3JtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogcmdiYSg0NSwgMzUsIDY2LCAwLjQpIDAgNHB4IDhweCwgcmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwgI2Q2ZDZlNyAwIC0zcHggMCBpbnNldDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG59XFxuYnV0dG9uOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6ICNkNmQ2ZTcgMCAwIDAgMS41cHggaW5zZXQsIHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDJweCA0cHgsIHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsICNkNmQ2ZTcgMCAtM3B4IDAgaW5zZXQ7XFxufVxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogI2Q2ZDZlNyAwIDNweCA3cHggaW5zZXQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG59XFxuXFxuLmdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OGU3Nzg7XFxufVxcblxcbi5yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzNjE0ODtcXG59XFxuXFxuLnNtYWxsLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmVycm9yLXAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxuaW5wdXRbdHlwZT1udW1iZXJdIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG59XFxuXFxuaW5wdXQuaW52YWxpZC1kYXRhIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgb3V0bGluZS1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYm9vay1jYXJkLXBhZ2VzLCAuYm9vay1jYXJkLWF1dGhvciwgLmJvb2stY2FyZC10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNzAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmZvcm0tYnRuLXdyYXBwZXIge1xcbiAgZ2FwOiAycmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFMRjs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EseUJBbEJjO0FBYWhCOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTEY7O0FBV0E7RUFFRSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFyQ2dCO0FBNEJsQjtBQVVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBUko7O0FBWUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBVEY7O0FBWUE7RUFFRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBdkRnQjtFQXdEaEIsZ0JBQUE7QUFWRjtBQVdFO0VBQ0UsaUJBQUE7QUFUSjs7QUFhQTtFQUNFLGVBQUE7QUFWRjs7QUFhQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVZGOztBQWFBO0VBRUUsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBWEY7O0FBY0E7RUFFRSxXQUFBO0VBQ0EsY0FBQTtBQVpGOztBQWVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0FBWkY7O0FBZUE7RUFFRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWJGOztBQWdCQTtFQUVFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFkRjs7QUFpQkE7RUFFRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWZGOztBQWtCQTtFQTlGRSxlQStGbUI7RUE5Rm5CLGlCQThGbUI7RUFDbkIsb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWRGOztBQWlCQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBHQUFBO0VBRUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUFmRjtBQWdCRTtFQUNFLDBHQUFBO0VBRUEsMkJBQUE7QUFmSjtBQWlCRTtFQUNFLHFJQUFBO0FBZko7QUFrQkU7RUFDRSxtQ0FBQTtFQUNBLDBCQUFBO0FBaEJKOztBQW9CQTtFQUNFLHlCQXJMWTtBQW9LZDs7QUFvQkE7RUFDRSx5QkExTFU7QUF5S1o7O0FBb0JBO0VBaktFLGlCQWtLbUI7RUFqS25CLG1CQWlLbUI7QUFoQnJCOztBQW1CQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFoQkY7O0FBbUJBO0VBM0tFLGlCQTRLbUI7RUEzS25CLG1CQTJLbUI7RUFDbkIsVUFBQTtBQWZGOztBQWtCQTtFQUNFLGtCQUFBO0FBZkY7O0FBa0JBOztFQUVFLFlBQUE7QUFmRjs7QUFpQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBZEY7O0FBaUJBO0VBRUUsa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBZkY7O0FBMkJBO0VBRUUsU0FBQTtBQXpCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYm9keS1iZy1jb2xvcjogI2YyZjJmMjtcXG4kaGVhZGVyLWJnLWNvbG9yOiAjYzQwNTA1O1xcbiRmb290ZXItYmctY29sb3I6ICNjNDA1MDU7XFxuJHJlZC1jb2xvcjogI2YzNjE0ODtcXG4kZ3JlZW4tY29sb3I6ICM3OGU3Nzg7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHktYmctY29sb3I7XFxufVxcblxcbi5ibHVyIHtcXG4gIGZpbHRlcjogYmx1cigxcmVtKTtcXG59XFxuXFxuJWZsZXgtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbkBtaXhpbiBmb250LXNpemUoJHNpemUpIHtcXG4gIGZvbnQtc2l6ZTogJHNpemU7XFxuICBsaW5lLWhlaWdodDogJHNpemU7XFxufVxcbmhlYWRlciB7XFxuICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWJnLWNvbG9yO1xcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb290ZXItYmctY29sb3I7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgZGl2IHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICB9XFxufVxcblxcbmZvb3RlciA+ICoge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZ2l0aHViLWxvZ28ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLm1haW4td3JhcHBlciB7XFxuICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5hZGQtYm9vay1kaXYge1xcbiAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMnJlbSAwO1xcbn1cXG5cXG4uYWRkLWJvb2stZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5hZGQtYm9vay1mb3JtIHtcXG4gIEBleHRlbmQgJWZsZXgtY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjE5LCAyNDUpO1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4uYm9vay1saXN0IHtcXG4gIEBleHRlbmQgJWZsZXgtY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmJvb2stY2FyZCB7XFxuICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDIxOSwgMjQ1KTtcXG4gIGhlaWdodDogNDByZW07XFxuICB3aWR0aDogMjVyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLmJvb2stY2FyZC1yZWFkIHtcXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgzcmVtKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMzByZW07XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWluLXdpZHRoOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDQ1LCAzNSwgNjYsIDAuNCkgMCAycHggNHB4LFxcbiAgICByZ2JhKDQ1LCAzNSwgNjYsIDAuMykgMCA3cHggMTNweCAtM3B4LCAjZDZkNmU3IDAgLTNweCAwIGluc2V0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjMzYzOTVhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmb250LWZhbWlseTogXFxcIkpldEJyYWlucyBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cywgdHJhbnNmb3JtIDAuMTVzO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3aWxsLWNoYW5nZTogYm94LXNoYWRvdywgdHJhbnNmb3JtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgJjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDRweCA4cHgsXFxuICAgICAgcmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwgI2Q2ZDZlNyAwIC0zcHggMCBpbnNldDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbiAgfVxcbiAgJjpmb2N1cyB7XFxuICAgIGJveC1zaGFkb3c6ICNkNmQ2ZTcgMCAwIDAgMS41cHggaW5zZXQsIHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDJweCA0cHgsXFxuICAgICAgcmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwgI2Q2ZDZlNyAwIC0zcHggMCBpbnNldDtcXG4gIH1cXG4gICY6YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogI2Q2ZDZlNyAwIDNweCA3cHggaW5zZXQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbiAgfVxcbn1cXG5cXG4uZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLWNvbG9yO1xcbn1cXG5cXG4ucmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRyZWQtY29sb3I7XFxufVxcblxcbi5zbWFsbC10ZXh0IHtcXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgxLjVyZW0pO1xcbn1cXG5cXG5sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmVycm9yLXAge1xcbiAgQGluY2x1ZGUgZm9udC1zaXplKDEuNXJlbSk7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG59XFxuaW5wdXQuaW52YWxpZC1kYXRhIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgb3V0bGluZS1jb2xvcjogcmVkO1xcbn1cXG5cXG4lYm9vay1jYXJkLWluZm8ge1xcbiAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNzAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuLmJvb2stY2FyZC10aXRsZSB7XFxuICBAZXh0ZW5kICVib29rLWNhcmQtaW5mbztcXG59XFxuLmJvb2stY2FyZC1hdXRob3Ige1xcbiAgQGV4dGVuZCAlYm9vay1jYXJkLWluZm87XFxufVxcbi5ib29rLWNhcmQtcGFnZXMge1xcbiAgQGV4dGVuZCAlYm9vay1jYXJkLWluZm87XFxufVxcblxcbi5mb3JtLWJ0bi13cmFwcGVyIHtcXG4gIEBleHRlbmQgJWZsZXgtY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQge1xuICBhZGRUb0xvY2FsU3RvcmFnZSxcbiAgZ2V0RnJvbUxvY2FsU3RvcmFnZSxcbiAgY2xlYXJMb2NhbFN0b3JhZ2UsXG4gIG9wZW5Gb3JtLFxuICBjbG9zZUZvcm0sXG4gIGFkZEJvb2tUb0xpYnJhcnksXG4gIGRpc3BsYXlCb29rcyxcbiAgbXlMaWJyYXJ5LFxuICBhZGRTb21lQm9va3MsXG4gIHN1Ym1pdEZvcm0sXG4gIGlucHV0VmFsaWRhdGlvbixcbn07XG5sZXQgbXlMaWJyYXJ5ID0gW107XG5cbmNsYXNzIEJvb2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgYXV0aG9yLCBwYWdlcywgcmVhZCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcbiAgICB0aGlzLnBhZ2VzID0gcGFnZXM7XG4gICAgdGhpcy5yZWFkID0gcmVhZDtcbiAgfVxufVxuXG5jb25zdCBhZGRTb21lQm9va3MgPSAoKSA9PiB7XG4gIGxldCBib29rO1xuICBib29rID0gbmV3IEJvb2soXCJUaGUgV2lzZG9tIE9mIENyb3dkc1wiLCBcIkpvZSBBYmVyY3JvbWJpZVwiLCBcIjUyOFwiLCBmYWxzZSk7XG4gIG15TGlicmFyeS5wdXNoKGJvb2spO1xuICBib29rID0gbmV3IEJvb2soXCJBIEdhbWUgb2YgVGhyb25lc1wiLCBcIkdlb3JnZSBSLlIuIE1hcnRpblwiLCBcIjcyMFwiLCB0cnVlKTtcbiAgbXlMaWJyYXJ5LnB1c2goYm9vayk7XG4gIGFkZFRvTG9jYWxTdG9yYWdlKCk7XG59O1xuXG5jb25zdCBhZGRCb29rVG9MaWJyYXJ5ID0gKCkgPT4ge1xuICBpZiAobXlMaWJyYXJ5ID09PSBudWxsKSB7XG4gICAgbXlMaWJyYXJ5ID0gW107XG4gIH1cbiAgbGV0IGJvb2s7XG4gIGJvb2sgPSBuZXcgQm9vayhcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stdGl0bGVcIikudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLWF1dGhvclwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stcGFnZXNcIikudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLXJlYWRcIikuY2hlY2tlZFxuICApO1xuXG4gIG15TGlicmFyeS5wdXNoKGJvb2spO1xuICBjbG9zZUZvcm0oKTtcbiAgcmVzZXRCb29rTGlzdCgpO1xuICBkaXNwbGF5Qm9va3MoKTtcbiAgYWRkVG9Mb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IHJlc2V0Qm9va0xpc3QgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9vay1saXN0XCIpLmlubmVySFRNTCA9IFwiXCI7XG59O1xuXG5jb25zdCBkaXNwbGF5Qm9va3MgPSAoKSA9PiB7XG4gIGlmIChteUxpYnJhcnkgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG15TGlicmFyeS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGJvb2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZFRpdGxlU21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJvb2tDYXJkQXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZEF1dGhvclNtYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZFBhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZFBhZ2VzU21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJvb2tDYXJkUmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm9va0NhcmREZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgYm9va0NhcmQuY2xhc3NMaXN0LmFkZChcImJvb2stY2FyZFwiKTtcbiAgICBib29rQ2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJib29rLWNhcmQtdGl0bGVcIik7XG4gICAgYm9va0NhcmRUaXRsZVNtYWxsLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC10ZXh0XCIpO1xuICAgIGJvb2tDYXJkQXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJib29rLWNhcmQtYXV0aG9yXCIpO1xuICAgIGJvb2tDYXJkQXV0aG9yU21hbGwuY2xhc3NMaXN0LmFkZChcInNtYWxsLXRleHRcIik7XG4gICAgYm9va0NhcmRQYWdlcy5jbGFzc0xpc3QuYWRkKFwiYm9vay1jYXJkLXBhZ2VzXCIpO1xuICAgIGJvb2tDYXJkUGFnZXNTbWFsbC5jbGFzc0xpc3QuYWRkKFwic21hbGwtdGV4dFwiKTtcbiAgICBib29rQ2FyZFJlYWQuY2xhc3NMaXN0LmFkZChcImJvb2stY2FyZC1yZWFkXCIpO1xuXG4gICAgYm9va0NhcmQuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIiwgaSk7XG5cbiAgICBib29rQ2FyZFRpdGxlLnRleHRDb250ZW50ID0gbXlMaWJyYXJ5W2ldLnRpdGxlO1xuICAgIGJvb2tDYXJkVGl0bGVTbWFsbC50ZXh0Q29udGVudCA9IFwidGl0bGVcIjtcbiAgICBib29rQ2FyZEF1dGhvci50ZXh0Q29udGVudCA9IG15TGlicmFyeVtpXS5hdXRob3I7XG4gICAgYm9va0NhcmRBdXRob3JTbWFsbC50ZXh0Q29udGVudCA9IFwiYXV0aG9yXCI7XG4gICAgYm9va0NhcmRQYWdlcy50ZXh0Q29udGVudCA9IG15TGlicmFyeVtpXS5wYWdlcztcbiAgICBib29rQ2FyZFBhZ2VzU21hbGwudGV4dENvbnRlbnQgPSBcInBhZ2VzXCI7XG4gICAgaWYgKG15TGlicmFyeVtpXS5yZWFkKSB7XG4gICAgICBib29rQ2FyZFJlYWQudGV4dENvbnRlbnQgPSBcIlJlYWRcIjtcbiAgICAgIGJvb2tDYXJkUmVhZC5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvb2tDYXJkUmVhZC50ZXh0Q29udGVudCA9IFwiTm90IHJlYWRcIjtcbiAgICAgIGJvb2tDYXJkUmVhZC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgIH1cbiAgICBib29rQ2FyZERlbGV0ZS50ZXh0Q29udGVudCA9IFwiRGVsZXRlIGJvb2tcIjtcblxuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkVGl0bGUpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkVGl0bGVTbWFsbCk7XG4gICAgYm9va0NhcmQuYXBwZW5kQ2hpbGQoYm9va0NhcmRBdXRob3IpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkQXV0aG9yU21hbGwpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkUGFnZXMpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkUGFnZXNTbWFsbCk7XG4gICAgYm9va0NhcmQuYXBwZW5kQ2hpbGQoYm9va0NhcmRSZWFkKTtcbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChib29rQ2FyZERlbGV0ZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib29rLWxpc3RcIikuYXBwZW5kQ2hpbGQoYm9va0NhcmQpO1xuXG4gICAgYm9va0NhcmREZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZUJvb2spO1xuICAgIGJvb2tDYXJkUmVhZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlUmVhZCk7XG4gIH1cbn07XG5cbmNvbnN0IG9wZW5Gb3JtID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKS5jbGFzc0xpc3QuYWRkKFwiYmx1clwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYm9vay1mb3JtLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufTtcblxuY29uc3QgY2xvc2VGb3JtID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1clwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYm9vay1mb3JtLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNsZWFyRm9ybUlucHV0cygpO1xufTtcblxuY29uc3QgZGVsZXRlQm9vayA9IChlKSA9PiB7XG4gIGxldCBhdHRyaWJ1dGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbnVtYmVyXCIpO1xuICBteUxpYnJhcnkuc3BsaWNlKGF0dHJpYnV0ZSwgMSk7XG4gIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gIHJlc2V0Qm9va0xpc3QoKTtcbiAgZGlzcGxheUJvb2tzKCk7XG4gIGFkZFRvTG9jYWxTdG9yYWdlKCk7XG59O1xuXG5jb25zdCB0b2dnbGVSZWFkID0gKGUpID0+IHtcbiAgbGV0IGF0dHJpYnV0ZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIik7XG4gIGlmIChteUxpYnJhcnlbYXR0cmlidXRlXS5yZWFkKSB7XG4gICAgbXlMaWJyYXJ5W2F0dHJpYnV0ZV0ucmVhZCA9IGZhbHNlO1xuICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJOb3QgcmVhZFwiO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJncmVlblwiKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICB9IGVsc2Uge1xuICAgIG15TGlicmFyeVthdHRyaWJ1dGVdLnJlYWQgPSB0cnVlO1xuICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJSZWFkXCI7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInJlZFwiKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5cIik7XG4gIH1cbiAgYWRkVG9Mb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IGFkZFRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15TGlicmFyeUxvY2FsXCIsIEpTT04uc3RyaW5naWZ5KG15TGlicmFyeSkpO1xufTtcblxuY29uc3QgZ2V0RnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgbXlMaWJyYXJ5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15TGlicmFyeUxvY2FsXCIpKTtcbn07XG5cbmNvbnN0IGNsZWFyTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbn07XG5cbmNvbnN0IGNsZWFyRm9ybUlucHV0cyA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLXRpdGxlXCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLWF1dGhvclwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1wYWdlc1wiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1yZWFkXCIpLmNoZWNrZWQgPSBmYWxzZTtcbn07XG5cbmNvbnN0IHN1Ym1pdEZvcm0gPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay10aXRsZVwiKTtcbiAgY29uc3QgaW5wdXRBdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stYXV0aG9yXCIpO1xuICBjb25zdCBpbnB1dFBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLXBhZ2VzXCIpO1xuXG4gIC8qIGlmIChpbnB1dFRpdGxlLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgY29uc29sZS5sb2coXCJ0aXRsZSBva1wiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLWVycm9yLXNwYW5cIikudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUtZXJyb3Itc3BhblwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwidGl0bGUgZXJyb3JcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1lcnJvci1zcGFuXCIpLnRleHRDb250ZW50ID0gXCJTVFVQSURcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLWVycm9yLXNwYW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuICBpZiAoaW5wdXRBdXRob3IudmFsaWRpdHkudmFsaWQpIHtcbiAgICBjb25zb2xlLmxvZyhcImF1dGhvciBva1wiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1dGhvci1lcnJvci1zcGFuXCIpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1dGhvci1lcnJvci1zcGFuXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJhdXRob3IgZXJyb3JcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdXRob3ItZXJyb3Itc3BhblwiKS50ZXh0Q29udGVudCA9IFwiU1RVUElEXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhdXRob3ItZXJyb3Itc3BhblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG4gIGlmIChpbnB1dFBhZ2VzLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgY29uc29sZS5sb2coXCJwYWdlcyBva1wiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2VzLWVycm9yLXNwYW5cIikudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZXMtZXJyb3Itc3BhblwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwicGFnZXMgZXJyb3JcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlcy1lcnJvci1zcGFuXCIpLnRleHRDb250ZW50ID0gXCJTVFVQSURcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2VzLWVycm9yLXNwYW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfSAqL1xuICBpZiAoXG4gICAgaW5wdXRUaXRsZS52YWxpZGl0eS52YWxpZCAmJlxuICAgIGlucHV0QXV0aG9yLnZhbGlkaXR5LnZhbGlkICYmXG4gICAgaW5wdXRQYWdlcy52YWxpZGl0eS52YWxpZFxuICApIHtcbiAgICBhZGRCb29rVG9MaWJyYXJ5KCk7XG4gIH1cbn07XG5cbmNvbnN0IGlucHV0VmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay10aXRsZVwiKTtcbiAgY29uc3QgaW5wdXRBdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stYXV0aG9yXCIpO1xuICBjb25zdCBpbnB1dFBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLXBhZ2VzXCIpO1xuXG4gIGNvbnN0IGJvb2tUaXRsZVZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKGlucHV0VGl0bGUudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidGl0bGUgb2tcIik7XG4gICAgICBpbnB1dFRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkLWRhdGFcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLWVycm9yLXBcIikudGV4dENvbnRlbnQgPSBcIkV2ZXJ5dGhpbmcgT0shXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLWVycm9yLXBcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9IGVsc2UgaWYgKGlucHV0VGl0bGUudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRpdGxlIGVycm9yXCIpO1xuICAgICAgaW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZC1kYXRhXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1lcnJvci1wXCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgXCJZb3UgZm9yZ290IGJvb2sgdGl0bGVcIjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUtZXJyb3ItcFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcInRpdGxlIGVycm9yXCIpO1xuICAgICAgaW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZC1kYXRhXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1lcnJvci1wXCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgXCJXaGF0IGlzIHRoaXMgZXJyb3JcIjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUtZXJyb3ItcFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgICBpZiAoaW5wdXRUaXRsZS52YWx1ZS5sZW5ndGggPT09IDMwKSB7XG4gICAgICBpbnB1dFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkLWRhdGFcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLWVycm9yLXBcIikudGV4dENvbnRlbnQgPVxuICAgICAgICBcIk1heGltdW0gMzAgY2hhcmFjdGVyc1wiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1lcnJvci1wXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuICB9O1xuXG4gIGlucHV0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGJvb2tUaXRsZVZhbGlkYXRpb24pO1xuICBpbnB1dFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBib29rVGl0bGVWYWxpZGF0aW9uKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLWF1dGhvclwiKS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwia2VrMlwiKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1wYWdlc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwia2VrM1wiKTtcbiAgfSk7XG59O1xuIiwiZXhwb3J0IHsgcmVuZGVyUGFnZSB9O1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgR2l0aHViTG9nbyBmcm9tIFwiLi9naXRodWIucG5nXCI7XG5pbXBvcnQge1xuICBnZXRGcm9tTG9jYWxTdG9yYWdlLFxuICBvcGVuRm9ybSxcbiAgY2xvc2VGb3JtLFxuICBhZGRCb29rVG9MaWJyYXJ5LFxuICBkaXNwbGF5Qm9va3MsXG4gIG15TGlicmFyeSxcbiAgY2xlYXJMb2NhbFN0b3JhZ2UsXG4gIGFkZFNvbWVCb29rcyxcbiAgc3VibWl0Rm9ybSxcbiAgaW5wdXRWYWxpZGF0aW9uLFxufSBmcm9tIFwiLi9sb2dpY1wiO1xuXG5jb25zdCBjcmVhdGVXcmFwcGVyID0gKCkgPT4ge1xuICBjb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLXdyYXBwZXJcIik7XG5cbiAgcmV0dXJuIG1haW5XcmFwcGVyO1xufTtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkxpYnJhcnlcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuICByZXR1cm4gaGVhZGVyO1xufTtcblxuY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvcm1EaXYuY2xhc3NMaXN0LmFkZChcImFkZC1ib29rLWZvcm0tY29udGFpbmVyXCIpO1xuICBjb25zdCBmb3JtRGl2Rm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybURpdkZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJhZGQtYm9vay1mb3JtXCIpO1xuICBjb25zdCBmb3JtQm9va1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBmb3JtQm9va1RpdGxlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmb3JtQm9va1RpdGxlUGFyYS50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgZm9ybUJvb2tUaXRsZS5hcHBlbmRDaGlsZChmb3JtQm9va1RpdGxlUGFyYSk7XG4gIGNvbnN0IGZvcm1Cb29rVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZm9ybUJvb2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBmb3JtQm9va1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJib29rLXRpdGxlXCIpO1xuICBmb3JtQm9va1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImJvb2stdGl0bGVcIik7XG4gIGZvcm1Cb29rVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIzMFwiKTtcbiAgZm9ybUJvb2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiMTk4NFwiKTtcbiAgZm9ybUJvb2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBjb25zdCBmb3JtQm9va1RpdGxlRXJyb3JQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvcm1Cb29rVGl0bGVFcnJvclBhcmEuY2xhc3NMaXN0LmFkZChcImVycm9yLXBcIiwgXCJoaWRkZW5cIik7XG4gIGZvcm1Cb29rVGl0bGVFcnJvclBhcmEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZS1lcnJvci1wXCIpO1xuICBmb3JtQm9va1RpdGxlRXJyb3JQYXJhLnRleHRDb250ZW50ID0gXCJFdmVyeXRoaW5nIE9LIVwiO1xuICBjb25zdCBmb3JtQm9va0F1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZm9ybUJvb2tBdXRob3JQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvcm1Cb29rQXV0aG9yUGFyYS50ZXh0Q29udGVudCA9IFwiQXV0aG9yXCI7XG4gIGZvcm1Cb29rQXV0aG9yLmFwcGVuZENoaWxkKGZvcm1Cb29rQXV0aG9yUGFyYSk7XG4gIGZvcm1Cb29rQXV0aG9yLnRleHRDb250ZW50ID0gXCJBdXRob3JcIjtcbiAgY29uc3QgZm9ybUJvb2tBdXRob3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZm9ybUJvb2tBdXRob3JJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgZm9ybUJvb2tBdXRob3JJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJvb2stYXV0aG9yXCIpO1xuICBmb3JtQm9va0F1dGhvcklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJib29rLWF1dGhvclwiKTtcbiAgZm9ybUJvb2tBdXRob3JJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIzMFwiKTtcbiAgZm9ybUJvb2tBdXRob3JJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkdlb3JnZSBPcndlbGxcIik7XG4gIGZvcm1Cb29rQXV0aG9ySW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIGNvbnN0IGZvcm1Cb29rQXV0aG9yRXJyb3JQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvcm1Cb29rQXV0aG9yRXJyb3JQYXJhLmNsYXNzTGlzdC5hZGQoXCJlcnJvci1wXCIsIFwiaGlkZGVuXCIpO1xuICBmb3JtQm9va0F1dGhvckVycm9yUGFyYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImF1dGhvci1lcnJvci1wXCIpO1xuICBmb3JtQm9va0F1dGhvckVycm9yUGFyYS50ZXh0Q29udGVudCA9IFwiRXZlcnl0aGluZyBPSyFcIjtcbiAgY29uc3QgZm9ybUJvb2tQYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZm9ybUJvb2tQYWdlc1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9ybUJvb2tQYWdlc1BhcmEudGV4dENvbnRlbnQgPSBcIlBhZ2VzXCI7XG4gIGZvcm1Cb29rUGFnZXMuYXBwZW5kQ2hpbGQoZm9ybUJvb2tQYWdlc1BhcmEpO1xuICBmb3JtQm9va1BhZ2VzLnRleHRDb250ZW50ID0gXCJQYWdlc1wiO1xuICBjb25zdCBmb3JtQm9va1BhZ2VzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGZvcm1Cb29rUGFnZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpO1xuICBmb3JtQm9va1BhZ2VzSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJib29rLXBhZ2VzXCIpO1xuICBmb3JtQm9va1BhZ2VzSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImJvb2stcGFnZXNcIik7XG4gIGZvcm1Cb29rUGFnZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIwXCIpO1xuICBmb3JtQm9va1BhZ2VzSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiOTk5OVwiKTtcbiAgZm9ybUJvb2tQYWdlc0lucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiMzI4XCIpO1xuICBmb3JtQm9va1BhZ2VzSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIGNvbnN0IGZvcm1Cb29rUGFnZXNFcnJvclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9ybUJvb2tQYWdlc0Vycm9yUGFyYS5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItcFwiLCBcImhpZGRlblwiKTtcbiAgZm9ybUJvb2tQYWdlc0Vycm9yUGFyYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBhZ2VzLWVycm9yLXBcIik7XG4gIGZvcm1Cb29rUGFnZXNFcnJvclBhcmEudGV4dENvbnRlbnQgPSBcIkV2ZXJ5dGhpbmcgT0shXCI7XG4gIGNvbnN0IGZvcm1Cb29rUmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZm9ybUJvb2tSZWFkLnRleHRDb250ZW50ID0gXCJSZWFkXCI7XG4gIGNvbnN0IGZvcm1Cb29rUmVhZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBmb3JtQm9va1JlYWRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGZvcm1Cb29rUmVhZElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYm9vay1yZWFkXCIpO1xuICBmb3JtQm9va1JlYWRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiYm9vay1yZWFkXCIpO1xuICBjb25zdCBmb3JtQm9va0J1dHRvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybUJvb2tCdXR0b25zV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idG4td3JhcHBlclwiKTtcbiAgY29uc3QgZm9ybUJvb2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBmb3JtQm9va1N1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gIGZvcm1Cb29rU3VibWl0LmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtZm9ybS1idXR0b25cIik7XG4gIGZvcm1Cb29rU3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGNvbnN0IGZvcm1Cb29rQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZm9ybUJvb2tDYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBmb3JtQm9va0NhbmNlbC5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWZvcm0tYnV0dG9uXCIpO1xuICBmb3JtQm9va0NhbmNlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBmb3JtQm9va1RpdGxlLmFwcGVuZENoaWxkKGZvcm1Cb29rVGl0bGVJbnB1dCk7XG4gIGZvcm1Cb29rVGl0bGUuYXBwZW5kQ2hpbGQoZm9ybUJvb2tUaXRsZUVycm9yUGFyYSk7XG4gIGZvcm1Cb29rQXV0aG9yLmFwcGVuZENoaWxkKGZvcm1Cb29rQXV0aG9ySW5wdXQpO1xuICBmb3JtQm9va0F1dGhvci5hcHBlbmRDaGlsZChmb3JtQm9va0F1dGhvckVycm9yUGFyYSk7XG4gIGZvcm1Cb29rUGFnZXMuYXBwZW5kQ2hpbGQoZm9ybUJvb2tQYWdlc0lucHV0KTtcbiAgZm9ybUJvb2tQYWdlcy5hcHBlbmRDaGlsZChmb3JtQm9va1BhZ2VzRXJyb3JQYXJhKTtcbiAgZm9ybUJvb2tSZWFkLmFwcGVuZENoaWxkKGZvcm1Cb29rUmVhZElucHV0KTtcbiAgZm9ybUJvb2tCdXR0b25zV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtQm9va1N1Ym1pdCk7XG4gIGZvcm1Cb29rQnV0dG9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybUJvb2tDYW5jZWwpO1xuICBmb3JtRGl2Rm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybUJvb2tUaXRsZSk7XG4gIGZvcm1EaXZGb3JtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtQm9va0F1dGhvcik7XG4gIGZvcm1EaXZGb3JtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtQm9va1BhZ2VzKTtcbiAgZm9ybURpdkZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm1Cb29rUmVhZCk7XG4gIGZvcm1EaXZGb3JtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtQm9va0J1dHRvbnNXcmFwcGVyKTtcbiAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtRGl2Rm9ybVdyYXBwZXIpO1xuXG4gIHJldHVybiBmb3JtRGl2O1xufTtcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBtYWluQWRkQm9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5BZGRCb29rLmNsYXNzTGlzdC5hZGQoXCJhZGQtYm9vay1kaXZcIik7XG4gIGNvbnN0IG1haW5BZGRCb29rQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWFpbkFkZEJvb2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC1ib29rLWJ1dHRvblwiKTtcbiAgbWFpbkFkZEJvb2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBib29rXCI7XG4gIGNvbnN0IG1haW5Cb29rTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Cb29rTGlzdC5jbGFzc0xpc3QuYWRkKFwiYm9vay1saXN0XCIpO1xuICBtYWluQWRkQm9vay5hcHBlbmRDaGlsZChtYWluQWRkQm9va0J1dHRvbik7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbkFkZEJvb2spO1xuICBtYWluLmFwcGVuZENoaWxkKG1haW5Cb29rTGlzdCk7XG5cbiAgcmV0dXJuIG1haW47XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY29uc3QgZm9vdGVyTGlua0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGZvb3RlckxpbmtJbWcuY2xhc3NMaXN0LmFkZChcImdpdGh1Yi1sb2dvXCIpO1xuICBmb290ZXJMaW5rSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBHaXRodWJMb2dvKTtcbiAgZm9vdGVyRGl2LnRleHRDb250ZW50ID0gXCJEZXZlbG9wZWQgYnkgbWlyb3NsYXYtemFyZW5rb3ZcIjtcbiAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL21pcm9zbGF2LXphcmVua292XCIpO1xuICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJub29wZW5lciBub3JlZmVycmVyXCIpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckxpbmspO1xuICBmb290ZXJMaW5rLmFwcGVuZENoaWxkKGZvb3RlckxpbmtJbWcpO1xuXG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5jb25zdCBjcmVhdGVQYWdlID0gKGV2ZW50KSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcHBlcigpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKS5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybSgpKTtcbn07XG5cbmNvbnN0IHJlbmRlclBhZ2UgPSAoZXZlbnQpID0+IHtcbiAgZ2V0RnJvbUxvY2FsU3RvcmFnZSgpO1xuICBjb25zb2xlLmxvZyhteUxpYnJhcnkpO1xuICBjcmVhdGVQYWdlKGV2ZW50KTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5hZGQtYm9vay1idXR0b25cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Gb3JtKTtcbiAgLyogICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1mb3JtLWJ1dHRvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkQm9va1RvTGlicmFyeSk7ICovXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWZvcm0tYnV0dG9uXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRGb3JtKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtZm9ybS1idXR0b25cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybSk7XG4gIGRpc3BsYXlCb29rcygpO1xuICBpbnB1dFZhbGlkYXRpb24oKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL3VpXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHJlbmRlclBhZ2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9