function set(name, content) {
  const el = document.querySelector(`meta[name="${name}"]`)
  if (el) el.setAttribute('content', content)
}

function setProp(property, content) {
  const el = document.querySelector(`meta[property="${property}"]`)
  if (el) el.setAttribute('content', content)
}

export default function applyMeta(routeName, locale) {
  const pages = locale?.pages || {}
  let title = 'Abdur Rahman | Portfolio'
  let description = 'Full‑stack Software Engineer (JavaScript/TypeScript) building performant, accessible web apps.'

  if (routeName === 'home') {
    title = `Abdur Rahman — ${pages.home?.hero?.title?.replace(/<[^>]*>/g, '') || 'Full‑Stack Software Engineer'}`
    description = pages.home?.hero?.description || description
  } else if (routeName === 'projects') {
    title = 'Projects — Abdur Rahman'
    description = pages.projects?.description || description
  } else if (routeName === 'about') {
    title = 'About Me — Abdur Rahman'
    description = pages.about?.description || description
  } else if (routeName === 'contacts') {
    title = 'Contact — Abdur Rahman'
    description = pages.contacts?.description || description
  } else if (routeName === 'case') {
    const id = new URLSearchParams(window.location.search).get('id')
    const study = locale.caseStudies?.[id]
    if (study) {
      title = `${study.title} — Case Study`
      description = study.summary || description
    } else {
      title = 'Case Study — Abdur Rahman'
    }
  } else if (routeName === 'pricing') {
    title = 'Pricing — Abdur Rahman'
    description = pages.pricing?.description || description
  }

  const url = window.location.origin + window.location.pathname + window.location.search + window.location.hash
  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) canonical.setAttribute('href', url)

  document.title = title
  set('title', title)
  set('description', description)

  setProp('og:title', title)
  setProp('og:description', description)
  setProp('og:url', url)
  set('twitter:title', title)
  set('twitter:description', description)
}

export function applyHtmlLang(localeCode) {
  document.documentElement.setAttribute('lang', localeCode || 'en')
}
