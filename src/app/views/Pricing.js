import Button from '@/components/Button.js'
import 'styles/pages/pricing.sass'

export default (t) => {
  const tiers = t?.tiers || []
  return /*html*/ `
    <main class="pricing-page">
      <header class="pricing-hero">
        <h1 class="gradient">${t?.title || 'Pricing'}</h1>
        ${t?.description ? `<p class="lead">${t.description}</p>` : ''}
      </header>
      <section class="pricing-grid" aria-label="Pricing options">
        ${tiers
          .map(
            (tier) => `
          <article class="pricing-card">
            <h2 class="pricing-title">${tier.title}</h2>
            <div class="pricing-price">
              ${tier.period ? `<span class="period">${tier.period}</span>` : ''}
              <span class="amount"> ${tier.price}</span>
            </div>
            ${
              tier.features?.length
                ? `<ul class="features">${tier.features.map((f) => `<li>${f}</li>`).join('')}</ul>`
                : ''
            }
            ${tier.cta ? Button({ type: 'button', text: tier.cta.text, link: tier.cta.link }) : ''}
          </article>
        `
          )
          .join('')}
      </section>
    </main>
  `
}
