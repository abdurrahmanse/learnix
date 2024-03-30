/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
  {
    id: 'financepro',
    techs: ['js', 'next', 'node', 'mysql'],
    links: { github: '/financepro', live: 'financepr.vercel.app' },
    hasImage: true,
  },
  {
    id: 'helpdesk',
    techs: ['ts', 'next', 'prisma', 'mysql'],
    links: { github: '/helpdesk', live: 'helpdesk-ecru.vercel.app' },
    hasImage: true,
  },
  {
    id: 'employeemanagement',
    techs: ['ts', 'next', 'shadcn'],
    links: {
      github: '/employee-management',
      live: 'employeemanagementsystem.vercel.app/dashboard',
    },
    hasImage: true,
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

export default projects
