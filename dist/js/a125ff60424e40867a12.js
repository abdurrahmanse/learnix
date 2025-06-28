"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkabdurrahmans"] = self["webpackChunkabdurrahmans"] || []).push([["src_app_views_Contacts_js"],{

/***/ "./src/app/blocks/contact/Touch.js":
/*!*****************************************!*\
  !*** ./src/app/blocks/contact/Touch.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n  return /*html*/ `\n          <section>\n            <div>\n              <form id=\"contactForm\" action=\"https://formspree.io/f/xzblqwyw\" method=\"POST\" enctype=\"multipart/form-data\">\n                <label for=\"email\">Email:</label>\n                <input type=\"text\" id=\"email\" name=\"email\">\n                <div id=\"emailError\" class=\"error\"></div>\n            \n                <label for=\"message\">Message:</label>\n                <textarea id=\"message\" name=\"message\" rows=\"5\" cols=\"100\"></textarea>\n                <div id=\"messageError\" class=\"error\"></div>\n            \n                <button type=\"submit\"> 🚀 Send Message</button>\n              </form>\n            </div>\n        </section>\n    `\n});\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  const form = document.getElementById('contactForm')\n  const emailInput = document.getElementById('email')\n  const messageInput = document.getElementById('message')\n  const emailError = document.getElementById('emailError')\n  const messageError = document.getElementById('messageError')\n\n  form.addEventListener('submit', function (event) {\n    let isValid = true\n    emailError.textContent = ''\n    messageError.textContent = ''\n\n    // Validate email\n    if (!emailInput.value.trim()) {\n      emailError.textContent = 'Email is required'\n      isValid = false\n    } else if (!isValidEmail(emailInput.value.trim())) {\n      emailError.textContent = 'Invalid email format'\n      isValid = false\n    }\n\n    // Validate message\n    if (!messageInput.value.trim()) {\n      messageError.textContent = 'Message is required'\n      isValid = false\n    }\n\n    if (!isValid) {\n      event.preventDefault() // Prevent form submission if validation fails\n    }\n  })\n\n  function isValidEmail(email) {\n    // Basic email validation\n    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/\n    return emailRegex.test(email)\n  }\n})\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/blocks/contact/Touch.js?");

/***/ }),

/***/ "./src/app/components/Path.js":
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\n  return /*html*/ `\n        <div class=\"path\">\n            <h1 class=\"h1 path__name\">${window.location.pathname.slice(1)}</h1>\n            <p class=\"path__description\">${description}</p>\n        </div>\n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/components/Path.js?");

/***/ }),

/***/ "./src/app/views/Contacts.js":
/*!***********************************!*\
  !*** ./src/app/views/Contacts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _blocks_contact_Touch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/blocks/contact/Touch.js */ \"./src/app/blocks/contact/Touch.js\");\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var styles_pages_contact_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/pages/contact.sass */ \"./src/assets/styles/pages/contact.sass\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, locale) => {\n  return /*html*/ `\n        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ description: t.description })}\n        ${(0,_blocks_contact_Touch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t.touch)}\n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/views/Contacts.js?");

/***/ }),

/***/ "./src/assets/styles/pages/contact.sass":
/*!**********************************************!*\
  !*** ./src/assets/styles/pages/contact.sass ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://abdurrahmans/./src/assets/styles/pages/contact.sass?");

/***/ })

}]);