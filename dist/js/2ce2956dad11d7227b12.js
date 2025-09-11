"use strict";
(self["webpackChunkabdurrahmans"] = self["webpackChunkabdurrahmans"] || []).push([[13],{

/***/ 13:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

;// ./src/app/blocks/home/About.js
/* harmony default export */ const About = ((t) => {
  return /*html*/ `
        <section id="about" class="about">
            <div class="about__content">
                <h2 class="h2">${t.title}</h2>
                <div class="about__text">
                    ${t.description.map((text) => /*html*/ `<p class="about__description">${text}</p>`).join('')}
                </div>
                <a href="/about-me" class="button">${t.button} -></a>
            </div>
            <img src="/images/hero.webp" alt="Abdur Rahman - Full Stack JavaScript Developer" class="about__image">
        </section>
    `
});

// EXTERNAL MODULE: ./src/app/consts/media.js + 1 modules
var media = __webpack_require__(934);
;// ./src/app/blocks/home/Contacts.js


const contacts = [
  { name: 'email', text: media/* default */.A.emailRaw },
  { name: 'github', text: media/* default */.A.github },
  { name: 'linkedIn', text: media/* default */.A.linkedIn },
]

/* harmony default export */ const Contacts = ((t) => {
  return /*html*/ `
        <section class="contacts" id="contacts">
            <h2 class="h2">${t.title}</h2>
            <div class="contacts__content">
                <p class="contacts__description">
                ${t.text}
                </p>
       
                <div class="contacts__media">
                    <h3 class="contacts__title">${t.media}</h3>
                    <div class="contacts__list">
                        ${contacts
                          .map(
                            (contact) => /*html*/ `
                            <a class="contact" href="${media/* default */.A[contact.name]}" target="_blank">
                                <img src="/images/icons/${contact.name}.svg" alt="">
                                <div class="contact__name">${contact.text}</div>
                            </a>
                        `
                          )
                          .join('')}
                    </div>
                </div>
            </div>
        </section>
    `
});

;// ./src/app/components/Dots.js
const radius = 4
const gap = 16

/* harmony default export */ const Dots = (({ width = 5, height = 5 } = {}) => {
  const svgWidth = (radius * 2 + gap) * width - gap
  const svgHeight = (radius * 2 + gap) * height - gap

  return /*html*/ `
        <svg width="100%" class="dots" viewBox="0 0 ${svgWidth} ${svgHeight}">
            ${new Array(width)
              .fill(new Array(height).fill(''))
              .map((arr, i) =>
                arr
                  .map((_, j) => {
                    const x = radius + i * (radius * 2 + gap)
                    const y = radius + j * (radius * 2 + gap)

                    return /*html*/ `<circle cx="${x}" cy="${y}" r="${radius}" />`
                  })
                  .join('')
              )
              .join('')}
        </svg>
    `
});

;// ./src/app/blocks/home/Hero.js


/* harmony default export */ const Hero = ((t) => {
  return /*html*/ `
        <section class="hero">
            <div class="hero__content">
                <h1 class="hero__title">💻 ${t.title}</h1>
                <div class="hero__description">${t.description}</div>
                <a class="button button__primary" href="https://drive.google.com/file/d/1g7BZg10Wluy_9iIGpDN_DeLgjVrXdL5A/view?usp=sharing" download target="_blank" rel="noopener noreferrer"> ${
                  t.resume
                } </a>
                <a class="button button__primary" href="#contacts">📞 ${t.contact} </a>
            </div>
            <div class="hero__illustrations">
                <img src="/images/logo-outline.svg" alt="AbdurRahman Logo" class="hero__logo">
                <img src="/images/heroImage.webp" alt="AbdurRahman" class="hero__image">
                <div class="hero__status">${t.status} <a href="https://abdurrahmans.netlify.app">Portfolio</a></div>
                ${Dots({})}
            </div>
        </section>
    `
});

;// ./src/app/blocks/home/Motives.js
/* harmony default export */ const Motives = ((t) => {
  return /*html*/ `
          <figure class="quote">
              <blockquote class="quote__text">${t.motive}</blockquote>
              <figcaption class="quote__author">${t.author}</figcaption>
          </figure>
      `
});

// EXTERNAL MODULE: ./src/app/components/ProjectList.js + 2 modules
var ProjectList = __webpack_require__(975);
;// ./src/app/blocks/home/Projects.js


/* harmony default export */ const Projects = ((t, t2) => {
  return /*html*/ `
        <section class="projects" id="projects">
            <div class="projects__header">
                <h2 class="h2">🚀 ${t.title}</h2>
                <a class="projects__link" href="/projects">📁 ${t.button} 🧬</a>
            </div>
            ${(0,ProjectList/* default */.A)({ limit: 3 }, t2)}
        </section>
    `
});

;// ./src/app/blocks/home/Quote.js
/* harmony default export */ const Quote = ((t) => {
  return /*html*/ `
        <figure class="quote">
            <blockquote class="quote__text">${t.text}</blockquote>
            <figcaption class="quote__author">${t.author}</figcaption>
        </figure>
     `
});

// EXTERNAL MODULE: ./src/app/components/SkillBlock.js
var SkillBlock = __webpack_require__(427);
// EXTERNAL MODULE: ./src/app/consts/skills.js
var skills = __webpack_require__(515);
;// ./src/app/blocks/home/Skills.js




/* harmony default export */ const Skills = ((t, t2) => {
  return /*html*/ `
        <sections id="skills" class="skills">
            <h2 class="h2 skill-header">${t.title}</h2>
            <div class="skills__content">
                <div class="skills__illustrations illustrations">
                    <img src="/images/logo-outline.svg" alt="Outline of AbdurRahman's logo" class="illustrations__logo">
                    ${Dots({ width: 3, height: 3 })}
                    ${Dots({ width: 4, height: 4 })}
                </div>
                <div class="skills__list">
                    ${Object.keys(skills/* default */.A)
                      .filter((id) => id !== "tool")
                      .map((id) => (0,SkillBlock/* default */.A)({ id }, t2))
                      .join("")}
                </div>

            </div>
        </sections>
    `;
});

;// ./node_modules/@vercel/speed-insights/dist/index.mjs
// package.json
var dist_name = "@vercel/speed-insights";
var version = "1.2.0";

// src/queue.ts
var initQueue = () => {
  if (window.si) return;
  window.si = function a(...params) {
    (window.siq = window.siq || []).push(params);
  };
};

// src/utils.ts
function isBrowser() {
  return typeof window !== "undefined";
}
function detectEnvironment() {
  try {
    const env = "production";
    if (env === "development" || env === "test") {
      return "development";
    }
  } catch (e) {
  }
  return "production";
}
function isDevelopment() {
  return detectEnvironment() === "development";
}
function computeRoute(pathname, pathParams) {
  if (!pathname || !pathParams) {
    return pathname;
  }
  let result = pathname;
  try {
    const entries = Object.entries(pathParams);
    for (const [key, value] of entries) {
      if (!Array.isArray(value)) {
        const matcher = turnValueToRegExp(value);
        if (matcher.test(result)) {
          result = result.replace(matcher, `/[${key}]`);
        }
      }
    }
    for (const [key, value] of entries) {
      if (Array.isArray(value)) {
        const matcher = turnValueToRegExp(value.join("/"));
        if (matcher.test(result)) {
          result = result.replace(matcher, `/[...${key}]`);
        }
      }
    }
    return result;
  } catch (e) {
    return pathname;
  }
}
function turnValueToRegExp(value) {
  return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getScriptSrc(props) {
  if (props.scriptSrc) {
    return props.scriptSrc;
  }
  if (isDevelopment()) {
    return "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js";
  }
  if (props.dsn) {
    return "https://va.vercel-scripts.com/v1/speed-insights/script.js";
  }
  if (props.basePath) {
    return `${props.basePath}/speed-insights/script.js`;
  }
  return "/_vercel/speed-insights/script.js";
}

// src/generic.ts
function injectSpeedInsights(props = {}) {
  var _a;
  if (!isBrowser() || props.route === null) return null;
  initQueue();
  const src = getScriptSrc(props);
  if (document.head.querySelector(`script[src*="${src}"]`)) return null;
  if (props.beforeSend) {
    (_a = window.si) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
  }
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  script.dataset.sdkn = dist_name + (props.framework ? `/${props.framework}` : "");
  script.dataset.sdkv = version;
  if (props.sampleRate) {
    script.dataset.sampleRate = props.sampleRate.toString();
  }
  if (props.route) {
    script.dataset.route = props.route;
  }
  if (props.endpoint) {
    script.dataset.endpoint = props.endpoint;
  } else if (props.basePath) {
    script.dataset.endpoint = `${props.basePath}/speed-insights/vitals`;
  }
  if (props.dsn) {
    script.dataset.dsn = props.dsn;
  }
  if (isDevelopment() && props.debug === false) {
    script.dataset.debug = "false";
  }
  script.onerror = () => {
    console.log(
      `[Vercel Speed Insights] Failed to load script from ${src}. Please check if any content blockers are enabled and try again.`
    );
  };
  document.head.appendChild(script);
  return {
    setRoute: (route) => {
      script.dataset.route = route ?? void 0;
    }
  };
}
var generic_default = {
  injectSpeedInsights,
  computeRoute
};

//# sourceMappingURL=index.mjs.map
;// ./src/app/views/Home.js









injectSpeedInsights()

;

/* harmony default export */ const Home = ((t, locale) => {
  return /*html*/ `
        ${Hero(t.hero)}
        ${Quote(t.quote)}
        ${Projects(t.projects, locale.projects)}
        ${Skills(t.skills, locale.skills)}
        ${About(t.about)}
        ${Contacts(t.contacts)}
        ${Motives(t.motives)}
    `
});


/***/ }),

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
            ${_consts_skills__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A[id]
              .map(
                (techKey) =>
                  /*html*/ `<li class="skill-block__skill"> <span class="skill-arrow">➞</span> ${_consts_techs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A[techKey]}</li>`
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
  Deployment: ['docker', 'aws', 'vercel'],
  testing: ['ReactTestingLibrary', 'unitTesting', 'vitest'],
  digitalMarketing: ['SEO', 'googleads', 'facebookads', 'promotion', 'emailmarketing'],
  others: ['wordpress', 'woocommerce', 'canva', 'videoediting'],
  tools: ['terminal', 'vscode', 'postman', 'jetbrains', 'xampp'],
  softSkills: ['communication', 'teamwork', 'creativity', 'adaptability', 'problem-solving'],
});


/***/ }),

/***/ 928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ts: 'TypeScript',
  js: 'JavaScript',
  java: 'Java',
  python: 'Python',

  dsa: 'DSA',
  oop: 'OOP',

  php: 'PHP',
  node: 'Node',
  tsnode: 'TS-Node',
  express: 'Express',
  nestjs: 'NestJS',

  sequelize: 'Sequelize',
  mongoose: 'Mongoose',
  prisma: 'Prisma',
  typeorm: 'TypeORM',

  json: 'JSON',
  rest: 'REST API',
  graphql: 'GraphQL',

  sql: 'SQL',
  mysql: 'MySQL',
  mongo: 'MongoDB',
  postgreSql: 'PostgreSQL',

  html: 'HTML',
  css: 'CSS',
  sass: 'SASS',
  scss: 'SCSS',
  ejs: 'EJS',

  react: 'React',
  next: 'Next',
  remix: 'Remix',
  angular: 'Angular',
  Bootstrap: 'Bootstrap',

  redux: 'Redux',
  reduxtoolkit: 'Redux Toolkit',
  rgrx: 'NgRx',
  zustand: 'Zustand',

  mui: 'Material UI',
  fluentui: 'Fluent UI',
  radix: 'Radix UI',
  daisyui: 'Daisy UI',
  tailwind: 'Tailwind CSS',
  bootstrap: 'Bootstrap',
  antdesign: 'Ant Design',
  chakra: 'Chakra UI',
  shadcn: 'Shadcn UI',

  Jest: 'Jest',
  vitest: 'Vitest',
  ReactTestingLibrary: 'React Testing LB',
  unitTesting: 'Unit Testing',

  Jasmine: 'Jasmine',
  aws: 'AWS',
  vercel: 'Vercel',
  netlify: 'Netlify',

  docker: 'Docker',
  gitlab: 'GitLab',
  bitbucket: 'BitBucket',
  jira: 'Jira',

  vscode: 'VSCode',
  terminal: 'Terminal',
  jetbrains: 'JetBrains',
  postman: 'Postman',
  composer: 'Composer',
  xampp: 'XAMPP',
  figma: 'UI/UX Design (Figma)',
  git: 'Git & GitHub',

  videoediting: 'Video Editing',
  SEO: 'SEO',
  googleads: 'Google Ads',
  googleanalytics: 'Google Analytics',
  facebookads: 'Facebook Ads',
  promotion: 'Promotion',
  communication: 'Communication',
  teamwork: 'Teamwork',
  creativity: 'Creativity',
  adaptability: 'Adaptability',
  'problem-solving': 'Problem Solving',

  wordpress: 'WordPress',
  woocommerce: 'WooCommerce',
  shopify: 'Shopify',
  canva: 'Canva',
  emailmarketing: 'Email Marketing',
  others: 'Others',
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
    id: 'financepro',
    techs: ['js', 'next', 'node', 'mysql'],
    links: { github: '/financepro', live: 'financepr.vercel.app' },
    hasImage: true,
  },
  {
    id: 'tofazzalhossainbhuiyan',
    techs: ['js', 'ts', 'react'],
    links: { github: '/profiles', live: 'tofazzal-hossain-bhuiyan.vercel.app' },
    hasImage: true,
  },

  {
    id: 'rarebd',
    techs: ['js', 'node', 'postgreSql'],
    links: { github: '/rareBDLtd', live: 'rarebd.com' },
    hasImage: true,
  },
  {
    id: 'nufbd',
    techs: ['js', 'next', 'postgreSql'],
    links: { github: '/nuf-bd', live: 'nuf-bd.com' },
    hasImage: true,
  },
  {
    id: 'gazisazzadhossain',
    techs: ['js', 'ts', 'react'],
    links: { github: '/profiles', live: 'gazi-sazzad-hossain.vercel.app' },
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