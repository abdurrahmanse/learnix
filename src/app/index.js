import routes from './consts/routes'
import loadCssFile from './helpers/loadCssFile'
import localeHandler from './helpers/localeHandler'
import replacePath from './helpers/replacePath'
import startTitleAnimation from './helpers/startTitleAnimation'
import Layout from './views/Layout'

import 'styles/styles.sass'

const rootId = 'root'
async function render() {
  const path = routes[window.location.pathname] ?? routes['/404']

  loadCssFile(path.name)
  startTitleAnimation(path.name)

  document.getElementById(rootId).innerHTML = await Layout((await import(`./views/${path.element}`)).default, path)
}

replacePath()
  .then(() => render())
  .then(() => localeHandler())
