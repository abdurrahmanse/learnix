import projects from 'constants/projects'
import websites from 'constants/websites'
import 'styles/pages/projects.sass'

function getParam(name) {
  const params = new URLSearchParams(window.location.search)
  return params.get(name)
}

function renderLinks(links = {}) {
  const out = []
  if (links.live)
    out.push(`<a class="button" href="https://${links.live}" target="_blank" rel="noopener noreferrer">Live →</a>`)
  if (links.github)
    out.push(
      `<a class="button button__secondary" href="${
        links.github.startsWith('/') ? websites.github + links.github : 'https://' + links.github
      }" target="_blank" rel="noopener noreferrer">Code →</a>`
    )
  if (links.figma)
    out.push(
      `<a class="button button__secondary" href="https://figma.com/community/file/${links.figma}" target="_blank" rel="noopener noreferrer">Figma →</a>`
    )
  return out.join(' ')
}

export default (t, locale) => {
  const id = getParam('id')
  const study = locale.caseStudies?.[id]
  const project = projects.find((p) => p.id === id)

  if (!id || !study || !project) {
    return /*html*/ `
      <section class="container">
        <h2 class="h2">${t?.notFound || 'Case study not found'}</h2>
        <p><a class="button" href="/projects">← ${t?.backToProjects || 'Back to Projects'}</a></p>
      </section>
    `
  }

  return /*html*/ `
    <section class="container case">
      <h1 class="h2">${study.title}</h1>
      <p class="case__intro">${study.summary}</p>

      <div class="case__grid">
        <div class="case__section">
          <h3>Problem</h3>
          <p>${study.problem}</p>
        </div>
        <div class="case__section">
          <h3>Role</h3>
          <p>${study.role}</p>
        </div>
        <div class="case__section">
          <h3>Stack</h3>
          <p>${study.stack}</p>
        </div>
        <div class="case__section">
          <h3>Solution</h3>
          <p>${study.solution}</p>
        </div>
        <div class="case__section">
          <h3>Impact</h3>
          <ul>
            ${study.metrics.map((m) => `<li>➜ ${m}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="case__links">
        ${renderLinks(project.links)}
        <a class="button button__secondary" href="/projects">← ${t.backToProjects}</a>
      </div>
    </section>
  `
}
