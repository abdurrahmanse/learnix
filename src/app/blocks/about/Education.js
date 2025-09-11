export default (t = {}) => {
  const items = t?.items ?? []
  if (!items.length) return ''

  const title = t?.title || 'Education'

  return /*html*/ `
    <section class="education">
      <h2 class="h2">${title}</h2>
      <div class="education__list">
        ${items
          .map(
            (it) => `
          <div class="education__item">
            <div class="education__degree">${it.degree}${it.program ? ` — ${it.program}` : ''}</div>
            ${it.year ? `<div class="education__year">${it.year}</div>` : ''}
            ${it.institution ? `<div class="education__institution">${it.institution}</div>` : ''}
            ${it.description ? `<div class="education__description">${it.description}</div>` : ''}
          </div>`
          )
          .join('')}
      </div>
    </section>
  `
}
