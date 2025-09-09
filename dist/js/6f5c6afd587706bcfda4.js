"use strict";
(self["webpackChunkabdurrahmans"] = self["webpackChunkabdurrahmans"] || []).push([[847],{

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

/***/ 847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(778);
/* harmony import */ var _components_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(975);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t, t2) => {
  return /*html*/ `
        ${(0,_components_Path_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({ description: t.description })}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({ title: t.decent, filter: (p) => !p.isSmall }, t2.projects)}
        ${(0,_components_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({ title: t.small, filter: (p) => p.isSmall && !p.isInProgress }, t2.projects)}
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


/***/ }),

/***/ 975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProjectList)
});

// EXTERNAL MODULE: ./src/app/consts/media.js + 1 modules
var media = __webpack_require__(934);
;// ./src/app/consts/projects.js
/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
  {
    id: 'radhuni',
    techs: ['js', 'ts', 'react'],
    links: { github: '/radhuni', live: 'radhuni-zeta.vercel.app' },
    hasImage: true,
  },
  {
    id: 'tofazzalhossainbhuiyan',
    techs: ['js', 'ts', 'react'],
    links: { github: '/profiles', live: 'tofazzal-hossain-bhuiyan.vercel.app' },
    hasImage: true,
  },
  {
    id: 'nufbd',
    techs: ['js', 'next', 'postgreSql'],
    links: { github: '/nuf-bd', live: 'nuf-bd.com' },
    hasImage: true,
  },
  {
    id: 'rarebd',
    techs: ['js', 'node', 'postgreSql'],
    links: { github: '/rareBDLtd', live: 'rarebd.com' },
    hasImage: true,
  },
  {
    id: 'gazisazzadhossain',
    techs: ['js', 'ts', 'react'],
    links: { github: '/profiles', live: 'gazi-sazzad-hossain.vercel.app' },
    hasImage: true,
  },
  {
    id: 'financepro',
    techs: ['js', 'next', 'node', 'mysql'],
    links: { github: '/financepro', live: 'financepr.vercel.app' },
    isSmall: true,
  },
  {
    id: 'helpdesk',
    techs: ['ts', 'next', 'prisma', 'mysql'],
    links: { github: '/helpdesk', live: 'helpdesk-ecru.vercel.app' },
    isSmall: true,
  },
  {
    id: 'employeemanagement',
    techs: ['ts', 'next', 'shadcn'],
    links: {
      github: '/employee-management',
      live: 'employeemanagementsystem.vercel.app/dashboard',
    },
    isSmall: true,
  },
  {
    id: 'tsxgames',
    techs: ['ts', 'react', 'zustand'],
    links: { github: '/tsx-games', live: 'tsxgames.vercel.app' },
    isSmall: true,
  },
  {
    id: 'mailbox',
    techs: ['ts', 'angular', 'tsnode'],
    links: { github: '/mailbox', live: 'github.com/arswe/mailbox' },
    isSmall: true,
  },
  {
    id: 'ats',
    techs: ['react', 'node', 'mongo'],
    links: { github: '/ats', live: 'abdurrahman-ats.netlify.app' },
    isSmall: true,
  },

  {
    id: 'chatapp',
    techs: ['ejs', 'node', 'mongo'],
    links: { github: '/chatapps', live: 'chatapp-jx8l.onrender.com' },
    hasImage: false,
    isSmall: true,
  },
  {
    id: 'carrental',
    links: {
      github: '/car-rental',
      live: 'abdurrahman-carrental.netlify.app/',
    },
    techs: ['react', 'redux', 'sass', 'json'],
    hasImage: false,
    isSmall: true,
  },

  {
    id: 'ecommerce',
    links: {
      github: '/Minimalist-E-commerce',
      live: 'abdurrahman-ecommerce.netlify.app',
    },
    techs: ['react', 'redux', 'sass', 'json'],
    hasImage: false,
    isSmall: true,
  },
  {
    id: 'coindom',
    techs: ['react', 'sass', 'json'],
    links: {
      github: '/coindom-crypto',
      live: 'abdurrahman-coindom.netlify.app/',
    },
    hasImage: false,
    isSmall: true,
  },
  {
    id: 'fastfood',
    techs: ['php', 'mysql', 'js'],
    links: {
      github: '/fastfood',
      live: 'arwithlpd-fastfood.000webhostapp.com',
    },
    hasImage: false,
    isSmall: true,
  },

  {
    id: 'rajouanulhaque',
    techs: ['html', 'css', 'js', 'sass'],
    links: { github: '/rajouanulhaque', live: 'rajouanulhaque.netlify.app' },
    hasImage: false,
    isSmall: true,
  },
  {
    id: 'java',
    techs: ['java', 'dsa'],
    links: { github: '/java' },
    hasImage: false,
    isSmall: true,
  },
]

/* harmony default export */ const consts_projects = (projects);

// EXTERNAL MODULE: ./src/app/consts/techs.js
var techs = __webpack_require__(928);
// EXTERNAL MODULE: ./src/app/consts/websites.js
var websites = __webpack_require__(175);
;// ./src/app/components/Project.js





function mapLinks(links) {
  function map(link) {
    let href = `https://${link === 'live' ? '' : websites/* default */.A[link]}${links[link]}`

    if (link === 'figma') href = `https://figma.com/community/file/${links[link]}`
    if (link === 'github' && links[link].startsWith('/')) href = media/* default */.A.github + links[link]

    const className = link === 'cached' ? 'button__secondary' : ''
    const name = `${link[0].toUpperCase()}${link.slice(1)}`

    return /*html*/ `<a href="${href}" target="_blank" class="button ${className}">${name} =></a>`
  }

  return Object.keys(links).map(map).join('')
}

/* harmony default export */ const Project = (({ id }, t) => {
  const { hasImage, techs: projectTech, links } = consts_projects.find((project) => project.id === id)

  return /*html*/ `
        <div class="project">
            ${hasImage ? `<img src="/images/projects/${id}.webp" alt="${t[id].name}" class="project__image">` : ''}
            
            <ul class="project__techs">
                ${projectTech.map((tech) => /*html*/ `<li class="project__tech"> ➞ ${techs/* default */.A[tech]}</li>`).join('')}
            </ul> 

            <div class="project__content">
                <div class="project__name">${t[id].name}</div>
                <div class="project__description">${t[id].description}</div>
                 <div class="project__links">${mapLinks(links)}</div>
            </div>
        </div> 
    `
});

;// ./src/app/components/ProjectList.js



/* harmony default export */ const ProjectList = (({ title, filter = () => true, limit = consts_projects.length }, t) => {
  return /*html*/ `
            ${title ? `<div> <h2 class="h2">${title}</h2>` : ''}
            <div class="project-list">
                ${consts_projects
                  .filter(filter)
                  .slice(0, limit)
                  .sort((a, b) => a.hasImage - b.hasImage)
                  .map(({ id }) => Project({ id }, t))
                  .join('')}
            </div>
        ${title ? '</div>' : ''}
    `
});


/***/ })

}]);