import Dots from '@/components/Dots'

export default (t) => {
  return /*html*/ `
        <section class="hero">
            <div class="hero__content">
                <h1 class="hero__title">💻 ${t.title}</h1>
                <div class="hero__description">${t.description}</div>
                <a class="button button__primary" href="https://drive.google.com/file/d/1g7BZg10Wluy_9iIGpDN_DeLgjVrXdL5A/view?usp=sharing" download target="_blank" rel="noopener noreferrer">📄 ${t.resume} </a>
                <a class="button button__primary" href="#contacts">📞 ${t.contact} </a>
            </div>
            <div class="hero__illustrations">
                <img src="/images/logo-outline.svg" alt="Abdur Rahman - Full Stack JavaScript Developer" class="hero__logo">
                <img src="/images/heroImage.webp" alt="AbdurRahman" class="hero__image">
                <div class="hero__status">${t.status} <a href="https://abdurrahmans.netlify.app">Portfolio</a></div>
                ${Dots({})}
            </div>
        </section>
    `
}
