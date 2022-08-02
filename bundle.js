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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  height: 100vh;\n}\n\nbody {\n  font-family: sans-serif;\n  background-color: #f2f2f2;\n}\n\n.blur {\n  filter: blur(1rem);\n}\n\n.form-btn-wrapper, .book-card-pages, .book-card-author, .book-card-title, .book-card, .book-list, .add-book-form, .add-book-div, .main-wrapper, footer, header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nheader {\n  width: 100%;\n  border-bottom: 1px solid gray;\n  background-color: #c40505;\n}\nheader h1 {\n  font-size: 5rem;\n  margin: 1rem;\n  padding: 1rem;\n}\n\nmain {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  width: 100%;\n  flex-shrink: 0;\n  word-break: break-word;\n  background-color: #c40505;\n  margin-top: 2rem;\n}\nfooter div {\n  font-size: 1.6rem;\n}\n\nfooter > * {\n  padding: 0.5rem;\n}\n\n.github-logo {\n  display: block;\n  width: 32px;\n  height: auto;\n}\n\n.main-wrapper {\n  flex-direction: column;\n  flex: 0 0 auto;\n  width: 100%;\n  min-height: 100vh;\n}\n\n.add-book-div {\n  width: 100%;\n  margin: 2rem 0;\n}\n\n.add-book-form-container {\n  display: none;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.add-book-form {\n  background-color: rgb(204, 219, 245);\n  height: 40rem;\n  width: 25rem;\n  flex-direction: column;\n  padding: 2rem;\n  border: 3px solid black;\n  border-radius: 2rem;\n}\n\n.book-list {\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n\n.book-card {\n  background-color: rgb(204, 219, 245);\n  height: 40rem;\n  width: 25rem;\n  flex-direction: column;\n  padding: 2rem;\n  border: 3px solid black;\n  border-radius: 2rem;\n}\n\n.book-card-read {\n  font-size: 3rem;\n  line-height: 3rem;\n  background-color: rgb(245, 245, 245);\n  height: auto;\n  max-width: 30rem;\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  cursor: pointer;\n  margin: 1rem;\n  padding: 1rem;\n  user-select: none;\n  border-radius: 0.5rem;\n  min-width: 50%;\n  text-align: center;\n}\n\nbutton {\n  align-items: center;\n  appearance: none;\n  background-color: #fcfcfd;\n  border-radius: 4px;\n  border-width: 0;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #36395a;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: \"JetBrains Mono\", monospace;\n  height: 3.5rem;\n  justify-content: center;\n  line-height: 2rem;\n  list-style: none;\n  overflow: hidden;\n  padding: 1rem;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: box-shadow 0.15s, transform 0.15s;\n  user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow, transform;\n  font-size: 2rem;\n}\nbutton:hover {\n  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  transform: translateY(-2px);\n}\nbutton:focus {\n  box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n}\nbutton:active {\n  box-shadow: #d6d6e7 0 3px 7px inset;\n  transform: translateY(2px);\n}\n\n.green {\n  background-color: #78e778;\n}\n.green:hover {\n  background-color: #4ddf4d;\n}\n\n.red {\n  background-color: #f36148;\n}\n.red:hover {\n  background-color: #f03818;\n}\n\n.small-text {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n}\n\nlabel {\n  text-align: center;\n  margin: 0.5rem;\n  padding: 0.5rem;\n}\n\n.error-p {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  color: red;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\ninput[type=text],\ninput[type=number] {\n  width: 20rem;\n}\n\ninput.invalid-data {\n  border-color: red;\n  outline-color: red;\n}\n\n.book-card-pages, .book-card-author, .book-card-title {\n  text-align: center;\n  width: 70%;\n  background-color: rgb(245, 245, 245);\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  margin: 0.5rem;\n  padding: 1rem;\n  font-size: 2.4rem;\n  height: 5rem;\n  line-height: 2.4rem;\n  border-radius: 0.5rem;\n}\n\n.form-btn-wrapper {\n  gap: 2rem;\n}\n\n#title-error-p,\n#author-error-p,\n#pages-error-p {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\nlabel p {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAMA;EACE,SAAA;EACA,UAAA;AALF;;AAQA;EACE,gBAAA;EACA,aAAA;AALF;;AAQA;EACE,uBAAA;EACA,yBAlBc;AAahB;;AAQA;EACE,kBAAA;AALF;;AAQA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AALF;;AAWA;EAEE,WAAA;EACA,6BAAA;EACA,yBArCgB;AA4BlB;AAUE;EACE,eAAA;EACA,YAAA;EACA,aAAA;AARJ;;AAYA;EACE,cAAA;EACA,aAAA;EACA,sBAAA;AATF;;AAYA;EAEE,WAAA;EACA,cAAA;EACA,sBAAA;EACA,yBAvDgB;EAwDhB,gBAAA;AAVF;AAWE;EACE,iBAAA;AATJ;;AAaA;EACE,eAAA;AAVF;;AAaA;EACE,cAAA;EACA,WAAA;EACA,YAAA;AAVF;;AAaA;EAEE,sBAAA;EACA,cAAA;EACA,WAAA;EACA,iBAAA;AAXF;;AAcA;EAEE,WAAA;EACA,cAAA;AAZF;;AAeA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;AAZF;;AAeA;EAEE,oCAAA;EACA,aAAA;EACA,YAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAbF;;AAgBA;EAEE,mBAAA;EACA,eAAA;EACA,SAAA;AAdF;;AAiBA;EAEE,oCAAA;EACA,aAAA;EACA,YAAA;EACA,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAfF;;AAkBA;EA9FE,eA+FmB;EA9FnB,iBA8FmB;EACnB,oCAAA;EACA,YAAA;EACA,gBAAA;EACA,uBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;AAdF;;AAiBA;EACE,mBAAA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,0GAAA;EAEA,sBAAA;EACA,cAAA;EACA,eAAA;EACA,oBAAA;EACA,wCAAA;EACA,cAAA;EACA,uBAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;EACA,6CAAA;EACA,iBAAA;EACA,0BAAA;EACA,mBAAA;EACA,kCAAA;EACA,eAAA;AAfF;AAgBE;EACE,0GAAA;EAEA,2BAAA;AAfJ;AAiBE;EACE,qIAAA;AAfJ;AAkBE;EACE,mCAAA;EACA,0BAAA;AAhBJ;;AAoBA;EACE,yBArLY;AAoKd;AAkBE;EACE,yBAAA;AAhBJ;;AAoBA;EACE,yBA7LU;AA4KZ;AAkBE;EACE,yBAAA;AAhBJ;;AAoBA;EAvKE,iBAwKmB;EAvKnB,mBAuKmB;AAhBrB;;AAmBA;EACE,kBAAA;EACA,cAAA;EACA,eAAA;AAhBF;;AAmBA;EAjLE,iBAkLmB;EAjLnB,mBAiLmB;EACnB,UAAA;AAfF;;AAkBA;EACE,kBAAA;AAfF;;AAkBA;;EAEE,YAAA;AAfF;;AAiBA;EACE,iBAAA;EACA,kBAAA;AAdF;;AAiBA;EAEE,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,uBAAA;EACA,uBAAA;EACA,cAAA;EACA,aAAA;EACA,iBAAA;EACA,YAAA;EACA,mBAAA;EACA,qBAAA;AAfF;;AA2BA;EAEE,SAAA;AAzBF;;AA4BA;;;EAhOE,iBAmOmB;EAlOnB,mBAkOmB;AAxBrB;;AA2BA;;EAEE,wBAAA;EACA,SAAA;AAxBF;;AA2BA;EACE,0BAAA;AAxBF;;AA2BE;EAhPA,iBAiPqB;EAhPrB,mBAgPqB;AAvBvB","sourcesContent":["$body-bg-color: #f2f2f2;\n$header-bg-color: #c40505;\n$footer-bg-color: #c40505;\n$red-color: #f36148;\n$green-color: #78e778;\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n  height: 100vh;\n}\n\nbody {\n  font-family: sans-serif;\n  background-color: $body-bg-color;\n}\n\n.blur {\n  filter: blur(1rem);\n}\n\n%flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@mixin font-size($size) {\n  font-size: $size;\n  line-height: $size;\n}\nheader {\n  @extend %flex-center;\n  width: 100%;\n  border-bottom: 1px solid gray;\n  background-color: $header-bg-color;\n  h1 {\n    font-size: 5rem;\n    margin: 1rem;\n    padding: 1rem;\n  }\n}\n\nmain {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  @extend %flex-center;\n  width: 100%;\n  flex-shrink: 0;\n  word-break: break-word;\n  background-color: $footer-bg-color;\n  margin-top: 2rem;\n  div {\n    font-size: 1.6rem;\n  }\n}\n\nfooter > * {\n  padding: 0.5rem;\n}\n\n.github-logo {\n  display: block;\n  width: 32px;\n  height: auto;\n}\n\n.main-wrapper {\n  @extend %flex-center;\n  flex-direction: column;\n  flex: 0 0 auto;\n  width: 100%;\n  min-height: 100vh;\n}\n\n.add-book-div {\n  @extend %flex-center;\n  width: 100%;\n  margin: 2rem 0;\n}\n\n.add-book-form-container {\n  display: none;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.add-book-form {\n  @extend %flex-center;\n  background-color: rgb(204, 219, 245);\n  height: 40rem;\n  width: 25rem;\n  flex-direction: column;\n  padding: 2rem;\n  border: 3px solid black;\n  border-radius: 2rem;\n}\n\n.book-list {\n  @extend %flex-center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 2rem;\n}\n\n.book-card {\n  @extend %flex-center;\n  background-color: rgb(204, 219, 245);\n  height: 40rem;\n  width: 25rem;\n  flex-direction: column;\n  padding: 2rem;\n  border: 3px solid black;\n  border-radius: 2rem;\n}\n\n.book-card-read {\n  @include font-size(3rem);\n  background-color: rgb(245, 245, 245);\n  height: auto;\n  max-width: 30rem;\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  cursor: pointer;\n  margin: 1rem;\n  padding: 1rem;\n  user-select: none;\n  border-radius: 0.5rem;\n  min-width: 50%;\n  text-align: center;\n}\n\nbutton {\n  align-items: center;\n  appearance: none;\n  background-color: #fcfcfd;\n  border-radius: 4px;\n  border-width: 0;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,\n    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #36395a;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: \"JetBrains Mono\", monospace;\n  height: 3.5rem;\n  justify-content: center;\n  line-height: 2rem;\n  list-style: none;\n  overflow: hidden;\n  padding: 1rem;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: box-shadow 0.15s, transform 0.15s;\n  user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow, transform;\n  font-size: 2rem;\n  &:hover {\n    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n    transform: translateY(-2px);\n  }\n  &:focus {\n    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  }\n  &:active {\n    box-shadow: #d6d6e7 0 3px 7px inset;\n    transform: translateY(2px);\n  }\n}\n\n.green {\n  background-color: $green-color;\n  &:hover {\n    background-color: darken($color: $green-color, $amount: 10%);\n  }\n}\n\n.red {\n  background-color: $red-color;\n  &:hover {\n    background-color: darken($color: $red-color, $amount: 10%);\n  }\n}\n\n.small-text {\n  @include font-size(1.5rem);\n}\n\nlabel {\n  text-align: center;\n  margin: 0.5rem;\n  padding: 0.5rem;\n}\n\n.error-p {\n  @include font-size(1.5rem);\n  color: red;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\ninput[type=\"text\"],\ninput[type=\"number\"] {\n  width: 20rem;\n}\ninput.invalid-data {\n  border-color: red;\n  outline-color: red;\n}\n\n%book-card-info {\n  @extend %flex-center;\n  text-align: center;\n  width: 70%;\n  background-color: rgb(245, 245, 245);\n  overflow-wrap: anywhere;\n  border: 1px solid black;\n  margin: 0.5rem;\n  padding: 1rem;\n  font-size: 2.4rem;\n  height: 5rem;\n  line-height: 2.4rem;\n  border-radius: 0.5rem;\n}\n.book-card-title {\n  @extend %book-card-info;\n}\n.book-card-author {\n  @extend %book-card-info;\n}\n.book-card-pages {\n  @extend %book-card-info;\n}\n\n.form-btn-wrapper {\n  @extend %flex-center;\n  gap: 2rem;\n}\n\n#title-error-p,\n#author-error-p,\n#pages-error-p {\n  @include font-size(1.5rem);\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=\"number\"] {\n  -moz-appearance: textfield;\n}\nlabel {\n  p {\n    @include font-size(1.5rem);\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "displayBooks": () => (/* binding */ displayBooks),
/* harmony export */   "formNumberInputLimit": () => (/* binding */ formNumberInputLimit),
/* harmony export */   "formNumberInputValidation": () => (/* binding */ formNumberInputValidation),
/* harmony export */   "formTextInputValidation": () => (/* binding */ formTextInputValidation),
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
  document.querySelector("#book-title").classList.remove("invalid-data");
  document.querySelector("#title-error-p").textContent = "Everything OK!";
  document.querySelector("#title-error-p").classList.remove("error-p");
  document.querySelector("#title-error-p").classList.add("hidden");
  document.querySelector("#book-author").classList.remove("invalid-data");
  document.querySelector("#author-error-p").textContent = "Everything OK!";
  document.querySelector("#author-error-p").classList.remove("error-p");
  document.querySelector("#author-error-p").classList.add("hidden");
  document.querySelector("#book-pages").classList.remove("invalid-data");
  document.querySelector("#pages-error-p").textContent = "Everything OK!";
  document.querySelector("#pages-error-p").classList.remove("error-p");
  document.querySelector("#pages-error-p").classList.add("hidden");
};

const submitForm = (event) => {
  event.preventDefault();
  const inputTitle = document.querySelector("#book-title");
  const inputAuthor = document.querySelector("#book-author");
  const inputPages = document.querySelector("#book-pages");
  if (
    inputTitle.validity.valid &&
    inputAuthor.validity.valid &&
    inputPages.validity.valid
  ) {
    addBookToLibrary();
  } else {
    if (inputTitle.validity.valueMissing) {
      inputTitle.classList.add("invalid-data");
      inputTitle.id === "book-title"
        ? (inputTitle.nextElementSibling.textContent = "You forgot book title")
        : (inputTitle.nextElementSibling.textContent =
            "You forgot book author");
      inputTitle.nextElementSibling.classList.add("error-p");
      inputTitle.classList.add("invalid-data");
      inputTitle.nextElementSibling.classList.remove("hidden");
    }
    if (inputAuthor.validity.valueMissing) {
      inputAuthor.classList.add("invalid-data");
      inputAuthor.id === "book-title"
        ? (inputAuthor.nextElementSibling.textContent = "You forgot book title")
        : (inputAuthor.nextElementSibling.textContent =
            "You forgot book author");
      inputAuthor.nextElementSibling.classList.add("error-p");
      inputAuthor.classList.add("invalid-data");
      inputAuthor.nextElementSibling.classList.remove("hidden");
    }
    if (inputPages.validity.valueMissing) {
      inputPages.classList.add("invalid-data");
      inputPages.nextElementSibling.textContent = "You forgot book pages";
      inputPages.nextElementSibling.classList.add("error-p");
      inputPages.classList.add("invalid-data");
      inputPages.nextElementSibling.classList.remove("hidden");
    }
  }
};

const formTextInputValidation = (event) => {
  if (event.target.validity.valid) {
    console.log(event.target.id);
    console.log("title ok");
    event.target.classList.remove("invalid-data");
    event.target.nextElementSibling.textContent = "Everything OK!";
    event.target.nextElementSibling.classList.remove("error-p");
    event.target.nextElementSibling.classList.add("hidden");
  } else if (event.target.validity.valueMissing) {
    console.log("title error");
    event.target.classList.add("invalid-data");
    event.target.id === "book-title"
      ? (event.target.nextElementSibling.textContent = "You forgot book title")
      : (event.target.nextElementSibling.textContent =
          "You forgot book author");
    event.target.nextElementSibling.classList.add("error-p");
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.classList.remove("hidden");
  } else {
    console.log("title error");
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.textContent = "What is this error";
    event.target.nextElementSibling.classList.add("error-p");
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.classList.remove("hidden");
  }
  if (event.target.value.length === 30) {
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.textContent = "Maximum 30 characters";
    event.target.nextElementSibling.classList.remove("hidden");
    event.target.nextElementSibling.classList.remove("error-p");
    event.target.classList.remove("invalid-data");
  }
};

const formNumberInputValidation = (event) => {
  if (event.target.validity.valid) {
    console.log("you are cool");
    event.target.classList.remove("invalid-data");
    event.target.nextElementSibling.textContent = "Everything OK!";
    event.target.nextElementSibling.classList.remove("error-p");
    event.target.nextElementSibling.classList.add("hidden");
  } else {
    console.log("number error");
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.textContent = "You forgot book pages";
    event.target.nextElementSibling.classList.add("error-p");
    event.target.classList.add("invalid-data");
    event.target.nextElementSibling.classList.remove("hidden");
  }
};

const formNumberInputLimit = (event) => {
  console.log(event.key);
  if (event.target.value.length >= 4) {
    event.preventDefault();
    event.target.nextElementSibling.textContent = "Max number is 9999";
    event.target.nextElementSibling.classList.remove("hidden");
  }
  let invalidChars = ["-", "+", "e"];
  if (invalidChars.includes(event.key)) event.preventDefault();
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
  formBookTitleErrorPara.classList.add("hidden");
  formBookTitleErrorPara.setAttribute("id", "title-error-p");
  formBookTitleErrorPara.textContent = "Everything OK!";
  const formBookAuthor = document.createElement("label");
  const formBookAuthorPara = document.createElement("p");
  formBookAuthorPara.textContent = "Author";
  formBookAuthor.appendChild(formBookAuthorPara);
  const formBookAuthorInput = document.createElement("input");
  formBookAuthorInput.setAttribute("type", "text");
  formBookAuthorInput.setAttribute("id", "book-author");
  formBookAuthorInput.setAttribute("name", "book-author");
  formBookAuthorInput.setAttribute("maxlength", "30");
  formBookAuthorInput.setAttribute("placeholder", "George Orwell");
  formBookAuthorInput.setAttribute("required", "");
  const formBookAuthorErrorPara = document.createElement("p");
  formBookAuthorErrorPara.classList.add("hidden");
  formBookAuthorErrorPara.setAttribute("id", "author-error-p");
  formBookAuthorErrorPara.textContent = "Everything OK!";
  const formBookPages = document.createElement("label");
  const formBookPagesPara = document.createElement("p");
  formBookPagesPara.textContent = "Pages";
  formBookPages.appendChild(formBookPagesPara);
  const formBookPagesInput = document.createElement("input");
  formBookPagesInput.setAttribute("type", "number");
  formBookPagesInput.setAttribute("id", "book-pages");
  formBookPagesInput.setAttribute("name", "book-pages");
  formBookPagesInput.setAttribute("min", "0");
  formBookPagesInput.setAttribute("max", "9999");
  formBookPagesInput.setAttribute("placeholder", "328");
  formBookPagesInput.setAttribute("required", "");
  const formBookPagesErrorPara = document.createElement("p");
  formBookPagesErrorPara.classList.add("hidden");
  formBookPagesErrorPara.setAttribute("id", "pages-error-p");
  formBookPagesErrorPara.textContent = "Everything OK!";
  const formBookRead = document.createElement("label");
  const formBookReadPara = document.createElement("p");
  formBookReadPara.textContent = "Read";
  formBookRead.appendChild(formBookReadPara);
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

const initialiseEventListeners = () => {
  document
    .querySelector(".add-book-button")
    .addEventListener("click", _logic__WEBPACK_IMPORTED_MODULE_2__.openForm);
  document
    .querySelector(".submit-form-button")
    .addEventListener("click", _logic__WEBPACK_IMPORTED_MODULE_2__.submitForm);
  document
    .querySelector(".cancel-form-button")
    .addEventListener("click", _logic__WEBPACK_IMPORTED_MODULE_2__.closeForm);
  document
    .querySelector("#book-title")
    .addEventListener("input", _logic__WEBPACK_IMPORTED_MODULE_2__.formTextInputValidation);
  document
    .querySelector("#book-title")
    .addEventListener("focusout", _logic__WEBPACK_IMPORTED_MODULE_2__.formTextInputValidation);
  document
    .querySelector("#book-author")
    .addEventListener("input", _logic__WEBPACK_IMPORTED_MODULE_2__.formTextInputValidation);
  document
    .querySelector("#book-author")
    .addEventListener("focusout", _logic__WEBPACK_IMPORTED_MODULE_2__.formTextInputValidation);
  document
    .querySelector("#book-pages")
    .addEventListener("keypress", _logic__WEBPACK_IMPORTED_MODULE_2__.formNumberInputLimit);
  document
    .querySelector("#book-pages")
    .addEventListener("input", _logic__WEBPACK_IMPORTED_MODULE_2__.formNumberInputValidation);
  document
    .querySelector("#book-pages")
    .addEventListener("focusout", _logic__WEBPACK_IMPORTED_MODULE_2__.formNumberInputValidation);
};

const renderPage = (event) => {
  createPage(event);
  initialiseEventListeners();
  (0,_logic__WEBPACK_IMPORTED_MODULE_2__.getFromLocalStorage)();
  console.log(_logic__WEBPACK_IMPORTED_MODULE_2__.myLibrary);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxUnNCO0FBQ0E7QUFDZ0I7QUFXckI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msd0NBQVU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNENBQVE7QUFDdkM7QUFDQTtBQUNBLCtCQUErQiw4Q0FBVTtBQUN6QztBQUNBO0FBQ0EsK0JBQStCLDZDQUFTO0FBQ3hDO0FBQ0E7QUFDQSwrQkFBK0IsMkRBQXVCO0FBQ3REO0FBQ0E7QUFDQSxrQ0FBa0MsMkRBQXVCO0FBQ3pEO0FBQ0E7QUFDQSwrQkFBK0IsMkRBQXVCO0FBQ3REO0FBQ0E7QUFDQSxrQ0FBa0MsMkRBQXVCO0FBQ3pEO0FBQ0E7QUFDQSxrQ0FBa0Msd0RBQW9CO0FBQ3REO0FBQ0E7QUFDQSwrQkFBK0IsNkRBQXlCO0FBQ3hEO0FBQ0E7QUFDQSxrQ0FBa0MsNkRBQXlCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQW1CO0FBQ3JCLGNBQWMsNkNBQVM7QUFDdkIsRUFBRSxvREFBWTtBQUNkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hNQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7O0FDQWtDOztBQUVsQyw4Q0FBOEMsMkNBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL29kaW4tbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWxpYnJhcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbn1cXG5cXG4uYmx1ciB7XFxuICBmaWx0ZXI6IGJsdXIoMXJlbSk7XFxufVxcblxcbi5mb3JtLWJ0bi13cmFwcGVyLCAuYm9vay1jYXJkLXBhZ2VzLCAuYm9vay1jYXJkLWF1dGhvciwgLmJvb2stY2FyZC10aXRsZSwgLmJvb2stY2FyZCwgLmJvb2stbGlzdCwgLmFkZC1ib29rLWZvcm0sIC5hZGQtYm9vay1kaXYsIC5tYWluLXdyYXBwZXIsIGZvb3RlciwgaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0MDUwNTtcXG59XFxuaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0MDUwNTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcbmZvb3RlciBkaXYge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbmZvb3RlciA+ICoge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZ2l0aHViLWxvZ28ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLm1haW4td3JhcHBlciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uYWRkLWJvb2stZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAycmVtIDA7XFxufVxcblxcbi5hZGQtYm9vay1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmFkZC1ib29rLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjE5LCAyNDUpO1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4uYm9vay1saXN0IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5ib29rLWNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjE5LCAyNDUpO1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4uYm9vay1jYXJkLXJlYWQge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG1pbi13aWR0aDogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZkO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSg0NSwgMzUsIDY2LCAwLjQpIDAgMnB4IDRweCwgcmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwgI2Q2ZDZlNyAwIC0zcHggMCBpbnNldDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzM2Mzk1YTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKZXRCcmFpbnMgTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMsIHRyYW5zZm9ybSAwLjE1cztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3csIHRyYW5zZm9ybTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoNDUsIDM1LCA2NiwgMC40KSAwIDRweCA4cHgsIHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsICNkNmQ2ZTcgMCAtM3B4IDAgaW5zZXQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxufVxcbmJ1dHRvbjpmb2N1cyB7XFxuICBib3gtc2hhZG93OiAjZDZkNmU3IDAgMCAwIDEuNXB4IGluc2V0LCByZ2JhKDQ1LCAzNSwgNjYsIDAuNCkgMCAycHggNHB4LCByZ2JhKDQ1LCAzNSwgNjYsIDAuMykgMCA3cHggMTNweCAtM3B4LCAjZDZkNmU3IDAgLTNweCAwIGluc2V0O1xcbn1cXG5idXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6ICNkNmQ2ZTcgMCAzcHggN3B4IGluc2V0O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxufVxcblxcbi5ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhlNzc4O1xcbn1cXG4uZ3JlZW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkZGY0ZDtcXG59XFxuXFxuLnJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM2MTQ4O1xcbn1cXG4ucmVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDM4MTg7XFxufVxcblxcbi5zbWFsbC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxubGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5lcnJvci1wIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLFxcbmlucHV0W3R5cGU9bnVtYmVyXSB7XFxuICB3aWR0aDogMjByZW07XFxufVxcblxcbmlucHV0LmludmFsaWQtZGF0YSB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG4gIG91dGxpbmUtY29sb3I6IHJlZDtcXG59XFxuXFxuLmJvb2stY2FyZC1wYWdlcywgLmJvb2stY2FyZC1hdXRob3IsIC5ib29rLWNhcmQtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5mb3JtLWJ0bi13cmFwcGVyIHtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuI3RpdGxlLWVycm9yLXAsXFxuI2F1dGhvci1lcnJvci1wLFxcbiNwYWdlcy1lcnJvci1wIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxufVxcblxcbmxhYmVsIHAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFMRjs7QUFRQTtFQUNFLHVCQUFBO0VBQ0EseUJBbEJjO0FBYWhCOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTEY7O0FBV0E7RUFFRSxXQUFBO0VBQ0EsNkJBQUE7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JGJvZHktYmctY29sb3I6ICNmMmYyZjI7XFxuJGhlYWRlci1iZy1jb2xvcjogI2M0MDUwNTtcXG4kZm9vdGVyLWJnLWNvbG9yOiAjYzQwNTA1O1xcbiRyZWQtY29sb3I6ICNmMzYxNDg7XFxuJGdyZWVuLWNvbG9yOiAjNzhlNzc4O1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnLWNvbG9yO1xcbn1cXG5cXG4uYmx1ciB7XFxuICBmaWx0ZXI6IGJsdXIoMXJlbSk7XFxufVxcblxcbiVmbGV4LWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWl4aW4gZm9udC1zaXplKCRzaXplKSB7XFxuICBmb250LXNpemU6ICRzaXplO1xcbiAgbGluZS1oZWlnaHQ6ICRzaXplO1xcbn1cXG5oZWFkZXIge1xcbiAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1iZy1jb2xvcjtcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIEBleHRlbmQgJWZsZXgtY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LXNocmluazogMDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9vdGVyLWJnLWNvbG9yO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgfVxcbn1cXG5cXG5mb290ZXIgPiAqIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmdpdGh1Yi1sb2dvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5tYWluLXdyYXBwZXIge1xcbiAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uYWRkLWJvb2stZGl2IHtcXG4gIEBleHRlbmQgJWZsZXgtY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDJyZW0gMDtcXG59XFxuXFxuLmFkZC1ib29rLWZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uYWRkLWJvb2stZm9ybSB7XFxuICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDIxOSwgMjQ1KTtcXG4gIGhlaWdodDogNDByZW07XFxuICB3aWR0aDogMjVyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLmJvb2stbGlzdCB7XFxuICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5ib29rLWNhcmQge1xcbiAgQGV4dGVuZCAlZmxleC1jZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMTksIDI0NSk7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbi5ib29rLWNhcmQtcmVhZCB7XFxuICBAaW5jbHVkZSBmb250LXNpemUoM3JlbSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDMwcmVtO1xcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG1pbi13aWR0aDogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZkO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYm94LXNoYWRvdzogcmdiYSg0NSwgMzUsIDY2LCAwLjQpIDAgMnB4IDRweCxcXG4gICAgcmdiYSg0NSwgMzUsIDY2LCAwLjMpIDAgN3B4IDEzcHggLTNweCwgI2Q2ZDZlNyAwIC0zcHggMCBpbnNldDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzM2Mzk1YTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKZXRCcmFpbnMgTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIGhlaWdodDogMy41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMsIHRyYW5zZm9ybSAwLjE1cztcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3csIHRyYW5zZm9ybTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gICY6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDQ1LCAzNSwgNjYsIDAuNCkgMCA0cHggOHB4LFxcbiAgICAgIHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsICNkNmQ2ZTcgMCAtM3B4IDAgaW5zZXQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG4gIH1cXG4gICY6Zm9jdXMge1xcbiAgICBib3gtc2hhZG93OiAjZDZkNmU3IDAgMCAwIDEuNXB4IGluc2V0LCByZ2JhKDQ1LCAzNSwgNjYsIDAuNCkgMCAycHggNHB4LFxcbiAgICAgIHJnYmEoNDUsIDM1LCA2NiwgMC4zKSAwIDdweCAxM3B4IC0zcHgsICNkNmQ2ZTcgMCAtM3B4IDAgaW5zZXQ7XFxuICB9XFxuICAmOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6ICNkNmQ2ZTcgMCAzcHggN3B4IGluc2V0O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG4gIH1cXG59XFxuXFxuLmdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmVlbi1jb2xvcjtcXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiAkZ3JlZW4tY29sb3IsICRhbW91bnQ6IDEwJSk7XFxuICB9XFxufVxcblxcbi5yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHJlZC1jb2xvcjtcXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiAkcmVkLWNvbG9yLCAkYW1vdW50OiAxMCUpO1xcbiAgfVxcbn1cXG5cXG4uc21hbGwtdGV4dCB7XFxuICBAaW5jbHVkZSBmb250LXNpemUoMS41cmVtKTtcXG59XFxuXFxubGFiZWwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5lcnJvci1wIHtcXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgxLjVyZW0pO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICB3aWR0aDogMjByZW07XFxufVxcbmlucHV0LmludmFsaWQtZGF0YSB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG4gIG91dGxpbmUtY29sb3I6IHJlZDtcXG59XFxuXFxuJWJvb2stY2FyZC1pbmZvIHtcXG4gIEBleHRlbmQgJWZsZXgtY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcbi5ib29rLWNhcmQtdGl0bGUge1xcbiAgQGV4dGVuZCAlYm9vay1jYXJkLWluZm87XFxufVxcbi5ib29rLWNhcmQtYXV0aG9yIHtcXG4gIEBleHRlbmQgJWJvb2stY2FyZC1pbmZvO1xcbn1cXG4uYm9vay1jYXJkLXBhZ2VzIHtcXG4gIEBleHRlbmQgJWJvb2stY2FyZC1pbmZvO1xcbn1cXG5cXG4uZm9ybS1idG4td3JhcHBlciB7XFxuICBAZXh0ZW5kICVmbGV4LWNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuI3RpdGxlLWVycm9yLXAsXFxuI2F1dGhvci1lcnJvci1wLFxcbiNwYWdlcy1lcnJvci1wIHtcXG4gIEBpbmNsdWRlIGZvbnQtc2l6ZSgxLjVyZW0pO1xcbn1cXG5cXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbn1cXG5sYWJlbCB7XFxuICBwIHtcXG4gICAgQGluY2x1ZGUgZm9udC1zaXplKDEuNXJlbSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7XG4gIGdldEZyb21Mb2NhbFN0b3JhZ2UsXG4gIG9wZW5Gb3JtLFxuICBjbG9zZUZvcm0sXG4gIGRpc3BsYXlCb29rcyxcbiAgbXlMaWJyYXJ5LFxuICBzdWJtaXRGb3JtLFxuICBmb3JtVGV4dElucHV0VmFsaWRhdGlvbixcbiAgZm9ybU51bWJlcklucHV0VmFsaWRhdGlvbixcbiAgZm9ybU51bWJlcklucHV0TGltaXQsXG59O1xubGV0IG15TGlicmFyeSA9IFtdO1xuXG5jbGFzcyBCb29rIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWQpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XG4gICAgdGhpcy5wYWdlcyA9IHBhZ2VzO1xuICAgIHRoaXMucmVhZCA9IHJlYWQ7XG4gIH1cbn1cblxuY29uc3QgYWRkU29tZUJvb2tzID0gKCkgPT4ge1xuICBsZXQgYm9vaztcbiAgYm9vayA9IG5ldyBCb29rKFwiVGhlIFdpc2RvbSBPZiBDcm93ZHNcIiwgXCJKb2UgQWJlcmNyb21iaWVcIiwgXCI1MjhcIiwgZmFsc2UpO1xuICBteUxpYnJhcnkucHVzaChib29rKTtcbiAgYm9vayA9IG5ldyBCb29rKFwiQSBHYW1lIG9mIFRocm9uZXNcIiwgXCJHZW9yZ2UgUi5SLiBNYXJ0aW5cIiwgXCI3MjBcIiwgdHJ1ZSk7XG4gIG15TGlicmFyeS5wdXNoKGJvb2spO1xuICBhZGRUb0xvY2FsU3RvcmFnZSgpO1xufTtcblxuY29uc3QgYWRkQm9va1RvTGlicmFyeSA9ICgpID0+IHtcbiAgaWYgKG15TGlicmFyeSA9PT0gbnVsbCkge1xuICAgIG15TGlicmFyeSA9IFtdO1xuICB9XG4gIGxldCBib29rO1xuICBib29rID0gbmV3IEJvb2soXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLXRpdGxlXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1hdXRob3JcIikudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLXBhZ2VzXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1yZWFkXCIpLmNoZWNrZWRcbiAgKTtcblxuICBteUxpYnJhcnkucHVzaChib29rKTtcbiAgY2xvc2VGb3JtKCk7XG4gIHJlc2V0Qm9va0xpc3QoKTtcbiAgZGlzcGxheUJvb2tzKCk7XG4gIGFkZFRvTG9jYWxTdG9yYWdlKCk7XG59O1xuXG5jb25zdCByZXNldEJvb2tMaXN0ID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2stbGlzdFwiKS5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuY29uc3QgZGlzcGxheUJvb2tzID0gKCkgPT4ge1xuICBpZiAobXlMaWJyYXJ5ID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBteUxpYnJhcnkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBib29rQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm9va0NhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm9va0NhcmRUaXRsZVNtYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZEF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm9va0NhcmRBdXRob3JTbWFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm9va0NhcmRQYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYm9va0NhcmRQYWdlc1NtYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBib29rQ2FyZFJlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJvb2tDYXJkRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGJvb2tDYXJkLmNsYXNzTGlzdC5hZGQoXCJib29rLWNhcmRcIik7XG4gICAgYm9va0NhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiYm9vay1jYXJkLXRpdGxlXCIpO1xuICAgIGJvb2tDYXJkVGl0bGVTbWFsbC5jbGFzc0xpc3QuYWRkKFwic21hbGwtdGV4dFwiKTtcbiAgICBib29rQ2FyZEF1dGhvci5jbGFzc0xpc3QuYWRkKFwiYm9vay1jYXJkLWF1dGhvclwiKTtcbiAgICBib29rQ2FyZEF1dGhvclNtYWxsLmNsYXNzTGlzdC5hZGQoXCJzbWFsbC10ZXh0XCIpO1xuICAgIGJvb2tDYXJkUGFnZXMuY2xhc3NMaXN0LmFkZChcImJvb2stY2FyZC1wYWdlc1wiKTtcbiAgICBib29rQ2FyZFBhZ2VzU21hbGwuY2xhc3NMaXN0LmFkZChcInNtYWxsLXRleHRcIik7XG4gICAgYm9va0NhcmRSZWFkLmNsYXNzTGlzdC5hZGQoXCJib29rLWNhcmQtcmVhZFwiKTtcblxuICAgIGJvb2tDYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtbnVtYmVyXCIsIGkpO1xuXG4gICAgYm9va0NhcmRUaXRsZS50ZXh0Q29udGVudCA9IG15TGlicmFyeVtpXS50aXRsZTtcbiAgICBib29rQ2FyZFRpdGxlU21hbGwudGV4dENvbnRlbnQgPSBcInRpdGxlXCI7XG4gICAgYm9va0NhcmRBdXRob3IudGV4dENvbnRlbnQgPSBteUxpYnJhcnlbaV0uYXV0aG9yO1xuICAgIGJvb2tDYXJkQXV0aG9yU21hbGwudGV4dENvbnRlbnQgPSBcImF1dGhvclwiO1xuICAgIGJvb2tDYXJkUGFnZXMudGV4dENvbnRlbnQgPSBteUxpYnJhcnlbaV0ucGFnZXM7XG4gICAgYm9va0NhcmRQYWdlc1NtYWxsLnRleHRDb250ZW50ID0gXCJwYWdlc1wiO1xuICAgIGlmIChteUxpYnJhcnlbaV0ucmVhZCkge1xuICAgICAgYm9va0NhcmRSZWFkLnRleHRDb250ZW50ID0gXCJSZWFkXCI7XG4gICAgICBib29rQ2FyZFJlYWQuY2xhc3NMaXN0LmFkZChcImdyZWVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib29rQ2FyZFJlYWQudGV4dENvbnRlbnQgPSBcIk5vdCByZWFkXCI7XG4gICAgICBib29rQ2FyZFJlYWQuY2xhc3NMaXN0LmFkZChcInJlZFwiKTtcbiAgICB9XG4gICAgYm9va0NhcmREZWxldGUudGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBib29rXCI7XG5cbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChib29rQ2FyZFRpdGxlKTtcbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChib29rQ2FyZFRpdGxlU21hbGwpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkQXV0aG9yKTtcbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChib29rQ2FyZEF1dGhvclNtYWxsKTtcbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChib29rQ2FyZFBhZ2VzKTtcbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChib29rQ2FyZFBhZ2VzU21hbGwpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGJvb2tDYXJkUmVhZCk7XG4gICAgYm9va0NhcmQuYXBwZW5kQ2hpbGQoYm9va0NhcmREZWxldGUpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9vay1saXN0XCIpLmFwcGVuZENoaWxkKGJvb2tDYXJkKTtcblxuICAgIGJvb2tDYXJkRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVCb29rKTtcbiAgICBib29rQ2FyZFJlYWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVJlYWQpO1xuICB9XG59O1xuXG5jb25zdCBvcGVuRm9ybSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXdyYXBwZXJcIikuY2xhc3NMaXN0LmFkZChcImJsdXJcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWJvb2stZm9ybS1jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn07XG5cbmNvbnN0IGNsb3NlRm9ybSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXdyYXBwZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWJvb2stZm9ybS1jb250YWluZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIGNsZWFyRm9ybUlucHV0cygpO1xufTtcblxuY29uc3QgZGVsZXRlQm9vayA9IChlKSA9PiB7XG4gIGxldCBhdHRyaWJ1dGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbnVtYmVyXCIpO1xuICBteUxpYnJhcnkuc3BsaWNlKGF0dHJpYnV0ZSwgMSk7XG4gIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gIHJlc2V0Qm9va0xpc3QoKTtcbiAgZGlzcGxheUJvb2tzKCk7XG4gIGFkZFRvTG9jYWxTdG9yYWdlKCk7XG59O1xuXG5jb25zdCB0b2dnbGVSZWFkID0gKGUpID0+IHtcbiAgbGV0IGF0dHJpYnV0ZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1udW1iZXJcIik7XG4gIGlmIChteUxpYnJhcnlbYXR0cmlidXRlXS5yZWFkKSB7XG4gICAgbXlMaWJyYXJ5W2F0dHJpYnV0ZV0ucmVhZCA9IGZhbHNlO1xuICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJOb3QgcmVhZFwiO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJncmVlblwiKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicmVkXCIpO1xuICB9IGVsc2Uge1xuICAgIG15TGlicmFyeVthdHRyaWJ1dGVdLnJlYWQgPSB0cnVlO1xuICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJSZWFkXCI7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInJlZFwiKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5cIik7XG4gIH1cbiAgYWRkVG9Mb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IGFkZFRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm15TGlicmFyeUxvY2FsXCIsIEpTT04uc3RyaW5naWZ5KG15TGlicmFyeSkpO1xufTtcblxuY29uc3QgZ2V0RnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgbXlMaWJyYXJ5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15TGlicmFyeUxvY2FsXCIpKTtcbn07XG5cbmNvbnN0IGNsZWFyTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbn07XG5cbmNvbnN0IGNsZWFyRm9ybUlucHV0cyA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLXRpdGxlXCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLWF1dGhvclwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1wYWdlc1wiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1yZWFkXCIpLmNoZWNrZWQgPSBmYWxzZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLXRpdGxlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkLWRhdGFcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUtZXJyb3ItcFwiKS50ZXh0Q29udGVudCA9IFwiRXZlcnl0aGluZyBPSyFcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZS1lcnJvci1wXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvci1wXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlLWVycm9yLXBcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLWF1dGhvclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZC1kYXRhXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1dGhvci1lcnJvci1wXCIpLnRleHRDb250ZW50ID0gXCJFdmVyeXRoaW5nIE9LIVwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1dGhvci1lcnJvci1wXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvci1wXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1dGhvci1lcnJvci1wXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1wYWdlc1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZC1kYXRhXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2VzLWVycm9yLXBcIikudGV4dENvbnRlbnQgPSBcIkV2ZXJ5dGhpbmcgT0shXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFnZXMtZXJyb3ItcFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3ItcFwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlcy1lcnJvci1wXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59O1xuXG5jb25zdCBzdWJtaXRGb3JtID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stdGl0bGVcIik7XG4gIGNvbnN0IGlucHV0QXV0aG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLWF1dGhvclwiKTtcbiAgY29uc3QgaW5wdXRQYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1wYWdlc1wiKTtcbiAgaWYgKFxuICAgIGlucHV0VGl0bGUudmFsaWRpdHkudmFsaWQgJiZcbiAgICBpbnB1dEF1dGhvci52YWxpZGl0eS52YWxpZCAmJlxuICAgIGlucHV0UGFnZXMudmFsaWRpdHkudmFsaWRcbiAgKSB7XG4gICAgYWRkQm9va1RvTGlicmFyeSgpO1xuICB9IGVsc2Uge1xuICAgIGlmIChpbnB1dFRpdGxlLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgaW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZC1kYXRhXCIpO1xuICAgICAgaW5wdXRUaXRsZS5pZCA9PT0gXCJib29rLXRpdGxlXCJcbiAgICAgICAgPyAoaW5wdXRUaXRsZS5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQgPSBcIllvdSBmb3Jnb3QgYm9vayB0aXRsZVwiKVxuICAgICAgICA6IChpbnB1dFRpdGxlLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBcIllvdSBmb3Jnb3QgYm9vayBhdXRob3JcIik7XG4gICAgICBpbnB1dFRpdGxlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItcFwiKTtcbiAgICAgIGlucHV0VGl0bGUuY2xhc3NMaXN0LmFkZChcImludmFsaWQtZGF0YVwiKTtcbiAgICAgIGlucHV0VGl0bGUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuICAgIGlmIChpbnB1dEF1dGhvci52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIGlucHV0QXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkLWRhdGFcIik7XG4gICAgICBpbnB1dEF1dGhvci5pZCA9PT0gXCJib29rLXRpdGxlXCJcbiAgICAgICAgPyAoaW5wdXRBdXRob3IubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gXCJZb3UgZm9yZ290IGJvb2sgdGl0bGVcIilcbiAgICAgICAgOiAoaW5wdXRBdXRob3IubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIFwiWW91IGZvcmdvdCBib29rIGF1dGhvclwiKTtcbiAgICAgIGlucHV0QXV0aG9yLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItcFwiKTtcbiAgICAgIGlucHV0QXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkLWRhdGFcIik7XG4gICAgICBpbnB1dEF1dGhvci5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9XG4gICAgaWYgKGlucHV0UGFnZXMudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBpbnB1dFBhZ2VzLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkLWRhdGFcIik7XG4gICAgICBpbnB1dFBhZ2VzLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IFwiWW91IGZvcmdvdCBib29rIHBhZ2VzXCI7XG4gICAgICBpbnB1dFBhZ2VzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItcFwiKTtcbiAgICAgIGlucHV0UGFnZXMuY2xhc3NMaXN0LmFkZChcImludmFsaWQtZGF0YVwiKTtcbiAgICAgIGlucHV0UGFnZXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBmb3JtVGV4dElucHV0VmFsaWRhdGlvbiA9IChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlkKTtcbiAgICBjb25zb2xlLmxvZyhcInRpdGxlIG9rXCIpO1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZC1kYXRhXCIpO1xuICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQgPSBcIkV2ZXJ5dGhpbmcgT0shXCI7XG4gICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3ItcFwiKTtcbiAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGNvbnNvbGUubG9nKFwidGl0bGUgZXJyb3JcIik7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkLWRhdGFcIik7XG4gICAgZXZlbnQudGFyZ2V0LmlkID09PSBcImJvb2stdGl0bGVcIlxuICAgICAgPyAoZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IFwiWW91IGZvcmdvdCBib29rIHRpdGxlXCIpXG4gICAgICA6IChldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID1cbiAgICAgICAgICBcIllvdSBmb3Jnb3QgYm9vayBhdXRob3JcIik7XG4gICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItcFwiKTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImludmFsaWQtZGF0YVwiKTtcbiAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJ0aXRsZSBlcnJvclwiKTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImludmFsaWQtZGF0YVwiKTtcbiAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gXCJXaGF0IGlzIHRoaXMgZXJyb3JcIjtcbiAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJlcnJvci1wXCIpO1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZC1kYXRhXCIpO1xuICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PT0gMzApIHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImludmFsaWQtZGF0YVwiKTtcbiAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gXCJNYXhpbXVtIDMwIGNoYXJhY3RlcnNcIjtcbiAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3ItcFwiKTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWQtZGF0YVwiKTtcbiAgfVxufTtcblxuY29uc3QgZm9ybU51bWJlcklucHV0VmFsaWRhdGlvbiA9IChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgY29uc29sZS5sb2coXCJ5b3UgYXJlIGNvb2xcIik7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkLWRhdGFcIik7XG4gICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IFwiRXZlcnl0aGluZyBPSyFcIjtcbiAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvci1wXCIpO1xuICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIm51bWJlciBlcnJvclwiKTtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImludmFsaWQtZGF0YVwiKTtcbiAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gXCJZb3UgZm9yZ290IGJvb2sgcGFnZXNcIjtcbiAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJlcnJvci1wXCIpO1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZC1kYXRhXCIpO1xuICAgIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxufTtcblxuY29uc3QgZm9ybU51bWJlcklucHV0TGltaXQgPSAoZXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coZXZlbnQua2V5KTtcbiAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPj0gNCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IFwiTWF4IG51bWJlciBpcyA5OTk5XCI7XG4gICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG4gIGxldCBpbnZhbGlkQ2hhcnMgPSBbXCItXCIsIFwiK1wiLCBcImVcIl07XG4gIGlmIChpbnZhbGlkQ2hhcnMuaW5jbHVkZXMoZXZlbnQua2V5KSkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG4iLCJleHBvcnQgeyByZW5kZXJQYWdlIH07XG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBHaXRodWJMb2dvIGZyb20gXCIuL2dpdGh1Yi5wbmdcIjtcbmltcG9ydCB7XG4gIGdldEZyb21Mb2NhbFN0b3JhZ2UsXG4gIG9wZW5Gb3JtLFxuICBjbG9zZUZvcm0sXG4gIGRpc3BsYXlCb29rcyxcbiAgbXlMaWJyYXJ5LFxuICBzdWJtaXRGb3JtLFxuICBmb3JtVGV4dElucHV0VmFsaWRhdGlvbixcbiAgZm9ybU51bWJlcklucHV0VmFsaWRhdGlvbixcbiAgZm9ybU51bWJlcklucHV0TGltaXQsXG59IGZyb20gXCIuL2xvZ2ljXCI7XG5cbmNvbnN0IGNyZWF0ZVdyYXBwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbldyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1haW4td3JhcHBlclwiKTtcblxuICByZXR1cm4gbWFpbldyYXBwZXI7XG59O1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiTGlicmFyeVwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5jb25zdCBjcmVhdGVGb3JtID0gKCkgPT4ge1xuICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJvb2stZm9ybS1jb250YWluZXJcIik7XG4gIGNvbnN0IGZvcm1EaXZGb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtRGl2Rm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImFkZC1ib29rLWZvcm1cIik7XG4gIGNvbnN0IGZvcm1Cb29rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGZvcm1Cb29rVGl0bGVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvcm1Cb29rVGl0bGVQYXJhLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xuICBmb3JtQm9va1RpdGxlLmFwcGVuZENoaWxkKGZvcm1Cb29rVGl0bGVQYXJhKTtcbiAgY29uc3QgZm9ybUJvb2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBmb3JtQm9va1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGZvcm1Cb29rVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJvb2stdGl0bGVcIik7XG4gIGZvcm1Cb29rVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiYm9vay10aXRsZVwiKTtcbiAgZm9ybUJvb2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjMwXCIpO1xuICBmb3JtQm9va1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIxOTg0XCIpO1xuICBmb3JtQm9va1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIGNvbnN0IGZvcm1Cb29rVGl0bGVFcnJvclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9ybUJvb2tUaXRsZUVycm9yUGFyYS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBmb3JtQm9va1RpdGxlRXJyb3JQYXJhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGUtZXJyb3ItcFwiKTtcbiAgZm9ybUJvb2tUaXRsZUVycm9yUGFyYS50ZXh0Q29udGVudCA9IFwiRXZlcnl0aGluZyBPSyFcIjtcbiAgY29uc3QgZm9ybUJvb2tBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGZvcm1Cb29rQXV0aG9yUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmb3JtQm9va0F1dGhvclBhcmEudGV4dENvbnRlbnQgPSBcIkF1dGhvclwiO1xuICBmb3JtQm9va0F1dGhvci5hcHBlbmRDaGlsZChmb3JtQm9va0F1dGhvclBhcmEpO1xuICBjb25zdCBmb3JtQm9va0F1dGhvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBmb3JtQm9va0F1dGhvcklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBmb3JtQm9va0F1dGhvcklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYm9vay1hdXRob3JcIik7XG4gIGZvcm1Cb29rQXV0aG9ySW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImJvb2stYXV0aG9yXCIpO1xuICBmb3JtQm9va0F1dGhvcklucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjMwXCIpO1xuICBmb3JtQm9va0F1dGhvcklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiR2VvcmdlIE9yd2VsbFwiKTtcbiAgZm9ybUJvb2tBdXRob3JJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgY29uc3QgZm9ybUJvb2tBdXRob3JFcnJvclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9ybUJvb2tBdXRob3JFcnJvclBhcmEuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgZm9ybUJvb2tBdXRob3JFcnJvclBhcmEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhdXRob3ItZXJyb3ItcFwiKTtcbiAgZm9ybUJvb2tBdXRob3JFcnJvclBhcmEudGV4dENvbnRlbnQgPSBcIkV2ZXJ5dGhpbmcgT0shXCI7XG4gIGNvbnN0IGZvcm1Cb29rUGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGZvcm1Cb29rUGFnZXNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvcm1Cb29rUGFnZXNQYXJhLnRleHRDb250ZW50ID0gXCJQYWdlc1wiO1xuICBmb3JtQm9va1BhZ2VzLmFwcGVuZENoaWxkKGZvcm1Cb29rUGFnZXNQYXJhKTtcbiAgY29uc3QgZm9ybUJvb2tQYWdlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBmb3JtQm9va1BhZ2VzSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKTtcbiAgZm9ybUJvb2tQYWdlc0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYm9vay1wYWdlc1wiKTtcbiAgZm9ybUJvb2tQYWdlc0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJib29rLXBhZ2VzXCIpO1xuICBmb3JtQm9va1BhZ2VzSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIFwiMFwiKTtcbiAgZm9ybUJvb2tQYWdlc0lucHV0LnNldEF0dHJpYnV0ZShcIm1heFwiLCBcIjk5OTlcIik7XG4gIGZvcm1Cb29rUGFnZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIjMyOFwiKTtcbiAgZm9ybUJvb2tQYWdlc0lucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBjb25zdCBmb3JtQm9va1BhZ2VzRXJyb3JQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvcm1Cb29rUGFnZXNFcnJvclBhcmEuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgZm9ybUJvb2tQYWdlc0Vycm9yUGFyYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBhZ2VzLWVycm9yLXBcIik7XG4gIGZvcm1Cb29rUGFnZXNFcnJvclBhcmEudGV4dENvbnRlbnQgPSBcIkV2ZXJ5dGhpbmcgT0shXCI7XG4gIGNvbnN0IGZvcm1Cb29rUmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZm9ybUJvb2tSZWFkUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmb3JtQm9va1JlYWRQYXJhLnRleHRDb250ZW50ID0gXCJSZWFkXCI7XG4gIGZvcm1Cb29rUmVhZC5hcHBlbmRDaGlsZChmb3JtQm9va1JlYWRQYXJhKTtcbiAgY29uc3QgZm9ybUJvb2tSZWFkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGZvcm1Cb29rUmVhZElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgZm9ybUJvb2tSZWFkSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJib29rLXJlYWRcIik7XG4gIGZvcm1Cb29rUmVhZElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJib29rLXJlYWRcIik7XG4gIGNvbnN0IGZvcm1Cb29rQnV0dG9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtQm9va0J1dHRvbnNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0bi13cmFwcGVyXCIpO1xuICBjb25zdCBmb3JtQm9va1N1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGZvcm1Cb29rU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgZm9ybUJvb2tTdWJtaXQuY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1mb3JtLWJ1dHRvblwiKTtcbiAgZm9ybUJvb2tTdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgY29uc3QgZm9ybUJvb2tDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBmb3JtQm9va0NhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGZvcm1Cb29rQ2FuY2VsLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtZm9ybS1idXR0b25cIik7XG4gIGZvcm1Cb29rQ2FuY2VsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGZvcm1Cb29rVGl0bGUuYXBwZW5kQ2hpbGQoZm9ybUJvb2tUaXRsZUlucHV0KTtcbiAgZm9ybUJvb2tUaXRsZS5hcHBlbmRDaGlsZChmb3JtQm9va1RpdGxlRXJyb3JQYXJhKTtcbiAgZm9ybUJvb2tBdXRob3IuYXBwZW5kQ2hpbGQoZm9ybUJvb2tBdXRob3JJbnB1dCk7XG4gIGZvcm1Cb29rQXV0aG9yLmFwcGVuZENoaWxkKGZvcm1Cb29rQXV0aG9yRXJyb3JQYXJhKTtcbiAgZm9ybUJvb2tQYWdlcy5hcHBlbmRDaGlsZChmb3JtQm9va1BhZ2VzSW5wdXQpO1xuICBmb3JtQm9va1BhZ2VzLmFwcGVuZENoaWxkKGZvcm1Cb29rUGFnZXNFcnJvclBhcmEpO1xuICBmb3JtQm9va1JlYWQuYXBwZW5kQ2hpbGQoZm9ybUJvb2tSZWFkSW5wdXQpO1xuICBmb3JtQm9va0J1dHRvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGZvcm1Cb29rU3VibWl0KTtcbiAgZm9ybUJvb2tCdXR0b25zV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtQm9va0NhbmNlbCk7XG4gIGZvcm1EaXZGb3JtV3JhcHBlci5hcHBlbmRDaGlsZChmb3JtQm9va1RpdGxlKTtcbiAgZm9ybURpdkZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm1Cb29rQXV0aG9yKTtcbiAgZm9ybURpdkZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm1Cb29rUGFnZXMpO1xuICBmb3JtRGl2Rm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybUJvb2tSZWFkKTtcbiAgZm9ybURpdkZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGZvcm1Cb29rQnV0dG9uc1dyYXBwZXIpO1xuICBmb3JtRGl2LmFwcGVuZENoaWxkKGZvcm1EaXZGb3JtV3JhcHBlcik7XG5cbiAgcmV0dXJuIGZvcm1EaXY7XG59O1xuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IG1haW5BZGRCb29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkFkZEJvb2suY2xhc3NMaXN0LmFkZChcImFkZC1ib29rLWRpdlwiKTtcbiAgY29uc3QgbWFpbkFkZEJvb2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtYWluQWRkQm9va0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJvb2stYnV0dG9uXCIpO1xuICBtYWluQWRkQm9va0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIGJvb2tcIjtcbiAgY29uc3QgbWFpbkJvb2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkJvb2tMaXN0LmNsYXNzTGlzdC5hZGQoXCJib29rLWxpc3RcIik7XG4gIG1haW5BZGRCb29rLmFwcGVuZENoaWxkKG1haW5BZGRCb29rQnV0dG9uKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluQWRkQm9vayk7XG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbkJvb2tMaXN0KTtcblxuICByZXR1cm4gbWFpbjtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb25zdCBmb290ZXJMaW5rSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZm9vdGVyTGlua0ltZy5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViLWxvZ29cIik7XG4gIGZvb3RlckxpbmtJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIEdpdGh1YkxvZ28pO1xuICBmb290ZXJEaXYudGV4dENvbnRlbnQgPSBcIkRldmVsb3BlZCBieSBtaXJvc2xhdi16YXJlbmtvdlwiO1xuICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vbWlyb3NsYXYtemFyZW5rb3ZcIik7XG4gIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJEaXYpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG4gIGZvb3RlckxpbmsuYXBwZW5kQ2hpbGQoZm9vdGVyTGlua0ltZyk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZVBhZ2UgPSAoZXZlbnQpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVXcmFwcGVyKCkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi13cmFwcGVyXCIpLmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi13cmFwcGVyXCIpLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGb3JtKCkpO1xufTtcblxuY29uc3QgaW5pdGlhbGlzZUV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1ib29rLWJ1dHRvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkZvcm0pO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1mb3JtLWJ1dHRvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0Rm9ybSk7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWZvcm0tYnV0dG9uXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm0pO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stdGl0bGVcIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZvcm1UZXh0SW5wdXRWYWxpZGF0aW9uKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIiNib29rLXRpdGxlXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmb3JtVGV4dElucHV0VmFsaWRhdGlvbik7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1hdXRob3JcIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZvcm1UZXh0SW5wdXRWYWxpZGF0aW9uKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIiNib29rLWF1dGhvclwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZm9ybVRleHRJbnB1dFZhbGlkYXRpb24pO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stcGFnZXNcIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZvcm1OdW1iZXJJbnB1dExpbWl0KTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIiNib29rLXBhZ2VzXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmb3JtTnVtYmVySW5wdXRWYWxpZGF0aW9uKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIiNib29rLXBhZ2VzXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmb3JtTnVtYmVySW5wdXRWYWxpZGF0aW9uKTtcbn07XG5cbmNvbnN0IHJlbmRlclBhZ2UgPSAoZXZlbnQpID0+IHtcbiAgY3JlYXRlUGFnZShldmVudCk7XG4gIGluaXRpYWxpc2VFdmVudExpc3RlbmVycygpO1xuICBnZXRGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIGNvbnNvbGUubG9nKG15TGlicmFyeSk7XG4gIGRpc3BsYXlCb29rcygpO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyByZW5kZXJQYWdlIH0gZnJvbSBcIi4vdWlcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcmVuZGVyUGFnZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=