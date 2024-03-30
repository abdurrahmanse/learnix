import proxy from '../proxies/media'

const media = {
  discord: { id: '914240860101681163', tag: '!abdurrahman#2396' },
  stackOverflow: { id: '19758208', name: 'AbdurRahman' },
  twitter: 'arswe',
  linkedIn: 'arswe',
  github: 'arswe',
  figma: 'arswe',
  replit: 'arswe',
  codewars: 'arswe',
  devTo: 'arswe',
  cssBattle: 'arswe',
  codepen: 'arswe',
  dribble: 'arswe',
  email: 'abdurrahmansoftw@gmail.com',
}

export default new Proxy(media, proxy)
