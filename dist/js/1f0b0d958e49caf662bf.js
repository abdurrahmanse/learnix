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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   initializeContactForm: () => (/* binding */ initializeContactForm)\n/* harmony export */ });\nconst initializeContactForm = () => {\n  const form = document.getElementById('contactForm')\n  const emailInput = document.getElementById('email')\n  const subjectInput = document.getElementById('subject')\n  const messageInput = document.getElementById('message')\n  const emailError = document.getElementById('emailError')\n  const subjectError = document.getElementById('subjectError')\n  const messageError = document.getElementById('messageError')\n\n  if (!form) return; // Ensure form exists before attaching listeners\n\n  form.addEventListener('submit', function (event) {\n    let isValid = true\n    emailError.textContent = ''\n    subjectError.textContent = ''\n    messageError.textContent = ''\n\n    // Validate email\n    if (!emailInput.value.trim()) {\n      emailError.textContent = 'Email is required'\n      isValid = false\n    } else if (!isValidEmail(emailInput.value.trim())) {\n      emailError.textContent = 'Invalid email format'\n      isValid = false\n    }\n\n    // Validate subject\n    if (!subjectInput.value.trim()) {\n      subjectError.textContent = 'Subject is required'\n      isValid = false\n    }\n\n    // Validate message\n    if (!messageInput.value.trim()) {\n      messageError.textContent = 'Message is required'\n      isValid = false\n    }\n\n    if (!isValid) {\n      event.preventDefault() // Prevent form submission if validation fails\n    }\n  })\n\n  function isValidEmail(email) {\n    // Basic email validation\n    const emailRegex = /^[^@]+@[^@]+\\.[^@]+$/\n    return emailRegex.test(email)\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n  return /*html*/ `\n        <section class=\"contact-section\">\n            <div class=\"contact-container\">\n                <h2 class=\"contact-title\">Get In Touch 📬</h2>\n                <p class=\"contact-description\">Have a project in mind or just want to say hello? Fill out the form below or reach out through my social channels!</p>\n                <div class=\"contact-content\">\n                    <form id=\"contactForm\" action=\"https://formspree.io/f/xzblqwyw\" method=\"POST\" enctype=\"multipart/form-data\" class=\"contact-form\">\n                        <div class=\"form-group\">\n                            <label for=\"email\">✉️ Email:</label>\n                            <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Your Email Address\">\n                            <div id=\"emailError\" class=\"error\"></div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"subject\">📝 Subject:</label>\n                            <input type=\"text\" id=\"subject\" name=\"subject\" placeholder=\"Subject of your message\">\n                            <div id=\"subjectError\" class=\"error\"></div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"message\">💬 Message:</label>\n                            <textarea id=\"message\" name=\"message\" rows=\"7\" placeholder=\"Your Message\"></textarea>\n                            <div id=\"messageError\" class=\"error\"></div>\n                        </div>\n                        <button type=\"submit\" class=\"submit-button\">🚀 Send Message</button>\n                    </form>\n                    <div class=\"contact-info\">\n                        <h3>Connect with me:</h3>\n                        <p>I'm always open to new opportunities and collaborations. Feel free to connect!</p>\n                        <p><strong>Email:</strong> abdurrahmansoftw@gmail.com </p>\n                        <p><strong>LinkedIn:</strong> <a href=\"https://linkedin.com/in/abdurrahmanse\" target=\"_blank\">abdurrahmanse</a></p>\n                        <p><strong>GitHub:</strong> <a href=\"https://github.com/abdurrahmanse\" target=\"_blank\">abdurrahmanse</a></p>\n                    </div>\n                </div>\n            </div>\n        </section>\n    `\n});\n\n//# sourceURL=webpack://abdurrahmans/./src/app/blocks/contact/Touch.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _blocks_contact_Touch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/blocks/contact/Touch.js */ \"./src/app/blocks/contact/Touch.js\");\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var styles_pages_contact_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/pages/contact.sass */ \"./src/assets/styles/pages/contact.sass\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, locale) => {\n  // Ensure the form is initialized after the component is rendered\n  setTimeout(_blocks_contact_Touch_js__WEBPACK_IMPORTED_MODULE_0__.initializeContactForm, 0);\n  return /*html*/ `\n        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ description: t.description })}\n        ${(0,_blocks_contact_Touch_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t.touch)}\n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/views/Contacts.js?");

/***/ }),

/***/ "./src/assets/styles/pages/contact.sass":
/*!**********************************************!*\
  !*** ./src/assets/styles/pages/contact.sass ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://abdurrahmans/./src/assets/styles/pages/contact.sass?");

/***/ })

}]);