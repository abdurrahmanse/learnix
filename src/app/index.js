import routes from './consts/routes'
import loadCssFile from './helpers/loadCssFile'
import localeHandler, { getLocale } from './helpers/localeHandler'
import applyMeta, { applyHtmlLang } from './helpers/meta'
import replacePath from './helpers/replacePath'
import startTitleAnimation from './helpers/startTitleAnimation'
import Layout from './views/Layout'

import 'styles/styles.sass'

const rootId = 'root'
async function render() {
  const path = routes[window.location.pathname] ?? routes['/404']

  loadCssFile(path.name)
  startTitleAnimation(path.name)

  const view = (await import(`./views/${path.element}`)).default
  const html = await Layout(view, path)
  document.getElementById(rootId).innerHTML = html

  const t = await getLocale()
  applyMeta(path.name, t)
  applyHtmlLang(localStorage.locale)
}

replacePath()
  .then(() => render())
  .then(() => localeHandler())
