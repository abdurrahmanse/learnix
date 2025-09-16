import 'styles/components/skillBlock.sass'

export default function ServicesEmbed(t) {
  const services = [
    { title: t.webdevTitle, description: t.webdevDesc },
    { title: t.uiuxTitle, description: t.uiuxDesc },
    { title: t.performanceTitle, description: t.performanceDesc },
  ]

  return /*html*/ `
    <div class="skill-block">
      <div class="skill-block__name">${t.title}</div>
      <ul class="skill-block__list">
        ${services
          .map(
            (s) =>
              /*html*/ `<li class="skill-block__skill"><span class="skill-arrow">➞</span> <strong>${s.title}:</strong> ${s.description}</li>`
          )
          .join('')}
      </ul>
    </div>`
}
