import Touch, { initializeContactForm } from '@/blocks/contact/Touch.js'
import Path from '@/components/Path.js'

import 'styles/pages/contact.sass'

export default (t, locale) => {
  // Ensure the form is initialized after the component is rendered
  setTimeout(initializeContactForm, 0);
  return /*html*/ `
        ${Path({ description: t.description })}
        ${Touch(t.touch)}
    `
}
