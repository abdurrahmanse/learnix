function set(name, content) {
  const el = document.querySelector(`meta[name="${name}"]`)
  if (el) el.setAttribute('content', content)
}

function setProp(property, content) {
  const el = document.querySelector(`meta[property="${property}"]`)
  if (el) el.setAttribute('content', content)
}

export default function applyMeta(routeName, t) {
  let title = 'Abdur Rahman | Portfolio'
  let description = 'Full‑stack Software Engineer (JavaScript/TypeScript) building performant, accessible web apps.'

  if (routeName === 'home') {
    title = `Abdur Rahman — ${t.home?.hero?.title?.replace(/<[^>]*>/g, '') || 'Full‑Stack Software Engineer'}`
    description = t.home?.hero?.description || description
  } else if (routeName === 'projects') {
    title = 'Projects — Abdur Rahman'
    description = t.projects?.description || description
  } else if (routeName === 'about') {
    title = 'About Me — Abdur Rahman'
    description = t.about?.description || description
  } else if (routeName === 'contacts') {
    title = 'Contact — Abdur Rahman'
    description = t.contacts?.description || description
  }

  document.title = title
  set('title', title)
  set('description', description)

  setProp('og:title', title)
  setProp('og:description', description)
  set('twitter:title', title)
  set('twitter:description', description)
}

export function applyHtmlLang(localeCode) {
  document.documentElement.setAttribute('lang', localeCode || 'en')
}