"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkabdurrahmans"] = self["webpackChunkabdurrahmans"] || []).push([["src_app_views_Home_js"],{

/***/ "./src/assets/styles/pages/home.sass":
/*!*******************************************!*\
  !*** ./src/assets/styles/pages/home.sass ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://abdurrahmans/./src/assets/styles/pages/home.sass?");

/***/ }),

/***/ "./src/app/blocks/home/About.js":
/*!**************************************!*\
  !*** ./src/app/blocks/home/About.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n  return /*html*/ `\n        <section id=\"about\" class=\"about\">\n            <div class=\"about__content\">\n                <h2 class=\"h2\">${t.title}</h2>\n                <div class=\"about__text\">\n                    ${t.description.map((text) => /*html*/ `<p class=\"about__description\">${text}</p>`).join('')}\n                </div>\n\n                <a href=\"/about-me\" class=\"button\">${t.button} -></a>\n            </div>\n            <img src=\"/images/hero.webp\" alt=\"\" class=\"about__image\">\n        </section>\n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/blocks/home/About.js?");

/***/ }),

/***/ "./src/app/blocks/home/Contacts.js":
/*!*****************************************!*\
  !*** ./src/app/blocks/home/Contacts.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\n\nconst contacts = [\n  { name: 'email', text: _consts_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emailRaw },\n  { name: 'github', text: _consts_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"].github },\n  { name: 'linkedIn', text: _consts_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"].linkedIn },\n]\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n  return /*html*/ `\n        <section class=\"contacts\" id=\"contacts\">\n            <h2 class=\"h2\">${t.title}</h2>\n            <div class=\"contacts__content\">\n                <p class=\"contacts__description\">${t.text}</p>\n                <div class=\"contacts__media\">\n                    <h3 class=\"contacts__title\">${t.media}</h3>\n                    <div class=\"contacts__list\">\n                        ${contacts\n                          .map(\n                            (contact) => /*html*/ `\n                            <a class=\"contact\" href=\"${_consts_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"][contact.name]}\" target=\"_blank\">\n                                <img src=\"/images/icons/${contact.name}.svg\" alt=\"\">\n                                <div class=\"contact__name\">${contact.text}</div>\n                            </a>\n                        `\n                          )\n                          .join('')}\n                    </div>\n                </div>\n            </div>\n        </section>\n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/blocks/home/Contacts.js?");

/***/ }),

/***/ "./src/app/blocks/home/Hero.js":
/*!*************************************!*\
  !*** ./src/app/blocks/home/Hero.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Dots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Dots */ \"./src/app/components/Dots.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n  return /*html*/ `\n        <section class=\"hero\">\n            <div class=\"hero__content\">\n                <h1 class=\"hero__title\">${t.title}</h1>\n                <div class=\"hero__description\">${t.description}</div>\n                <a class=\"button button__primary\" href=\"https://drive.google.com/file/d/1g7BZg10Wluy_9iIGpDN_DeLgjVrXdL5A/view?usp=sharing\" download target=\"_blank\" rel=\"noopener noreferrer\">${\n                  t.resume\n                } </a>\n                <a class=\"button button__primary\" href=\"#contacts\">${t.contact} </a>\n            </div>\n            <div class=\"hero__illustrations\">\n                <img src=\"/images/logo-outline.svg\" alt=\"\" class=\"hero__logo\">\n                <img src=\"/images/heroImage.webp\" alt=\"AbdurRahman\" class=\"hero__image\">\n                <div class=\"hero__status\">${t.status} <a href=\"https://abdurrahmans.netlify.app\">Portfolio</a></div>\n                ${(0,_components_Dots__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({})}\n            </div>\n        </section>\n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/blocks/home/Hero.js?");

/***/ }),

/***/ "./src/app/blocks/home/Motives.js":
/*!****************************************!*\
  !*** ./src/app/blocks/home/Motives.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n  return /*html*/ `\n          <figure class=\"quote\">\n              <blockquote class=\"quote__text\">${t.motive}</blockquote>\n              <figcaption class=\"quote__author\">${t.author}</figcaption>\n          </figure>\n      `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/blocks/home/Motives.js?");

/***/ }),

/***/ "./src/app/blocks/home/Projects.js":
/*!*****************************************!*\
  !*** ./src/app/blocks/home/Projects.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/ProjectList */ \"./src/app/components/ProjectList.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\n  return /*html*/ `\n        <section class=\"projects\" id=\"projects\">\n            <div class=\"projects__header\">\n                <h2 class=\"h2\">${t.title}</h2>\n                <a class=\"projects__link\" href=\"/projects\">${t.button} 🧬</a>\n            </div>\n            ${(0,_components_ProjectList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ limit: 3 }, t2)}\n        </section>\n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/blocks/home/Projects.js?");

/***/ }),

/***/ "./src/app/blocks/home/Quote.js":
/*!**************************************!*\
  !*** ./src/app/blocks/home/Quote.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n  return /*html*/ `\n        <figure class=\"quote\">\n            <blockquote class=\"quote__text\">${t.text}</blockquote>\n            <figcaption class=\"quote__author\">${t.author}</figcaption>\n        </figure>\n     `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/blocks/home/Quote.js?");

/***/ }),

/***/ "./src/app/blocks/home/Skills.js":
/*!***************************************!*\
  !*** ./src/app/blocks/home/Skills.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Dots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Dots */ \"./src/app/components/Dots.js\");\n/* harmony import */ var _components_SkillBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SkillBlock */ \"./src/app/components/SkillBlock.js\");\n/* harmony import */ var _consts_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/skills */ \"./src/app/consts/skills.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\n  return /*html*/ `\n        <sections id=\"skills\" class=\"skills\">\n            <h2 class=\"h2 skill-header\">${t.title}</h2>\n            <div class=\"skills__content\">\n                <div class=\"skills__illustrations illustrations\">\n                    <img src=\"/images/logo-outline.svg\" alt=\"\" class=\"illustrations__logo\">\n                    ${(0,_components_Dots__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ width: 4, height: 4 })}\n                    ${(0,_components_Dots__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ width: 6, height: 6 })}\n                </div>\n                <div class=\"skills__list\">\n                    ${Object.keys(_consts_skills__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n                      .filter((id) => id !== 'tool')\n                      .map((id) => (0,_components_SkillBlock__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ id }, t2))\n                      .join('')}\n                </div>\n\n            </div>\n        </sections>\n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/blocks/home/Skills.js?");

/***/ }),

/***/ "./src/app/components/Dots.js":
/*!************************************!*\
  !*** ./src/app/components/Dots.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst radius = 4\nconst gap = 16\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ width = 5, height = 5 } = {}) => {\n  const svgWidth = (radius * 2 + gap) * width - gap\n  const svgHeight = (radius * 2 + gap) * height - gap\n\n  return /*html*/ `\n        <svg width=\"100%\" class=\"dots\" viewBox=\"0 0 ${svgWidth} ${svgHeight}\">\n            ${new Array(width)\n              .fill(new Array(height).fill(''))\n              .map((arr, i) =>\n                arr\n                  .map((_, j) => {\n                    const x = radius + i * (radius * 2 + gap)\n                    const y = radius + j * (radius * 2 + gap)\n\n                    return /*html*/ `<circle cx=\"${x}\" cy=\"${y}\" r=\"${radius}\" />`\n                  })\n                  .join('')\n              )\n              .join('')}\n        </svg>\n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/components/Dots.js?");

/***/ }),

/***/ "./src/app/components/Project.js":
/*!***************************************!*\
  !*** ./src/app/components/Project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/consts/websites */ \"./src/app/consts/websites.js\");\n\n\n\n\n\nfunction mapLinks(links) {\n  function map(link) {\n    let href = `https://${link === 'live' ? '' : _consts_websites__WEBPACK_IMPORTED_MODULE_3__[\"default\"][link]}${links[link]}`\n\n    if (link === 'figma') href = `https://figma.com/community/file/${links[link]}`\n    if (link === 'github' && links[link].startsWith('/')) href = _consts_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"].github + links[link]\n\n    const className = link === 'cached' ? 'button__secondary' : ''\n    const name = `${link[0].toUpperCase()}${link.slice(1)}`\n\n    return /*html*/ `<a href=\"${href}\" target=\"_blank\" class=\"button ${className}\">${name} =></a>`\n  }\n\n  return Object.keys(links).map(map).join('')\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\n  const { hasImage, techs: projectTech, links } = _consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find((project) => project.id === id)\n\n  return /*html*/ `\n        <div class=\"project\">\n            ${hasImage ? `<img src=\"/images/projects/${id}.webp\" alt=\"${t[id].name}\" class=\"project__image\">` : ''}\n            \n            <ul class=\"project__techs\">\n                ${projectTech.map((tech) => /*html*/ `<li class=\"project__tech\"> ➞ ${_consts_techs__WEBPACK_IMPORTED_MODULE_2__[\"default\"][tech]}</li>`).join('')}\n            </ul> \n\n            <div class=\"project__content\">\n                <div class=\"project__name\">${t[id].name}</div>\n                <div class=\"project__description\">${t[id].description}</div>\n                 <div class=\"project__links\">${mapLinks(links)}</div>\n            </div>\n        </div> \n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/components/Project.js?");

/***/ }),

/***/ "./src/app/components/ProjectList.js":
/*!*******************************************!*\
  !*** ./src/app/components/ProjectList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Project */ \"./src/app/components/Project.js\");\n/* harmony import */ var _consts_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/projects */ \"./src/app/consts/projects.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ title, filter = () => true, limit = _consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length }, t) => {\n  return /*html*/ `\n            ${title ? `<div> <h2 class=\"h2\">${title}</h2>` : ''}\n            <div class=\"project-list\">\n                ${_consts_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n                  .filter(filter)\n                  .slice(0, limit)\n                  .sort((a, b) => a.hasImage - b.hasImage)\n                  .map(({ id }) => (0,_components_Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ id }, t))\n                  .join('')}\n            </div>\n        ${title ? '</div>' : ''}\n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/components/ProjectList.js?");

/***/ }),

/***/ "./src/app/components/SkillBlock.js":
/*!******************************************!*\
  !*** ./src/app/components/SkillBlock.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/skills */ \"./src/app/consts/skills.js\");\n/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/techs */ \"./src/app/consts/techs.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {\n  return /*html*/ `\n        <div class=\"skill-block\">\n            <div class=\"skill-block__name\"> ${t[id]}</div>\n            <ul class=\"skill-block__list\">\n            ${(_consts_skills__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].length === 2 ? _consts_techs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].slice(..._consts_skills__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id]) : _consts_skills__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].map((techIndex) => _consts_techs__WEBPACK_IMPORTED_MODULE_1__[\"default\"][techIndex]))\n              .map(\n                (tech, index) =>\n                  /*html*/ `<li class=\"skill-block__skill\"> <span class=\"skill-arrow\">➞</span> ${tech}</li>`\n              )\n              .join('')}\n            </ul>\n        </div>\n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/components/SkillBlock.js?");

/***/ }),

/***/ "./src/app/consts/projects.js":
/*!************************************!*\
  !*** ./src/app/consts/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @type {import(\"../../types/Project\").Project[]}\n */\nconst projects = [\n  {\n    id: 'financepro',\n    techs: ['js', 'next', 'node', 'mysql'],\n    links: { github: '/financepro', live: 'financepr.vercel.app' },\n    hasImage: true,\n  },\n  {\n    id: 'helpdesk',\n    techs: ['ts', 'next', 'prisma', 'mysql'],\n    links: { github: '/helpdesk', live: 'helpdesk-ecru.vercel.app' },\n    hasImage: true,\n  },\n  {\n    id: 'employeemanagement',\n    techs: ['ts', 'next', 'shadcn'],\n    links: {\n      github: '/employee-management',\n      live: 'employeemanagementsystem.vercel.app/dashboard',\n    },\n    hasImage: true,\n  },\n  {\n    id: 'tsxgames',\n    techs: ['ts', 'react', 'zustand'],\n    links: { github: '/tsx-games', live: 'tsxgames.vercel.app' },\n    isSmall: true,\n  },\n  {\n    id: 'mailbox',\n    techs: ['ts', 'angular', 'tsnode'],\n    links: { github: '/mailbox', live: 'github.com/arswe/mailbox' },\n    isSmall: true,\n  },\n  {\n    id: 'ats',\n    techs: ['react', 'node', 'mongo'],\n    links: { github: '/ats', live: 'abdurrahman-ats.netlify.app' },\n    isSmall: true,\n  },\n\n  {\n    id: 'chatapp',\n    techs: ['ejs', 'node', 'mongo'],\n    links: { github: '/chatapps', live: 'chatapp-jx8l.onrender.com' },\n    hasImage: false,\n    isSmall: true,\n  },\n  {\n    id: 'carrental',\n    links: {\n      github: '/car-rental',\n      live: 'abdurrahman-carrental.netlify.app/',\n    },\n    techs: ['react', 'redux', 'sass', 'json'],\n    hasImage: false,\n    isSmall: true,\n  },\n\n  {\n    id: 'ecommerce',\n    links: {\n      github: '/Minimalist-E-commerce',\n      live: 'abdurrahman-ecommerce.netlify.app',\n    },\n    techs: ['react', 'redux', 'sass', 'json'],\n    hasImage: false,\n    isSmall: true,\n  },\n  {\n    id: 'coindom',\n    techs: ['react', 'sass', 'json'],\n    links: {\n      github: '/coindom-crypto',\n      live: 'abdurrahman-coindom.netlify.app/',\n    },\n    hasImage: false,\n    isSmall: true,\n  },\n  {\n    id: 'fastfood',\n    techs: ['php', 'mysql', 'js'],\n    links: {\n      github: '/fastfood',\n      live: 'arwithlpd-fastfood.000webhostapp.com',\n    },\n    hasImage: false,\n    isSmall: true,\n  },\n\n  {\n    id: 'rajouanulhaque',\n    techs: ['html', 'css', 'js', 'sass'],\n    links: { github: '/rajouanulhaque', live: 'rajouanulhaque.netlify.app' },\n    hasImage: false,\n    isSmall: true,\n  },\n  {\n    id: 'java',\n    techs: ['java', 'dsa'],\n    links: { github: '/java' },\n    hasImage: false,\n    isSmall: true,\n  },\n]\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/consts/projects.js?");

/***/ }),

/***/ "./src/app/consts/skills.js":
/*!**********************************!*\
  !*** ./src/app/consts/skills.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  Design: ['figma', 'html', 'css'],\n  programming: ['js', 'ts', 'java'],\n  Frontend: ['react', 'next', 'angular'],\n  backend: ['node', 'express', 'nestjs'],\n  database: ['mysql', 'postgreSql', 'mongo'],\n  api: ['rest', 'graphql', 'json'],\n  ORM: ['prisma', 'mongoose', 'typeorm', 'sequelize'],\n  StateManagement: ['reduxtoolkit', 'zustand', 'rgrx'],\n  uiframework: ['mui', 'fluentui', 'tailwind', 'radix'],\n  versionControl: ['git', 'bitbucket', 'docker', 'jira'],\n  tool: ['postman', 'composer', 'jetbrains', 'xampp'],\n  Deployment: ['docker', 'aws', 'vercel', 'netlify'],\n  testing: ['ReactTestingLibrary', 'unitTesting', 'vitest'],\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/consts/skills.js?");

/***/ }),

/***/ "./src/app/consts/techs.js":
/*!*********************************!*\
  !*** ./src/app/consts/techs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  ts: 'TypeScript',\n  js: 'JavaScript',\n  java: 'Java',\n  python: 'Python',\n\n  dsa: 'DSA',\n  oop: 'OOP',\n\n  php: 'PHP',\n  node: 'Node',\n  tsnode: 'TS-Node',\n  express: 'Express',\n  nestjs: 'NestJS',\n\n  sequelize: 'Sequelize',\n  mongoose: 'Mongoose',\n  prisma: 'Prisma',\n  typeorm: 'TypeORM',\n\n  json: 'JSON',\n  rest: 'REST API',\n  graphql: 'GraphQL',\n\n  sql: 'SQL',\n  mysql: 'MySQL',\n  mongo: 'MongoDB',\n  postgreSql: 'PostgreSQL',\n\n  html: 'HTML',\n  css: 'CSS',\n  sass: 'SASS',\n  scss: 'SCSS',\n  ejs: 'EJS',\n\n  react: 'React',\n  next: 'Next',\n  remix: 'Remix',\n  angular: 'Angular',\n\n  redux: 'Redux',\n  reduxtoolkit: 'Redux Toolkit',\n  rgrx: 'NgRx',\n  zustand: 'Zustand',\n\n  mui: 'Material UI',\n  fluentui: 'Fluent UI',\n  radix: 'Radix UI',\n  daisyui: 'Daisy UI',\n  tailwind: 'Tailwind CSS',\n  bootstrap: 'Bootstrap',\n  antdesign: 'Ant Design',\n  chakra: 'Chakra UI',\n  shadcn: 'Shadcn UI',\n\n  Jest: 'Jest',\n  vitest: 'Vitest',\n  ReactTestingLibrary: 'React Testing LB',\n  unitTesting: 'Unit Testing',\n\n  Jasmine: 'Jasmine',\n  aws: 'AWS',\n  vercel: 'Vercel',\n  netlify: 'Netlify',\n\n  docker: 'Docker',\n  gitlab: 'GitLab',\n  bitbucket: 'BitBucket',\n  jira: 'Jira',\n\n  vscode: 'VSCode',\n  jetbrains: 'JetBrains',\n  postman: 'Postman',\n  composer: 'Composer',\n  xampp: 'XAMPP',\n  figma: 'Figma',\n  git: 'Git & GitHub',\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/consts/techs.js?");

/***/ }),

/***/ "./src/app/views/Home.js":
/*!*******************************!*\
  !*** ./src/app/views/Home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _blocks_home_About_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/blocks/home/About.js */ \"./src/app/blocks/home/About.js\");\n/* harmony import */ var _blocks_home_Contacts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/blocks/home/Contacts.js */ \"./src/app/blocks/home/Contacts.js\");\n/* harmony import */ var _blocks_home_Hero_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/blocks/home/Hero.js */ \"./src/app/blocks/home/Hero.js\");\n/* harmony import */ var _blocks_home_Motives_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/blocks/home/Motives.js */ \"./src/app/blocks/home/Motives.js\");\n/* harmony import */ var _blocks_home_Projects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/blocks/home/Projects.js */ \"./src/app/blocks/home/Projects.js\");\n/* harmony import */ var _blocks_home_Quote_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/blocks/home/Quote.js */ \"./src/app/blocks/home/Quote.js\");\n/* harmony import */ var _blocks_home_Skills_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/blocks/home/Skills.js */ \"./src/app/blocks/home/Skills.js\");\n/* harmony import */ var _vercel_speed_insights__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vercel/speed-insights */ \"./node_modules/@vercel/speed-insights/dist/index.mjs\");\n/* harmony import */ var styles_pages_home_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/pages/home.sass */ \"./src/assets/styles/pages/home.sass\");\n\n\n\n\n\n\n\n\n\n(0,_vercel_speed_insights__WEBPACK_IMPORTED_MODULE_7__.injectSpeedInsights)()\n\n;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, locale) => {\n  return /*html*/ `\n        ${(0,_blocks_home_Hero_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(t.hero)}\n        ${(0,_blocks_home_Quote_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(t.quote)}\n        ${(0,_blocks_home_Projects_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(t.projects, locale.projects)}\n        ${(0,_blocks_home_Skills_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(t.skills, locale.skills)}\n        ${(0,_blocks_home_About_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t.about)}\n        ${(0,_blocks_home_Contacts_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t.contacts)}\n        ${(0,_blocks_home_Motives_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(t.motives)}\n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/views/Home.js?");

/***/ }),

/***/ "./node_modules/@vercel/speed-insights/dist/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@vercel/speed-insights/dist/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computeRoute: () => (/* binding */ computeRoute),\n/* harmony export */   \"default\": () => (/* binding */ generic_default),\n/* harmony export */   injectSpeedInsights: () => (/* binding */ injectSpeedInsights)\n/* harmony export */ });\n// package.json\nvar name = \"@vercel/speed-insights\";\nvar version = \"1.0.10\";\n\n// src/queue.ts\nvar initQueue = () => {\n  if (window.si)\n    return;\n  window.si = function a(...params) {\n    (window.siq = window.siq || []).push(params);\n  };\n};\n\n// src/utils.ts\nfunction isBrowser() {\n  return typeof window !== \"undefined\";\n}\nfunction detectEnvironment() {\n  try {\n    const env = \"development\";\n    if (env === \"development\" || env === \"test\") {\n      return \"development\";\n    }\n  } catch (e) {\n  }\n  return \"production\";\n}\nfunction isDevelopment() {\n  return detectEnvironment() === \"development\";\n}\nfunction computeRoute(pathname, pathParams) {\n  if (!pathname || !pathParams) {\n    return pathname;\n  }\n  let result = pathname;\n  try {\n    for (const [key, valueOrArray] of Object.entries(pathParams)) {\n      const isValueArray = Array.isArray(valueOrArray);\n      const value = isValueArray ? valueOrArray.join(\"/\") : valueOrArray;\n      const expr = isValueArray ? `...${key}` : key;\n      const matcher = new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);\n      if (matcher.test(result)) {\n        result = result.replace(matcher, `/[${expr}]`);\n      }\n    }\n    return result;\n  } catch (e) {\n    return pathname;\n  }\n}\nfunction escapeRegExp(string) {\n  return string.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\");\n}\n\n// src/generic.ts\nvar SCRIPT_URL = `https://va.vercel-scripts.com/v1/speed-insights`;\nvar PROD_SCRIPT_URL = `${SCRIPT_URL}/script.js`;\nvar DEV_SCRIPT_URL = `${SCRIPT_URL}/script.debug.js`;\nvar PROXY_SCRIPT_URL = `/_vercel/speed-insights/script.js`;\nfunction injectSpeedInsights(props = {}) {\n  var _a;\n  if (!isBrowser() || props.route === null)\n    return null;\n  initQueue();\n  const isSelfHosted = Boolean(props.dsn);\n  const productionScript = isSelfHosted ? PROD_SCRIPT_URL : PROXY_SCRIPT_URL;\n  const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : productionScript);\n  if (document.head.querySelector(`script[src*=\"${src}\"]`))\n    return null;\n  if (props.beforeSend) {\n    (_a = window.si) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n  }\n  const script = document.createElement(\"script\");\n  script.src = src;\n  script.defer = true;\n  script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : \"\");\n  script.dataset.sdkv = version;\n  if (props.sampleRate) {\n    script.dataset.sampleRate = props.sampleRate.toString();\n  }\n  if (props.route) {\n    script.dataset.route = props.route;\n  }\n  if (props.endpoint) {\n    script.dataset.endpoint = props.endpoint;\n  }\n  if (props.dsn) {\n    script.dataset.dsn = props.dsn;\n  }\n  if (isDevelopment() && props.debug === false) {\n    script.dataset.debug = \"false\";\n  }\n  script.onerror = () => {\n    console.log(\n      `[Vercel Speed Insights] Failed to load script from ${src}. Please check if any content blockers are enabled and try again.`\n    );\n  };\n  document.head.appendChild(script);\n  return {\n    setRoute: (route) => {\n      script.dataset.route = route ?? void 0;\n    }\n  };\n}\nvar generic_default = {\n  injectSpeedInsights,\n  computeRoute\n};\n\n//# sourceMappingURL=index.mjs.map\n\n//# sourceURL=webpack://abdurrahmans/./node_modules/@vercel/speed-insights/dist/index.mjs?");

/***/ })

}]);