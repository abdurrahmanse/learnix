// Service.js - View for the Service page
import Services from '@/blocks/services/Services.js'
import Button from '@/components/Button.js'
import 'styles/pages/services.sass'

export default (t) => {
  return /*html*/`
    <main class="service-page">
      <header class="service-hero">
        <div class="hero-text">
          <h1 class="gradient">${t.title}</h1>
          <p class="lead">${t.description}</p>
          ${Array.isArray(t.expectations) && t.expectations.length ? `
            <ul class="expectations">${t.expectations.map((e)=>`<li>${e}</li>`).join('')}</ul>
          `: ''}
          ${t.cta ? Button({ type: 'button', text: t.cta.text, link: t.cta.link }) : ''}
        </div>
      </header>
      ${Services({ title: t.title, items: t.items })}
    </main>
  `
}
