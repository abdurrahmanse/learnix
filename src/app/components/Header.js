import routes from '@/consts/routes'
import MediaIcon from './MediaIcon'

const paths = ['/', '/about-me', '/projects', '/contacts']

export default (t) => {
  return /*html*/ `
        <header class="header">
            <input class="hamburger" type="checkbox" aria-label="Menu" />

            <div class="media-header">
                <span class="media-header__line"></span>
                <div class="media-header__links">
                    ${['linkedIn', 'github', 'email'].map((name) => MediaIcon({ name })).join('')}
                </div>
            </div>


            <div class="container">

                <div class="header__inner">
                    <a class="logo" href="/">
                        <img class="logo__img" src="/images/logo.svg" alt="AbdurRahman, Full Stack Developer, JavaScript Developer, TypeScript Engineer, Software Engineer Portfolio, Frontend Developer, Backend Developer, Node.js, React, Next.js, Developer in Dhaka Bangladesh">
                        <span class="logo__name">Abdur Rahman</span>
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
                        <span class="dropdown__label">en</span>

                        <div class="dropdown__list">
                            <div class="dropdown__option">bd</div>
                            <div class="dropdown__option">ar</div>
                            <div class="dropdown__option">hi</div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    `
}
