import media from '@/consts/media'
import projects from '@/consts/projects'
import techs from '@/consts/techs'
import websites from '@/consts/websites'

function mapLinks(links) {
  function map(link) {
    let href = `https://${link === 'live' ? '' : websites[link]}${links[link]}`

    if (link === 'figma') href = `https://figma.com/community/file/${links[link]}`
    if (link === 'github' && links[link].startsWith('/')) href = media.github + links[link]

    const className = link === 'cached' ? 'button__secondary' : ''
    const name = link === 'github' ? 'Code' : `${link[0].toUpperCase()}${link.slice(1)}`

    return /*html*/ `<a href="${href}" target="_blank" rel="noopener noreferrer" class="button ${className}">${name} →</a>`
  }

  return Object.keys(links).map(map).join('')
}

export default ({ id }, t) => {
  const { hasImage, techs: projectTech, links } = projects.find((project) => project.id === id)

  return /*html*/ `
        <div class="project">
            ${
              hasImage
                ? `<img src="/images/projects/${id}.webp" alt="${t[id].name}" class="project__image" loading="lazy" width="640" height="360">`
                : ''
            }
            
            <ul class="project__techs">
                ${projectTech.map((tech) => /*html*/ `<li class="project__tech"> ➞ ${techs[tech]}</li>`).join('')}
            </ul> 

      <div class="project__content">
      <div class="project__name">${t[id].name}</div>
        <div class="project__description">${t[id].description}</div>
        <div class="project__links">${mapLinks(links)} ${
    t[id]?.caseStudy ? `<a class="button button__secondary" href="/case-study?id=${id}">Case study →</a>` : ''
  }
          </div>
          </div>
        </div> 
    `
}
