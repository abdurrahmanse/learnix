import Touch from '@/blocks/contact/Touch.js'
import Path from '@/components/Path.js'

import 'styles/pages/contact.sass'

export default (t, locale) => {
  return /*html*/ `
        ${Path({ description: t.description })}
        ${Touch(t.touch)}
    `
}
