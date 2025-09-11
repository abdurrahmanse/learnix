import Footer from '@/components/Footer.js'
import Header from '@/components/Header.js'
import { getLocale } from '@/helpers/localeHandler.js'

export default async (content, path) => {
  const locale = await getLocale()

  return /*html*/ `
        <a class="skip-link" href="#main">Skip to content</a>
        ${Header(locale.header)}
        <div class="container content" id="main">
            ${content(locale.pages[path.name], locale)}
        </div>
        ${Footer(locale.footer)}
    `
}
