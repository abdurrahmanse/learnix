const defaultLocale = 'en'

function setLocaleHander() {
  const options = document.querySelectorAll('.dropdown__option')
  const label = document.querySelector('.dropdown__label')

  options.forEach((option) => {
    if (option.innerHTML === localStorage.locale)
      [label.innerHTML, option.innerHTML] = [localStorage.locale, label.innerHTML]

    option.addEventListener('click', () => {
      localStorage.locale = option.innerHTML

      window.location.reload()
    })
  })
}

function deepMerge(base, override) {
  if (override == null) return base
  if (Array.isArray(base) || Array.isArray(override)) return override ?? base
  if (typeof base !== 'object' || typeof override !== 'object') return override ?? base
  const out = { ...base }
  for (const k in override) {
    out[k] = k in base ? deepMerge(base[k], override[k]) : override[k]
  }
  return out
}

async function getLocale() {
  const code = localStorage.locale ?? defaultLocale
  const en = await fetch(`/locales/en.json`).then((r) => r.json())
  if (code === 'en') return en

  try {
    const current = await fetch(`/locales/${code}.json`).then((r) => r.json())
    return deepMerge(en, current)
  } catch (_) {
    return en
  }
}

export default setLocaleHander
export { getLocale }
