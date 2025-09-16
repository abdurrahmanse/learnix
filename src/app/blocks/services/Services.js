// Services.js - Block for listing services from localized items
export default (input) => {
  const opts = Array.isArray(input) ? { items: input } : input || {}
  const items = Array.isArray(opts.items) ? opts.items : []
  const title = opts.title
  return /*html*/ `
    <section class="services-section">
      ${title ? `<h2 class="services-title h2">${title}</h2>` : ''}
      <div class="services-list">
        ${items
          .map((service, idx) => {
            const icon = ['⚡️','🎨','🚀'][idx % 3]
            const highlights = Array.isArray(service.highlights)
              ? `<ul class="service-highlights">${service.highlights
                  .map((h) => `<li><span class="dot">•</span>${h}</li>`)
                  .join('')}</ul>`
              : ''
            return `
              <article class="service-item" aria-label="${service.title}">
                <div class="service-icon" aria-hidden="true">${icon}</div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-desc">${service.description}</p>
                ${highlights}
              </article>
            `
          })
          .join('')}
      </div>
    </section>
  `
}
