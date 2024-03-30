import About from '@/blocks/home/About.js'
import Contacts from '@/blocks/home/Contacts.js'
import Hero from '@/blocks/home/Hero.js'
import Motives from '@/blocks/home/Motives.js'
import Projects from '@/blocks/home/Projects.js'
import Quote from '@/blocks/home/Quote.js'
import Skills from '@/blocks/home/Skills.js'
import { injectSpeedInsights } from '@vercel/speed-insights'

injectSpeedInsights()

import 'styles/pages/home.sass'

export default (t, locale) => {
  return /*html*/ `
        ${Hero(t.hero)}
        ${Quote(t.quote)}
        ${Projects(t.projects, locale.projects)}
        ${Skills(t.skills, locale.skills)}
        ${About(t.about)}
        ${Contacts(t.contacts)}
        ${Motives(t.motives)}
    `
}
