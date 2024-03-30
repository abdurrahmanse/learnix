import About from '@/blocks/about/About.js'
import Facts from '@/blocks/about/Facts.js'
import Skills from '@/blocks/about/Skills.js'
import Path from '@/components/Path.js'

import 'styles/pages/about.sass'

export default (t, locale) => {
  return /*html*/ `
        ${Path({ description: t.description })}
        ${About(t.about)}
        ${Skills(t.skills, locale.skills)}
        ${Facts(t.facts)}
    `
}
