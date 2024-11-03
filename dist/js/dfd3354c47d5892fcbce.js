"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkabdurrahmans"] = self["webpackChunkabdurrahmans"] || []).push([["src_app_views_Projects_js"],{

/***/ "./src/assets/styles/pages/projects.sass":
/*!***********************************************!*\
  !*** ./src/assets/styles/pages/projects.sass ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://abdurrahmans/./src/assets/styles/pages/projects.sass?");

/***/ }),

/***/ "./src/app/components/Path.js":
/*!************************************!*\
  !*** ./src/app/components/Path.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {\n  return /*html*/ `\n        <div class=\"path\">\n            <h1 class=\"h1 path__name\">${window.location.pathname.slice(1)}</h1>\n            <p class=\"path__description\">${description}</p>\n        </div>\n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/components/Path.js?");

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

/***/ "./src/app/consts/projects.js":
/*!************************************!*\
  !*** ./src/app/consts/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @type {import(\"../../types/Project\").Project[]}\n */\nconst projects = [\n  {\n    id: 'rarebd',\n    techs: ['js', 'node', 'postgreSql'],\n    links: { github: '/RareBDLtd', live: 'rarebd.com' },\n    hasImage: true,\n  },\n  {\n    id: 'nufbd',\n    techs: ['js', 'next', 'postgreSql'],\n    links: { github: '/nuf-bd', live: 'nuf-bd.com' },\n    hasImage: true,\n  },\n  {\n    id: 'financepro',\n    techs: ['js', 'next', 'node', 'mysql'],\n    links: { github: '/financepro', live: 'financepr.vercel.app' },\n    hasImage: true,\n  },\n  {\n    id: 'helpdesk',\n    techs: ['ts', 'next', 'prisma', 'mysql'],\n    links: { github: '/helpdesk', live: 'helpdesk-ecru.vercel.app' },\n    hasImage: true,\n  },\n  {\n    id: 'employeemanagement',\n    techs: ['ts', 'next', 'shadcn'],\n    links: {\n      github: '/employee-management',\n      live: 'employeemanagementsystem.vercel.app/dashboard',\n    },\n    hasImage: true,\n  },\n  {\n    id: 'tsxgames',\n    techs: ['ts', 'react', 'zustand'],\n    links: { github: '/tsx-games', live: 'tsxgames.vercel.app' },\n    isSmall: true,\n  },\n  {\n    id: 'mailbox',\n    techs: ['ts', 'angular', 'tsnode'],\n    links: { github: '/mailbox', live: 'github.com/arswe/mailbox' },\n    isSmall: true,\n  },\n  {\n    id: 'ats',\n    techs: ['react', 'node', 'mongo'],\n    links: { github: '/ats', live: 'abdurrahman-ats.netlify.app' },\n    isSmall: true,\n  },\n\n  {\n    id: 'chatapp',\n    techs: ['ejs', 'node', 'mongo'],\n    links: { github: '/chatapps', live: 'chatapp-jx8l.onrender.com' },\n    hasImage: false,\n    isSmall: true,\n  },\n  {\n    id: 'carrental',\n    links: {\n      github: '/car-rental',\n      live: 'abdurrahman-carrental.netlify.app/',\n    },\n    techs: ['react', 'redux', 'sass', 'json'],\n    hasImage: false,\n    isSmall: true,\n  },\n\n  {\n    id: 'ecommerce',\n    links: {\n      github: '/Minimalist-E-commerce',\n      live: 'abdurrahman-ecommerce.netlify.app',\n    },\n    techs: ['react', 'redux', 'sass', 'json'],\n    hasImage: false,\n    isSmall: true,\n  },\n  {\n    id: 'coindom',\n    techs: ['react', 'sass', 'json'],\n    links: {\n      github: '/coindom-crypto',\n      live: 'abdurrahman-coindom.netlify.app/',\n    },\n    hasImage: false,\n    isSmall: true,\n  },\n  {\n    id: 'fastfood',\n    techs: ['php', 'mysql', 'js'],\n    links: {\n      github: '/fastfood',\n      live: 'arwithlpd-fastfood.000webhostapp.com',\n    },\n    hasImage: false,\n    isSmall: true,\n  },\n\n  {\n    id: 'rajouanulhaque',\n    techs: ['html', 'css', 'js', 'sass'],\n    links: { github: '/rajouanulhaque', live: 'rajouanulhaque.netlify.app' },\n    hasImage: false,\n    isSmall: true,\n  },\n  {\n    id: 'java',\n    techs: ['java', 'dsa'],\n    links: { github: '/java' },\n    hasImage: false,\n    isSmall: true,\n  },\n]\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/consts/projects.js?");

/***/ }),

/***/ "./src/app/consts/techs.js":
/*!*********************************!*\
  !*** ./src/app/consts/techs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  ts: 'TypeScript',\n  js: 'JavaScript',\n  java: 'Java',\n  python: 'Python',\n\n  dsa: 'DSA',\n  oop: 'OOP',\n\n  php: 'PHP',\n  node: 'Node',\n  tsnode: 'TS-Node',\n  express: 'Express',\n  nestjs: 'NestJS',\n\n  sequelize: 'Sequelize',\n  mongoose: 'Mongoose',\n  prisma: 'Prisma',\n  typeorm: 'TypeORM',\n\n  json: 'JSON',\n  rest: 'REST API',\n  graphql: 'GraphQL',\n\n  sql: 'SQL',\n  mysql: 'MySQL',\n  mongo: 'MongoDB',\n  postgreSql: 'PostgreSQL',\n\n  html: 'HTML',\n  css: 'CSS',\n  sass: 'SASS',\n  scss: 'SCSS',\n  ejs: 'EJS',\n\n  react: 'React',\n  next: 'Next',\n  remix: 'Remix',\n  angular: 'Angular',\n\n  redux: 'Redux',\n  reduxtoolkit: 'Redux Toolkit',\n  rgrx: 'NgRx',\n  zustand: 'Zustand',\n\n  mui: 'Material UI',\n  fluentui: 'Fluent UI',\n  radix: 'Radix UI',\n  daisyui: 'Daisy UI',\n  tailwind: 'Tailwind CSS',\n  bootstrap: 'Bootstrap',\n  antdesign: 'Ant Design',\n  chakra: 'Chakra UI',\n  shadcn: 'Shadcn UI',\n\n  Jest: 'Jest',\n  vitest: 'Vitest',\n  ReactTestingLibrary: 'React Testing LB',\n  unitTesting: 'Unit Testing',\n\n  Jasmine: 'Jasmine',\n  aws: 'AWS',\n  vercel: 'Vercel',\n  netlify: 'Netlify',\n\n  docker: 'Docker',\n  gitlab: 'GitLab',\n  bitbucket: 'BitBucket',\n  jira: 'Jira',\n\n  vscode: 'VSCode',\n  jetbrains: 'JetBrains',\n  postman: 'Postman',\n  composer: 'Composer',\n  xampp: 'XAMPP',\n  figma: 'Figma',\n  git: 'Git & GitHub',\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/consts/techs.js?");

/***/ }),

/***/ "./src/app/views/Projects.js":
/*!***********************************!*\
  !*** ./src/app/views/Projects.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Path.js */ \"./src/app/components/Path.js\");\n/* harmony import */ var _components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProjectList.js */ \"./src/app/components/ProjectList.js\");\n/* harmony import */ var styles_pages_projects_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/pages/projects.sass */ \"./src/assets/styles/pages/projects.sass\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {\n  return /*html*/ `\n        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ description: t.description })}\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.decent, filter: (p) => !p.isSmall }, t2.projects)}\n        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ title: t.small, filter: (p) => p.isSmall && !p.isInProgress }, t2.projects)}\n    `\n});\n\n\n//# sourceURL=webpack://abdurrahmans/./src/app/views/Projects.js?");

/***/ })

}]);