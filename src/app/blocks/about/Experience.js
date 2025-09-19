export default (t = {}) => {
  const items = t?.timeline ?? []
  const steps = t?.howIWork?.steps ?? []

  if (!items.length && !steps.length) return ''

  const title = t?.title || 'Experience'
  const howTitle = t?.howIWork?.title || 'How I Work'

  return /*html*/ `
    <section class="experience">
      <h2 class="h2">${title}</h2>
      <div class="experience__list">
        ${items
          .map(
            (it) => `
          <div class="experience__item">
            <div class="experience__role">${it.role}</div>
            <div class="experience__period">${it.period}</div>
            ${it.location ? `<div class="experience__location">${it.location}</div>` : ''}
            <ul class="experience__impact">
              ${(it.impact || []).map((i) => `<li>${i}</li>`).join('')}
            </ul>
          </div>`
          )
          .join('')}
      </div>
      ${
        steps.length
          ? `<div class="experience__how">
            <h3>${howTitle}</h3>
            <ol class="experience__steps" role="list">
              ${steps
                .map(
                  (s, i) => `
                <li class="experience__step">
                  <span class="experience__stepIndex">${i + 1}</span>
                  <span class="experience__stepTitle">${s}</span>
                </li>`
                )
                .join('')}
            </ol>
          </div>`
          : ''
      }
    </section>
  `
}
