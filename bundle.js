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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  height: 100vh;\n}\n\nbody {\n  font-family: sans-serif;\n  background-color: #f2f2f2;\n}\n\n.blur {\n  filter: blur(1rem);\n}\n\n.form-btn-wrapper, .book-card-pages, .book-card-author, .book-card-title, .book-card, .book-list, .add-book-form, .add-book-div, .main-wrapper, footer, header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nheader {\n  width: 100%;\n  border-bottom: 1px solid gray;\n  background-color: #c40505;\n}\nheader h1 {\n  font-size: 5rem;\n  margin: 1rem;\n  padding: 1rem;\n}\n\nmain {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  width: 100%;\n  flex-shrink: 0;\n  word-break: break-word;\n  background-color: #c40505;\n  margin-top: 2rem;\n}\nfooter div {\n  font-size: 1.6rem;\n}\n\nfooter > * {\n  padding: 0.5rem;\n}\n\n.github-logo {\n  display: block;\n  width: 32px;\n  height: auto;\n}\n\n.main-wrapper {\n  flex-direction: column;\n  flex: 0 0 auto;\n  width: 100%;\n  min-height: 100vh;\n}\n\n.add-book-div {\n  width: 100%;\n  margin: 2rem 0;\n}\n\n.add-book-form-container {\n  display: none;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.add-book-form {\n  background-color: rgb(204, 219, 245);\n  height: 40rem;\n  width: 25rem;\n  flex-direction: column;\n  padding: 2rem;\n  border: 3px solid black;\n  border-radius: 2rem;\n}\n\n.book-list {\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n\n.book-card {\n  background-color: rgb(204, 219, 245);\n  height: 40rem;\n  width: 25rem;\n  flex-direction: column;\n  padding: 2rem;\n  border: 3px solid black;\n  border-radius: 2rem;\n}\n\n.book-card-read {\n  font-size: 3rem;\n  line-height: 3rem;\n  background-color: rgb(245, 245, 245);\n  height: auto;\n  max-width: 30rem;\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  cursor: pointer;\n  margin: 1rem;\n  padding: 1rem;\n  user-select: none;\n  border-radius: 0.5rem;\n  min-width: 50%;\n  text-align: center;\n}\n\nbutton {\n  align-items: center;\n  appearance: none;\n  background-color: #fcfcfd;\n  border-radius: 4px;\n  border-width: 0;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #36395a;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: \"JetBrains Mono\", monospace;\n  height: 3.5rem;\n  justify-content: center;\n  line-height: 2rem;\n  list-style: none;\n  overflow: hidden;\n  padding: 1rem;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: box-shadow 0.15s, transform 0.15s;\n  user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow, transform;\n  font-size: 2rem;\n}\nbutton:hover {\n  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  transform: translateY(-2px);\n}\nbutton:focus {\n  box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n}\nbutton:active {\n  box-shadow: #d6d6e7 0 3px 7px inset;\n  transform: translateY(2px);\n}\n\n.green {\n  background-color: #78e778;\n}\n\n.red {\n  background-color: #f36148;\n}\n\n.small-text {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n}\n\nlabel {\n  text-align: center;\n  margin: 0.5rem;\n  padding: 0.5rem;\n}\n\n.error-span {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  color: red;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\ninput[type=text],\ninput[type=number] {\n  width: 20rem;\n}\ninput[type=text]:invalid,\ninput[type=number]:invalid {\n  border-color: red;\n}\n\n.book-card-pages, .book-card-author, .book-card-title {\n  text-align: center;\n  width: 70%;\n  background-color: rgb(245, 245, 245);\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  margin: 0.5rem;\n  padding: 1rem;\n  font-size: 2.4rem;\n  height: 5rem;\n  line-height: 2.4rem;\n  border-radius: 0.5rem;\n}\n\n.form-btn-wrapper {\n  gap: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAMA;EACE,SAAA;EACA,UAAA;AALF;;AAQA;EACE,gBAAA;EACA,aAAA;AALF;;AAQA;EACE,uBAAA;EACA,yBAlBc;AAahB;;AAQA;EACE,kBAAA;AALF;;AAQA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AALF;;AAWA;EAEE,WAAA;EACA,6BAAA;EACA,yBArCgB;AA4BlB;AAUE;EACE,eAAA;EACA,YAAA;EACA,aAAA;AARJ;;AAYA;EACE,cAAA;EACA,aAAA;EACA,sBAAA;AATF;;AAYA;EAEE,WAAA;EACA,cAAA;EACA,sBAAA;EACA,yBAvDgB;EAwDhB,gBAAA;AAVF;AAWE;EACE,iBAAA;AATJ;;AAaA;EACE,eAAA;AAVF;;AAaA;EACE,cAAA;EACA,WAAA;EACA,YAAA;AAVF;;AAaA;EAEE,sBAAA;EACA,cAAA;EACA,WAAA;EACA,iBAAA;AAXF;;AAcA;EAEE,WAAA;EACA,cAAA;AAZF;;AAeA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;AAZF;;AAeA;EAEE,oCAAA;EACA,aAAA;EACA,YAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAbF;;AAgBA;EAEE,mBAAA;EACA,eAAA;EACA,SAAA;AAdF;;AAiBA;EAEE,oCAAA;EACA,aAAA;EACA,YAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAfF;;AAkBA;EA9FE,eA+FmB;EA9FnB,iBA8FmB;EACnB,oCAAA;EACA,YAAA;EACA,gBAAA;EACA,uBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;AAdF;;AAiBA;EACE,mBAAA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,0GAAA;EAEA,sBAAA;EACA,cAAA;EACA,eAAA;EACA,oBAAA;EACA,wCAAA;EACA,cAAA;EACA,uBAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,6CAAA;EACA,iBAAA;EACA,0BAAA;EACA,mBAAA;EACA,kCAAA;EACA,eAAA;AAfF;AAgBE;EACE,0GAAA;EAEA,2BAAA;AAfJ;AAiBE;EACE,qIAAA;AAfJ;AAkBE;EACE,mCAAA;EACA,0BAAA;AAhBJ;;AAoBA;EACE,yBArLY;AAoKd;;AAoBA;EACE,yBA1LU;AAyKZ;;AAoBA;EAjKE,iBAkKmB;EAjKnB,mBAiKmB;AAhBrB;;AAmBA;EACE,kBAAA;EACA,cAAA;EACA,eAAA;AAhBF;;AAmBA;EA3KE,iBA4KmB;EA3KnB,mBA2KmB;EACnB,UAAA;AAfF;;AAkBA;EACE,kBAAA;AAfF;;AAkBA;;EAEE,YAAA;AAfF;AAgBE;;EACE,iBAAA;AAbJ;;AAiBA;EAEE,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,uBAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;EACA,iBAAA;EACA,YAAA;EACA,mBAAA;EACA,qBAAA;AAfF;;AA2BA;EAEE,SAAA;AAzBF","sourcesContent":["$body-bg-color: #f2f2f2;\n$header-bg-color: #c40505;\n$footer-bg-color: #c40505;\n$red-color: #f36148;\n$green-color: #78e778;\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  height: 100vh;\n}\n\nbody {\n  font-family: sans-serif;\n  background-color: $body-bg-color;\n}\n\n.blur {\n  filter: blur(1rem);\n}\n\n%flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@mixin font-size($size) {\n  font-size: $size;\n  line-height: $size;\n}\nheader {\n  @extend %flex-center;\n  width: 100%;\n  border-bottom: 1px solid gray;\n  background-color: $header-bg-color;\n  h1 {\n    font-size: 5rem;\n    margin: 1rem;\n    padding: 1rem;\n  }\n}\n\nmain {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  @extend %flex-center;\n  width: 100%;\n  flex-shrink: 0;\n  word-break: break-word;\n  background-color: $footer-bg-color;\n  margin-top: 2rem;\n  div {\n    font-size: 1.6rem;\n  }\n}\n\nfooter > * {\n  padding: 0.5rem;\n}\n\n.github-logo {\n  display: block;\n  width: 32px;\n  height: auto;\n}\n\n.main-wrapper {\n  @extend %flex-center;\n  flex-direction: column;\n  flex: 0 0 auto;\n  width: 100%;\n  min-height: 100vh;\n}\n\n.add-book-div {\n  @extend %flex-center;\n  width: 100%;\n  margin: 2rem 0;\n}\n\n.add-book-form-container {\n  display: none;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.add-book-form {\n  @extend %flex-center;\n  background-color: rgb(204, 219, 245);\n  height: 40rem;\n  width: 25rem;\n  flex-direction: column;\n  padding: 2rem;\n  border: 3px solid black;\n  border-radius: 2rem;\n}\n\n.book-list {\n  @extend %flex-center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n\n.book-card {\n  @extend %flex-center;\n  background-color: rgb(204, 219, 245);\n  height: 40rem;\n  width: 25rem;\n  flex-direction: column;\n  padding: 2rem;\n  border: 3px solid black;\n  border-radius: 2rem;\n}\n\n.book-card-read {\n  @include font-size(3rem);\n  background-color: rgb(245, 245, 245);\n  height: auto;\n  max-width: 30rem;\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  cursor: pointer;\n  margin: 1rem;\n  padding: 1rem;\n  user-select: none;\n  border-radius: 0.5rem;\n  min-width: 50%;\n  text-align: center;\n}\n\nbutton {\n  align-items: center;\n  appearance: none;\n  background-color: #fcfcfd;\n  border-radius: 4px;\n  border-width: 0;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,\n    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #36395a;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: \"JetBrains Mono\", monospace;\n  height: 3.5rem;\n  justify-content: center;\n  line-height: 2rem;\n  list-style: none;\n  overflow: hidden;\n  padding: 1rem;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: box-shadow 0.15s, transform 0.15s;\n  user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow, transform;\n  font-size: 2rem;\n  &:hover {\n    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n    transform: translateY(-2px);\n  }\n  &:focus {\n    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  }\n  &:active {\n    box-shadow: #d6d6e7 0 3px 7px inset;\n    transform: translateY(2px);\n  }\n}\n\n.green {\n  background-color: $green-color;\n}\n\n.red {\n  background-color: $red-color;\n}\n\n.small-text {\n  @include font-size(1.5rem);\n}\n\nlabel {\n  text-align: center;\n  margin: 0.5rem;\n  padding: 0.5rem;\n}\n\n.error-span {\n  @include font-size(1.5rem);\n  color: red;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\ninput[type=\"text\"],\ninput[type=\"number\"] {\n  width: 20rem;\n  &:invalid {\n    border-color: red;\n  }\n}\n\n%book-card-info {\n  @extend %flex-center;\n  text-align: center;\n  width: 70%;\n  background-color: rgb(245, 245, 245);\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  margin: 0.5rem;\n  padding: 1rem;\n  font-size: 2.4rem;\n  height: 5rem;\n  line-height: 2.4rem;\n  border-radius: 0.5rem;\n}\n.book-card-title {\n  @extend %book-card-info;\n}\n.book-card-author {\n  @extend %book-card-info;\n}\n.book-card-pages {\n  @extend %book-card-info;\n}\n\n.form-btn-wrapper {\n  @extend %flex-center;\n  gap: 2rem;\n}\n"],"sourceRoot":""}]);
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
  /* clearFormInputs(); */
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
  console.log("submit button works");
  const inputTitle = document.querySelector("#book-title");
  const inputAuthor = document.querySelector("#book-author");
  const inputPages = document.querySelector("#book-pages");

  if (inputTitle.validity.valid) {
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
  }
  if (
    inputTitle.validity.valid &&
    inputAuthor.validity.valid &&
    inputPages.validity.valid
  ) {
    addBookToLibrary();
  }
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
  const formBookTitleSpan = document.createElement("span");
  formBookTitleSpan.classList.add("error-span", "hidden");
  formBookTitleSpan.setAttribute("id", "title-error-span");
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
  const formBookAuthorSpan = document.createElement("span");
  formBookAuthorSpan.classList.add("error-span", "hidden");
  formBookAuthorSpan.setAttribute("id", "author-error-span");
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
  const formBookPagesSpan = document.createElement("span");
  formBookPagesSpan.classList.add("error-span", "hidden");
  formBookPagesSpan.setAttribute("id", "pages-error-span");
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
  formBookTitle.appendChild(formBookTitleSpan);
  formBookAuthor.appendChild(formBookAuthorInput);
  formBookAuthor.appendChild(formBookAuthorSpan);
  formBookPages.appendChild(formBookPagesInput);
  formBookPages.appendChild(formBookPagesSpan);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDak5zQjtBQUNBO0FBQ2dCO0FBV3JCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHdDQUFVO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDJEQUFtQjtBQUNyQixjQUFjLDZDQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0Q0FBUTtBQUN2QztBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwrQkFBK0IsOENBQVU7QUFDekM7QUFDQTtBQUNBLCtCQUErQiw2Q0FBUztBQUN4QyxFQUFFLG9EQUFZO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0tBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7QUNBa0M7O0FBRWxDLDhDQUE4QywyQ0FBVSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tbGlicmFyeS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbi5ibHVyIHtcXG4gIGZpbHRlcjogYmx1cigxcmVtKTtcXG59XFxuXFxuLmZvcm0tYnRuLXdyYXBwZXIsIC5ib29rLWNhcmQtcGFnZXMsIC5ib29rLWNhcmQtYXV0aG9yLCAuYm9vay1jYXJkLXRpdGxlLCAuYm9vay1jYXJkLCAuYm9vay1saXN0LCAuYWRkLWJvb2stZm9ybSwgLmFkZC1ib29rLWRpdiwgLm1haW4td3JhcHBlciwgZm9vdGVyLCBoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQwNTA1O1xcbn1cXG5oZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQwNTA1O1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuZm9vdGVyIGRpdiB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuZm9vdGVyID4gKiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5naXRodWItbG9nbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubWFpbi13cmFwcGVyIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5hZGQtYm9vay1kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDJyZW0gMDtcXG59XFxuXFxuLmFkZC1ib29rLWZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uYWRkLWJvb2stZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMTksIDI0NSk7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbi5ib29rLWxpc3Qge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmJvb2stY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMTksIDI0NSk7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbi5ib29rLWNhcmQtcmVhZCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBsaW5lLWhlaWdodDogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMzByZW07XFxuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgbWluLXdpZHRoOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDQ1LCAzNSwgNjYsIDAuNCkgMCAycHggNHB4LCByZ2JhKDQ1LCAzNSwgNjYsIDAuMykgMCA3cHggMTNweCAtM3B4LCAjZDZkNmU3IDAgLTNweCAwIGluc2V0O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjMzYzOTVhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmb250LWZhbWlseTogXFxcIkpldEJyYWlucyBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgaGVpZ2h0OiAzLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cywgdHJhbnNmb3JtIDAuMTVzO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3aWxsLWNoYW5nZTogYm94LXNoYWRvdywgdHJhbnNmb3JtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogcmdiYSg0NSwgMzUsIDY2LCAwLjQpIDAgNHB4IDhweCwgcmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwgI2Q2ZDZlNyAwIC0zcHggMCBpbnNldDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG59XFxuYnV0dG9uOmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6ICNkNmQ2ZTcgMCAwIDAgMS41cHggaW5zZXQsIHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDJweCA0cHgsIHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsICNkNmQ2ZTcgMCAtM3B4IDAgaW5zZXQ7XFxufVxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogI2Q2ZDZlNyAwIDNweCA3cHggaW5zZXQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG59XFxuXFxuLmdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OGU3Nzg7XFxufVxcblxcbi5yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzNjE0ODtcXG59XFxuXFxuLnNtYWxsLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmVycm9yLXNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sXFxuaW5wdXRbdHlwZT1udW1iZXJdIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG59XFxuaW5wdXRbdHlwZT10ZXh0XTppbnZhbGlkLFxcbmlucHV0W3R5cGU9bnVtYmVyXTppbnZhbGlkIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYm9vay1jYXJkLXBhZ2VzLCAuYm9vay1jYXJkLWF1dGhvciwgLmJvb2stY2FyZC10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNzAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmZvcm0tYnRuLXdyYXBwZXIge1xcbiAgZ2FwOiAycmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFMRjs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EseUJBbEJjO0FBYWhCOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTEY7O0FBV0E7RUFFRSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFyQ2dCO0FBNEJsQjtBQVVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBUko7O0FBWUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBVEY7O0FBWUE7RUFFRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBdkRnQjtFQXdEaEIsZ0JBQUE7QUFWRjtBQVdFO0VBQ0UsaUJBQUE7QUFUSjs7QUFhQTtFQUNFLGVBQUE7QUFWRjs7QUFhQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVZGOztBQWFBO0VBRUUsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBWEY7O0FBY0E7RUFFRSxXQUFBO0VBQ0EsY0FBQTtBQVpGOztBQWVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0FBWkY7O0FBZUE7RUFFRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWJGOztBQWdCQTtFQUVFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFkRjs7QUFpQkE7RUFFRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWZGOztBQWtCQTtFQTlGRSxlQStGbUI7RUE5Rm5CLGlCQThGbUI7RUFDbkIsb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWRGOztBQWlCQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBHQUFBO0VBRUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUFmRjtBQWdCRTtFQUNFLDBHQUFBO0VBRUEsMkJBQUE7QUFmSjtBQWlCRTtFQUNFLHFJQUFBO0FBZko7QUFrQkU7RUFDRSxtQ0FBQTtFQUNBLDBCQUFBO0FBaEJKOztBQW9CQTtFQUNFLHlCQXJMWTtBQW9LZDs7QUFvQkE7RUFDRSx5QkExTFU7QUF5S1o7O0FBb0JBO0VBaktFLGlCQWtLbUI7RUFqS25CLG1CQWlLbUI7QUFoQnJCOztBQW1CQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFoQkY7O0FBbUJBO0VBM0tFLGlCQTRLbUI7RUEzS25CLG1CQTJLbUI7RUFDbkIsVUFBQTtBQWZGOztBQWtCQTtFQUNFLGtCQUFBO0FBZkY7O0FBa0JBOztFQUVFLFlBQUE7QUFmRjtBQWdCRTs7RUFDRSxpQkFBQTtBQWJKOztBQWlCQTtFQUVFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQWZGOztBQTJCQTtFQUVFLFNBQUE7QUF6QkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJvZHktYmctY29sb3I6ICNmMmYyZjI7XFxuJGhlYWRlci1iZy1jb2xvcjogI2M0MDUwNTtcXG4kZm9vdGVyLWJnLWNvbG9yOiAjYzQwNTA1O1xcbiRyZWQtY29sb3I6ICNmMzYxNDg7XFxuJGdyZWVuLWNvbG9yOiAjNzhlNzc4O1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnLWNvbG9yO1xcbn1cXG5cXG4uYmx1ciB7XFxuICBmaWx0ZXI6IGJsdXIoMXJlbSk7XFxufVxcblxcbiVmbGV4LWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWl4aW4gZm9udC1zaXplKCRzaXplKSB7XFxuICBmb250LXNpemU6ICRzaXplO1xcbiAgbGluZS1oZWlnaHQ6ICRzaXplO1xcbn1cXG5oZWFkZXIge1xcbiAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1iZy1jb2xvcjtcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIEBleHRlbmQgJWZsZXgtY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9vdGVyLWJnLWNvbG9yO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgfVxcbn1cXG5cXG5mb290ZXIgPiAqIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmdpdGh1Yi1sb2dvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5tYWluLXdyYXBwZXIge1xcbiAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uYWRkLWJvb2stZGl2IHtcXG4gIEBleHRlbmQgJWZsZXgtY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDJyZW0gMDtcXG59XFxuXFxuLmFkZC1ib29rLWZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uYWRkLWJvb2stZm9ybSB7XFxuICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDIxOSwgMjQ1KTtcXG4gIGhlaWdodDogNDByZW07XFxuICB3aWR0aDogMjVyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLmJvb2stbGlzdCB7XFxuICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5ib29rLWNhcmQge1xcbiAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMTksIDI0NSk7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbi5ib29rLWNhcmQtcmVhZCB7XFxuICBAaW5jbHVkZSBmb250LXNpemUoM3JlbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG1pbi13aWR0aDogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZkO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSg0NSwgMzUsIDY2LCAwLjQpIDAgMnB4IDRweCxcXG4gICAgcmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwgI2Q2ZDZlNyAwIC0zcHggMCBpbnNldDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzM2Mzk1YTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKZXRCcmFpbnMgTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMsIHRyYW5zZm9ybSAwLjE1cztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3csIHRyYW5zZm9ybTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gICY6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDQ1LCAzNSwgNjYsIDAuNCkgMCA0cHggOHB4LFxcbiAgICAgIHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsICNkNmQ2ZTcgMCAtM3B4IDAgaW5zZXQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG4gIH1cXG4gICY6Zm9jdXMge1xcbiAgICBib3gtc2hhZG93OiAjZDZkNmU3IDAgMCAwIDEuNXB4IGluc2V0LCByZ2JhKDQ1LCAzNSwgNjYsIDAuNCkgMCAycHggNHB4LFxcbiAgICAgIHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsICNkNmQ2ZTcgMCAtM3B4IDAgaW5zZXQ7XFxuICB9XFxuICAmOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6ICNkNmQ2ZTcgMCAzcHggN3B4IGluc2V0O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG4gIH1cXG59XFxuXFxuLmdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcXG59XFxuXFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkLWNvbG9yO1xcbn1cXG5cXG4uc21hbGwtdGV4dCB7XFxuICBAaW5jbHVkZSBmb250LXNpemUoMS41cmVtKTtcXG59XFxuXFxubGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5lcnJvci1zcGFuIHtcXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgxLjVyZW0pO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICB3aWR0aDogMjByZW07XFxuICAmOmludmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG4gIH1cXG59XFxuXFxuJWJvb2stY2FyZC1pbmZvIHtcXG4gIEBleHRlbmQgJWZsZXgtY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcbi5ib29rLWNhcmQtdGl0bGUge1xcbiAgQGV4dGVuZCAlYm9vay1jYXJkLWluZm87XFxufVxcbi5ib29rLWNhcmQtYXV0aG9yIHtcXG4gIEBleHRlbmQgJWJvb2stY2FyZC1pbmZvO1xcbn1cXG4uYm9vay1jYXJkLXBhZ2VzIHtcXG4gIEBleHRlbmQgJWJvb2stY2FyZC1pbmZvO1xcbn1cXG5cXG4uZm9ybS1idG4td3JhcHBlciB7XFxuICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHtcbiAgYWRkVG9Mb2NhbFN0b3JhZ2UsXG4gIGdldEZyb21Mb2NhbFN0b3JhZ2UsXG4gIGNsZWFyTG9jYWxTdG9yYWdlLFxuICBvcGVuRm9ybSxcbiAgY2xvc2VGb3JtLFxuICBhZGRCb29rVG9MaWJyYXJ5LFxuICBkaXNwbGF5Qm9va3MsXG4gIG15TGlicmFyeSxcbiAgYWRkU29tZUJvb2tzLFxuICBzdWJtaXRGb3JtLFxufTtcbmxldCBteUxpYnJhcnkgPSBbXTtcblxuY2xhc3MgQm9vayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCByZWFkKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuICAgIHRoaXMucGFnZXMgPSBwYWdlcztcbiAgICB0aGlzLnJlYWQgPSByZWFkO1xuICB9XG59XG5cbmNvbnN0IGFkZFNvbWVCb29rcyA9ICgpID0+IHtcbiAgbGV0IGJvb2s7XG4gIGJvb2sgPSBuZXcgQm9vayhcIlRoZSBXaXNkb20gT2YgQ3Jvd2RzXCIsIFwiSm9lIEFiZXJjcm9tYmllXCIsIFwiNTI4XCIsIGZhbHNlKTtcbiAgbXlMaWJyYXJ5LnB1c2goYm9vayk7XG4gIGJvb2sgPSBuZXcgQm9vayhcIkEgR2FtZSBvZiBUaHJvbmVzXCIsIFwiR2VvcmdlIFIuUi4gTWFydGluXCIsIFwiNzIwXCIsIHRydWUpO1xuICBteUxpYnJhcnkucHVzaChib29rKTtcbiAgYWRkVG9Mb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IGFkZEJvb2tUb0xpYnJhcnkgPSAoKSA9PiB7XG4gIGlmIChteUxpYnJhcnkgPT09IG51bGwpIHtcbiAgICBteUxpYnJhcnkgPSBbXTtcbiAgfVxuICBsZXQgYm9vaztcbiAgYm9vayA9IG5ldyBCb29rKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay10aXRsZVwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stYXV0aG9yXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1wYWdlc1wiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stcmVhZFwiKS5jaGVja2VkXG4gICk7XG5cbiAgbXlMaWJyYXJ5LnB1c2goYm9vayk7XG4gIC8qIGNsZWFyRm9ybUlucHV0cygpOyAqL1xuICBjbG9zZUZvcm0oKTtcbiAgcmVzZXRCb29rTGlzdCgpO1xuICBkaXNwbGF5Qm9va3MoKTtcbiAgYWRkVG9Mb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IHJlc2V0Qm9va0xpc3QgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9vay1saXN0XCIpLmlubmVySFRNTCA9IFwiXCI7XG59O1xuXG5jb25zdCBkaXNwbGF5Qm9va3MgPSAoKSA9PiB7XG4gIGlmIChteUxpYnJhcnkgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG15TGlicmFyeS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGJvb2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZFRpdGxlU21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJvb2tDYXJkQXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZEF1dGhvclNtYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZFBhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZFBhZ2VzU21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJvb2tDYXJkUmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm9va0NhcmREZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgYm9va0NhcmQuY2xhc3NMaXN0LmFkZChcImJvb2stY2FyZFwiKTtcbiAgICBib29rQ2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJib29rLWNhcmQtdGl0bGVcIik7XG4gICAgYm9va0NhcmRUaXRsZVNtYWxsLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC10ZXh0XCIpO1xuICAgIGJvb2tDYXJkQXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJib29rLWNhcmQtYXV0aG9yXCIpO1xuICAgIGJvb2tDYXJkQXV0aG9yU21hbGwuY2xhc3NMaXN0LmFkZChcInNtYWxsLXRleHRcIik7XG4gICAgYm9va0NhcmRQYWdlcy5jbGFzc0xpc3QuYWRkKFwiYm9vay1jYXJkLXBhZ2VzXCIpO1xuICAgIGJvb2tDYXJkUGFnZXNTbWFsbC5jbGFzc0xpc3QuYWRkKFwic21hbGwtdGV4dFwiKTtcbiAgICBib29rQ2FyZFJlYWQuY2xhc3NMaXN0LmFkZChcImJvb2stY2FyZC1yZWFkXCIpO1xuXG4gICAgYm9va0NhcmQuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIiwgaSk7XG5cbiAgICBib29rQ2FyZFRpdGxlLnRleHRDb250ZW50ID0gbXlMaWJyYXJ5W2ldLnRpdGxlO1xuICAgIGJvb2tDYXJkVGl0bGVTbWFsbC50ZXh0Q29udGVudCA9IFwidGl0bGVcIjtcbiAgICBib29rQ2FyZEF1dGhvci50ZXh0Q29udGVudCA9IG15TGlicmFyeVtpXS5hdXRob3I7XG4gICAgYm9va0NhcmRBdXRob3JTbWFsbC50ZXh0Q29udGVudCA9IFwiYXV0aG9yXCI7XG4gICAgYm9va0NhcmRQYWdlcy50ZXh0Q29udGVudCA9IG15TGlicmFyeVtpXS5wYWdlcztcbiAgICBib29rQ2FyZFBhZ2VzU21hbGwudGV4dENvbnRlbnQgPSBcInBhZ2VzXCI7XG4gICAgaWYgKG15TGlicmFyeVtpXS5yZWFkKSB7XG4gICAgICBib29rQ2FyZFJlYWQudGV4dENvbnRlbnQgPSBcIlJlYWRcIjtcbiAgICAgIGJvb2tDYXJkUmVhZC5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvb2tDYXJkUmVhZC50ZXh0Q29udGVudCA9IFwiTm90IHJlYWRcIjtcbiAgICAgIGJvb2tDYXJkUmVhZC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICAgIH1cbiAgICBib29rQ2FyZERlbGV0ZS50ZXh0Q29udGVudCA9IFwiRGVsZXRlIGJvb2tcIjtcblxuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkVGl0bGUpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkVGl0bGVTbWFsbCk7XG4gICAgYm9va0NhcmQuYXBwZW5kQ2hpbGQoYm9va0NhcmRBdXRob3IpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkQXV0aG9yU21hbGwpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkUGFnZXMpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkUGFnZXNTbWFsbCk7XG4gICAgYm9va0NhcmQuYXBwZW5kQ2hpbGQoYm9va0NhcmRSZWFkKTtcbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChib29rQ2FyZERlbGV0ZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib29rLWxpc3RcIikuYXBwZW5kQ2hpbGQoYm9va0NhcmQpO1xuXG4gICAgYm9va0NhcmREZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZUJvb2spO1xuICAgIGJvb2tDYXJkUmVhZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlUmVhZCk7XG4gIH1cbn07XG5cbmNvbnN0IG9wZW5Gb3JtID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKS5jbGFzc0xpc3QuYWRkKFwiYmx1clwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYm9vay1mb3JtLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufTtcblxuY29uc3QgY2xvc2VGb3JtID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1clwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYm9vay1mb3JtLWNvbnRhaW5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNsZWFyRm9ybUlucHV0cygpO1xufTtcblxuY29uc3QgZGVsZXRlQm9vayA9IChlKSA9PiB7XG4gIGxldCBhdHRyaWJ1dGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbnVtYmVyXCIpO1xuICBteUxpYnJhcnkuc3BsaWNlKGF0dHJpYnV0ZSwgMSk7XG4gIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gIHJlc2V0Qm9va0xpc3QoKTtcbiAgZGlzcGxheUJvb2tzKCk7XG4gIGFkZFRvTG9jYWxTdG9yYWdlKCk7XG59O1xuXG5jb25zdCB0b2dnbGVSZWFkID0gKGUpID0+IHtcbiAgbGV0IGF0dHJpYnV0ZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIik7XG4gIGlmIChteUxpYnJhcnlbYXR0cmlidXRlXS5yZWFkKSB7XG4gICAgbXlMaWJyYXJ5W2F0dHJpYnV0ZV0ucmVhZCA9IGZhbHNlO1xuICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJOb3QgcmVhZFwiO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJncmVlblwiKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICB9IGVsc2Uge1xuICAgIG15TGlicmFyeVthdHRyaWJ1dGVdLnJlYWQgPSB0cnVlO1xuICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJSZWFkXCI7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInJlZFwiKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5cIik7XG4gIH1cbiAgYWRkVG9Mb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IGFkZFRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15TGlicmFyeUxvY2FsXCIsIEpTT04uc3RyaW5naWZ5KG15TGlicmFyeSkpO1xufTtcblxuY29uc3QgZ2V0RnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgbXlMaWJyYXJ5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15TGlicmFyeUxvY2FsXCIpKTtcbn07XG5cbmNvbnN0IGNsZWFyTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbn07XG5cbmNvbnN0IGNsZWFyRm9ybUlucHV0cyA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLXRpdGxlXCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLWF1dGhvclwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1wYWdlc1wiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1yZWFkXCIpLmNoZWNrZWQgPSBmYWxzZTtcbn07XG5cbmNvbnN0IHN1Ym1pdEZvcm0gPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coXCJzdWJtaXQgYnV0dG9uIHdvcmtzXCIpO1xuICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLXRpdGxlXCIpO1xuICBjb25zdCBpbnB1dEF1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1hdXRob3JcIik7XG4gIGNvbnN0IGlucHV0UGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stcGFnZXNcIik7XG5cbiAgaWYgKGlucHV0VGl0bGUudmFsaWRpdHkudmFsaWQpIHtcbiAgICBjb25zb2xlLmxvZyhcInRpdGxlIG9rXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUtZXJyb3Itc3BhblwiKS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1lcnJvci1zcGFuXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJ0aXRsZSBlcnJvclwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLWVycm9yLXNwYW5cIikudGV4dENvbnRlbnQgPSBcIlNUVVBJRFwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUtZXJyb3Itc3BhblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG4gIGlmIChpbnB1dEF1dGhvci52YWxpZGl0eS52YWxpZCkge1xuICAgIGNvbnNvbGUubG9nKFwiYXV0aG9yIG9rXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXV0aG9yLWVycm9yLXNwYW5cIikudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXV0aG9yLWVycm9yLXNwYW5cIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImF1dGhvciBlcnJvclwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1dGhvci1lcnJvci1zcGFuXCIpLnRleHRDb250ZW50ID0gXCJTVFVQSURcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1dGhvci1lcnJvci1zcGFuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cbiAgaWYgKGlucHV0UGFnZXMudmFsaWRpdHkudmFsaWQpIHtcbiAgICBjb25zb2xlLmxvZyhcInBhZ2VzIG9rXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZXMtZXJyb3Itc3BhblwiKS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlcy1lcnJvci1zcGFuXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJwYWdlcyBlcnJvclwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2VzLWVycm9yLXNwYW5cIikudGV4dENvbnRlbnQgPSBcIlNUVVBJRFwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZXMtZXJyb3Itc3BhblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG4gIGlmIChcbiAgICBpbnB1dFRpdGxlLnZhbGlkaXR5LnZhbGlkICYmXG4gICAgaW5wdXRBdXRob3IudmFsaWRpdHkudmFsaWQgJiZcbiAgICBpbnB1dFBhZ2VzLnZhbGlkaXR5LnZhbGlkXG4gICkge1xuICAgIGFkZEJvb2tUb0xpYnJhcnkoKTtcbiAgfVxufTtcbiIsImV4cG9ydCB7IHJlbmRlclBhZ2UgfTtcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IEdpdGh1YkxvZ28gZnJvbSBcIi4vZ2l0aHViLnBuZ1wiO1xuaW1wb3J0IHtcbiAgZ2V0RnJvbUxvY2FsU3RvcmFnZSxcbiAgb3BlbkZvcm0sXG4gIGNsb3NlRm9ybSxcbiAgYWRkQm9va1RvTGlicmFyeSxcbiAgZGlzcGxheUJvb2tzLFxuICBteUxpYnJhcnksXG4gIGNsZWFyTG9jYWxTdG9yYWdlLFxuICBhZGRTb21lQm9va3MsXG4gIHN1Ym1pdEZvcm0sXG59IGZyb20gXCIuL2xvZ2ljXCI7XG5cbmNvbnN0IGNyZWF0ZVdyYXBwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbldyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1haW4td3JhcHBlclwiKTtcblxuICByZXR1cm4gbWFpbldyYXBwZXI7XG59O1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiTGlicmFyeVwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCBjcmVhdGVGb3JtID0gKCkgPT4ge1xuICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJvb2stZm9ybS1jb250YWluZXJcIik7XG4gIGNvbnN0IGZvcm1EaXZGb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtRGl2Rm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImFkZC1ib29rLWZvcm1cIik7XG4gIGNvbnN0IGZvcm1Cb29rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGZvcm1Cb29rVGl0bGVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvcm1Cb29rVGl0bGVQYXJhLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xuICBmb3JtQm9va1RpdGxlLmFwcGVuZENoaWxkKGZvcm1Cb29rVGl0bGVQYXJhKTtcbiAgY29uc3QgZm9ybUJvb2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBmb3JtQm9va1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGZvcm1Cb29rVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJvb2stdGl0bGVcIik7XG4gIGZvcm1Cb29rVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiYm9vay10aXRsZVwiKTtcbiAgZm9ybUJvb2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjMwXCIpO1xuICBmb3JtQm9va1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIxOTg0XCIpO1xuICBmb3JtQm9va1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIGNvbnN0IGZvcm1Cb29rVGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGZvcm1Cb29rVGl0bGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJlcnJvci1zcGFuXCIsIFwiaGlkZGVuXCIpO1xuICBmb3JtQm9va1RpdGxlU3Bhbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlLWVycm9yLXNwYW5cIik7XG4gIGNvbnN0IGZvcm1Cb29rQXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBmb3JtQm9va0F1dGhvclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9ybUJvb2tBdXRob3JQYXJhLnRleHRDb250ZW50ID0gXCJBdXRob3JcIjtcbiAgZm9ybUJvb2tBdXRob3IuYXBwZW5kQ2hpbGQoZm9ybUJvb2tBdXRob3JQYXJhKTtcbiAgZm9ybUJvb2tBdXRob3IudGV4dENvbnRlbnQgPSBcIkF1dGhvclwiO1xuICBjb25zdCBmb3JtQm9va0F1dGhvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBmb3JtQm9va0F1dGhvcklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBmb3JtQm9va0F1dGhvcklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYm9vay1hdXRob3JcIik7XG4gIGZvcm1Cb29rQXV0aG9ySW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImJvb2stYXV0aG9yXCIpO1xuICBmb3JtQm9va0F1dGhvcklucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjMwXCIpO1xuICBmb3JtQm9va0F1dGhvcklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiR2VvcmdlIE9yd2VsbFwiKTtcbiAgZm9ybUJvb2tBdXRob3JJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgY29uc3QgZm9ybUJvb2tBdXRob3JTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGZvcm1Cb29rQXV0aG9yU3Bhbi5jbGFzc0xpc3QuYWRkKFwiZXJyb3Itc3BhblwiLCBcImhpZGRlblwiKTtcbiAgZm9ybUJvb2tBdXRob3JTcGFuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXV0aG9yLWVycm9yLXNwYW5cIik7XG4gIGNvbnN0IGZvcm1Cb29rUGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGZvcm1Cb29rUGFnZXNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvcm1Cb29rUGFnZXNQYXJhLnRleHRDb250ZW50ID0gXCJQYWdlc1wiO1xuICBmb3JtQm9va1BhZ2VzLmFwcGVuZENoaWxkKGZvcm1Cb29rUGFnZXNQYXJhKTtcbiAgZm9ybUJvb2tQYWdlcy50ZXh0Q29udGVudCA9IFwiUGFnZXNcIjtcbiAgY29uc3QgZm9ybUJvb2tQYWdlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBmb3JtQm9va1BhZ2VzSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKTtcbiAgZm9ybUJvb2tQYWdlc0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYm9vay1wYWdlc1wiKTtcbiAgZm9ybUJvb2tQYWdlc0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJib29rLXBhZ2VzXCIpO1xuICBmb3JtQm9va1BhZ2VzSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIFwiMFwiKTtcbiAgZm9ybUJvb2tQYWdlc0lucHV0LnNldEF0dHJpYnV0ZShcIm1heFwiLCBcIjk5OTlcIik7XG4gIGZvcm1Cb29rUGFnZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIjMyOFwiKTtcbiAgZm9ybUJvb2tQYWdlc0lucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBjb25zdCBmb3JtQm9va1BhZ2VzU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBmb3JtQm9va1BhZ2VzU3Bhbi5jbGFzc0xpc3QuYWRkKFwiZXJyb3Itc3BhblwiLCBcImhpZGRlblwiKTtcbiAgZm9ybUJvb2tQYWdlc1NwYW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwYWdlcy1lcnJvci1zcGFuXCIpO1xuICBjb25zdCBmb3JtQm9va1JlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGZvcm1Cb29rUmVhZC50ZXh0Q29udGVudCA9IFwiUmVhZFwiO1xuICBjb25zdCBmb3JtQm9va1JlYWRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZm9ybUJvb2tSZWFkSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBmb3JtQm9va1JlYWRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJvb2stcmVhZFwiKTtcbiAgZm9ybUJvb2tSZWFkSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImJvb2stcmVhZFwiKTtcbiAgY29uc3QgZm9ybUJvb2tCdXR0b25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvcm1Cb29rQnV0dG9uc1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuLXdyYXBwZXJcIik7XG4gIGNvbnN0IGZvcm1Cb29rU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZm9ybUJvb2tTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICBmb3JtQm9va1N1Ym1pdC5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWZvcm0tYnV0dG9uXCIpO1xuICBmb3JtQm9va1N1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBjb25zdCBmb3JtQm9va0NhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGZvcm1Cb29rQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgZm9ybUJvb2tDYW5jZWwuY2xhc3NMaXN0LmFkZChcImNhbmNlbC1mb3JtLWJ1dHRvblwiKTtcbiAgZm9ybUJvb2tDYW5jZWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgZm9ybUJvb2tUaXRsZS5hcHBlbmRDaGlsZChmb3JtQm9va1RpdGxlSW5wdXQpO1xuICBmb3JtQm9va1RpdGxlLmFwcGVuZENoaWxkKGZvcm1Cb29rVGl0bGVTcGFuKTtcbiAgZm9ybUJvb2tBdXRob3IuYXBwZW5kQ2hpbGQoZm9ybUJvb2tBdXRob3JJbnB1dCk7XG4gIGZvcm1Cb29rQXV0aG9yLmFwcGVuZENoaWxkKGZvcm1Cb29rQXV0aG9yU3Bhbik7XG4gIGZvcm1Cb29rUGFnZXMuYXBwZW5kQ2hpbGQoZm9ybUJvb2tQYWdlc0lucHV0KTtcbiAgZm9ybUJvb2tQYWdlcy5hcHBlbmRDaGlsZChmb3JtQm9va1BhZ2VzU3Bhbik7XG4gIGZvcm1Cb29rUmVhZC5hcHBlbmRDaGlsZChmb3JtQm9va1JlYWRJbnB1dCk7XG4gIGZvcm1Cb29rQnV0dG9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybUJvb2tTdWJtaXQpO1xuICBmb3JtQm9va0J1dHRvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGZvcm1Cb29rQ2FuY2VsKTtcbiAgZm9ybURpdkZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm1Cb29rVGl0bGUpO1xuICBmb3JtRGl2Rm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybUJvb2tBdXRob3IpO1xuICBmb3JtRGl2Rm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybUJvb2tQYWdlcyk7XG4gIGZvcm1EaXZGb3JtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtQm9va1JlYWQpO1xuICBmb3JtRGl2Rm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybUJvb2tCdXR0b25zV3JhcHBlcik7XG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybURpdkZvcm1XcmFwcGVyKTtcblxuICByZXR1cm4gZm9ybURpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgbWFpbkFkZEJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQWRkQm9vay5jbGFzc0xpc3QuYWRkKFwiYWRkLWJvb2stZGl2XCIpO1xuICBjb25zdCBtYWluQWRkQm9va0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1haW5BZGRCb29rQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtYm9vay1idXR0b25cIik7XG4gIG1haW5BZGRCb29rQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgYm9va1wiO1xuICBjb25zdCBtYWluQm9va0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQm9va0xpc3QuY2xhc3NMaXN0LmFkZChcImJvb2stbGlzdFwiKTtcbiAgbWFpbkFkZEJvb2suYXBwZW5kQ2hpbGQobWFpbkFkZEJvb2tCdXR0b24pO1xuICBtYWluLmFwcGVuZENoaWxkKG1haW5BZGRCb29rKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluQm9va0xpc3QpO1xuXG4gIHJldHVybiBtYWluO1xufTtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGZvb3RlckxpbmtJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBmb290ZXJMaW5rSW1nLmNsYXNzTGlzdC5hZGQoXCJnaXRodWItbG9nb1wiKTtcbiAgZm9vdGVyTGlua0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgR2l0aHViTG9nbyk7XG4gIGZvb3RlckRpdi50ZXh0Q29udGVudCA9IFwiRGV2ZWxvcGVkIGJ5IG1pcm9zbGF2LXphcmVua292XCI7XG4gIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9taXJvc2xhdi16YXJlbmtvdlwiKTtcbiAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwibm9vcGVuZXIgbm9yZWZlcnJlclwiKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckRpdik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5rKTtcbiAgZm9vdGVyTGluay5hcHBlbmRDaGlsZChmb290ZXJMaW5rSW1nKTtcblxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuY29uc3QgY3JlYXRlUGFnZSA9IChldmVudCkgPT4ge1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVdyYXBwZXIoKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi13cmFwcGVyXCIpLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXdyYXBwZXJcIikuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvcm0oKSk7XG59O1xuXG5jb25zdCByZW5kZXJQYWdlID0gKGV2ZW50KSA9PiB7XG4gIGdldEZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgY29uc29sZS5sb2cobXlMaWJyYXJ5KTtcbiAgY3JlYXRlUGFnZShldmVudCk7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWJvb2stYnV0dG9uXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuRm9ybSk7XG4gIC8qICAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtZm9ybS1idXR0b25cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEJvb2tUb0xpYnJhcnkpOyAqL1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1mb3JtLWJ1dHRvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0Rm9ybSk7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWZvcm0tYnV0dG9uXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm0pO1xuICBkaXNwbGF5Qm9va3MoKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcmVuZGVyUGFnZSB9IGZyb20gXCIuL3VpXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHJlbmRlclBhZ2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9