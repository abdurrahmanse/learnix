"use strict";
(self["webpackChunkabdurrahmans"] = self["webpackChunkabdurrahmans"] || []).push([[548],{

/***/ 427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts_skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(515);
/* harmony import */ var _consts_techs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(928);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ id }, t) => {
  return /*html*/ `
        <div class="skill-block">
            <div class="skill-block__name"> ${t[id]}</div>
            <ul class="skill-block__list">
            ${(_consts_skills__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A[id].length === 2 ? _consts_techs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.slice(..._consts_skills__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A[id]) : _consts_skills__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A[id].map((techIndex) => _consts_techs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[techIndex]))
              .map(
                (tech, index) =>
                  /*html*/ `<li class="skill-block__skill"> <span class="skill-arrow">➞</span> ${tech}</li>`
              )
              .join('')}
            </ul>
        </div>
    `
});


/***/ }),

/***/ 515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Design: ['figma', 'html', 'css'],
  programming: ['js', 'ts', 'java'],
  Frontend: ['react', 'next', 'Bootstrap'],
  uiframework: ['tailwind', 'mui', 'radix'],
  StateManagement: ['redux', 'reduxtoolkit', 'zustand'],
  backend: ['node', 'express', 'nestjs'],
  database: ['mysql', 'postgreSql', 'mongo'],
  api: ['rest', 'graphql', 'json'],
  ORM: ['prisma', 'mongoose', 'typeorm'],
  versionControl: ['git', 'bitbucket', 'docker'],
  Deployment: ['docker', 'aws', 'vercel', 'netlify'],
  testing: ['ReactTestingLibrary', 'unitTesting', 'vitest'],
  tools: ['terminal', 'vscode', 'postman', 'composer', 'jetbrains', 'xampp'],
  digitalMarketing: ['videoediting', 'SEO', 'googleads', 'facebookads', 'promotion'],
});


/***/ }),

/***/ 548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ views_About)
});

;// ./src/app/blocks/about/About.js
/* harmony default export */ const About = ((t) => {
  return /*html*/ `
        <section class="about">
            <div class="about__illustrations">
                <img src="/images/me.webp" alt="AbdurRahman's profile picture" class="about__image">
            </div>
            <div class="about__text">
                👋 ${t.description.map((text) => /*html*/ `<p class="about__description">✨ ${text}</p>`).join('')}
            </div>
        </section>
    `
});

;// ./src/app/blocks/about/Facts.js
/* harmony default export */ const Facts = ((t) => {
  return /*html*/ `
        <section class="facts">
            <h2 class="h2">${t.title}</h2>
            <div class="facts__content">
                <ul class="facts__list">
                    ${t.list
                      .map(
                        (fact) => /*html*/ `
                        <li class="fact">${fact}</li>
                    `
                      )
                      .join('')}
                </ul>
                <div class="facts__illustrations">
                </div>
            </div>

        </section>
    `
});

// EXTERNAL MODULE: ./src/app/components/SkillBlock.js
var SkillBlock = __webpack_require__(427);
// EXTERNAL MODULE: ./src/app/consts/skills.js
var skills = __webpack_require__(515);
;// ./src/app/blocks/about/Skills.js



/* harmony default export */ const Skills = ((t, t2) => {
  return /*html*/ `
        <section class="skills">
            <h2 class="h2">⚙️ ${t.title}</h2>
            <div class="skills__content">
                ${Object.keys(skills/* default */.A)
                  .map((id) => `⭐` + (0,SkillBlock/* default */.A)({ id }, t2))
                  .join('')}
            </div>
        </section>
 `
});

// EXTERNAL MODULE: ./src/app/components/Path.js
var Path = __webpack_require__(778);
;// ./src/app/views/About.js







/* harmony default export */ const views_About = ((t, locale) => {
  return /*html*/ `
        ${(0,Path/* default */.A)({ description: t.description })}
        ${About(t.about)}
        ${Skills(t.skills, locale.skills)}
        ${Facts(t.facts)}
    `
});


/***/ }),

/***/ 778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {
  return /*html*/ `
        <div class="path">
            <h1 class="h1 path__name">${window.location.pathname.slice(1)}</h1>
            <p class="path__description">${description}</p>
        </div>
    `
});


/***/ }),

/***/ 928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ts: "TypeScript",
  js: "JavaScript",
  java: "Java",
  python: "Python",

  dsa: "DSA",
  oop: "OOP",

  php: "PHP",
  node: "Node",
  tsnode: "TS-Node",
  express: "Express",
  nestjs: "NestJS",

  sequelize: "Sequelize",
  mongoose: "Mongoose",
  prisma: "Prisma",
  typeorm: "TypeORM",

  json: "JSON",
  rest: "REST API",
  graphql: "GraphQL",

  sql: "SQL",
  mysql: "MySQL",
  mongo: "MongoDB",
  postgreSql: "PostgreSQL",

  html: "HTML",
  css: "CSS",
  sass: "SASS",
  scss: "SCSS",
  ejs: "EJS",

  react: "React",
  next: "Next",
  remix: "Remix",
  angular: "Angular",
  Bootstrap: "Bootstrap",

  redux: "Redux",
  reduxtoolkit: "Redux Toolkit",
  rgrx: "NgRx",
  zustand: "Zustand",

  mui: "Material UI",
  fluentui: "Fluent UI",
  radix: "Radix UI",
  daisyui: "Daisy UI",
  tailwind: "Tailwind CSS",
  bootstrap: "Bootstrap",
  antdesign: "Ant Design",
  chakra: "Chakra UI",
  shadcn: "Shadcn UI",

  Jest: "Jest",
  vitest: "Vitest",
  ReactTestingLibrary: "React Testing LB",
  unitTesting: "Unit Testing",

  Jasmine: "Jasmine",
  aws: "AWS",
  vercel: "Vercel",
  netlify: "Netlify",

  docker: "Docker",
  gitlab: "GitLab",
  bitbucket: "BitBucket",
  jira: "Jira",

  vscode: "VSCode",
  terminal: "Terminal",
  jetbrains: "JetBrains",
  postman: "Postman",
  composer: "Composer",
  xampp: "XAMPP",
  figma: "UI/UX Design (Figma)",
  git: "Git & GitHub",

  videoediting: "Video Editing",
  SEO: "SEO",
  googleads: "Google Ads",
  googleanalytics: "Google Analytics",
  facebookads: "Facebook Ads",
  promotion: "Promotion",
});


/***/ })

}]);