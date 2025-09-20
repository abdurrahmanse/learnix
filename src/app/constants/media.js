export { default } from '../consts/media'
import proxy from '../lib/media'

const media = {
  discord: { id: '914240860101681163', tag: '!abdurrahman#2396' },
  stackOverflow: { id: '19758208', name: 'AbdurRahman' },
  twitter: 'abdurrahmanse',
  linkedIn: 'abdurrahmanse',
  github: 'abdurrahmanse',
  figma: 'abdurrahmanse',
  replit: 'abdurrahmanse',
  codewars: 'abdurrahmanse',
  devTo: 'abdurrahmanse',
  cssBattle: 'abdurrahmanse',
  codepen: 'abdurrahmanse',
  dribble: 'abdurrahmanse',
  email: 'abdurrahmansoftw@gmail.com',
}

export default new Proxy(media, proxy)
