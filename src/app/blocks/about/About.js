export default (t) => {
  return /*html*/ `
        <section class="about">
            <div class="about__illustrations">
                <img src="/images/me.webp" alt="AbdurRahman's profile picture" class="about__image">
            </div>
            <div class="about__text">
                ${t.description.map((text) => /*html*/ `<p class="about__description">✨ ${text}</p>`).join('')}
            </div>
        </section>
    `
}
