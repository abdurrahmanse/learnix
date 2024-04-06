import routes from '@/consts/routes'
import MediaIcon from './MediaIcon'

const paths = ['/', '/about-me', '/projects', '/contacts']

export default (t) => {
  return /*html*/ `
        <header class="header">
            <input class="hamburger" type="checkbox" aria-label="Menu" />

            <div class="media-header">
                <div class="media-header__links">
                    ${['linkedIn', 'github', 'email'].map((name) => MediaIcon({ name })).join('')}
                </div>
                <span class="media-header__line"></span>
            </div>


            <div class="container">
                <div class="header__inner">
                    <a class="logo" href="/">
                        <img class="logo__img" src="/images/logo.svg" alt="AbdurRahman logo">
                        <span class="logo__name">AbdurRahman</span>
                    </a>
                    <div class="header__links">
                        ${paths
                          .map(
                            (path) => /*html*/ `
                                <a href="${path}" class="header__link ${
                              window.location.pathname === path ? 'header__link_active' : ''
                            }">${t[routes[path].name]}</a>
                            `
                          )
                          .join('')}
                    </div>
                    <div class="dropdown">
                        <span class="dropdown__label">EN</span>
                        <div class="dropdown__list">
                            <div class="dropdown__option">BD</div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    `
}
