import skills from '@/consts/skills'
import techs from '@/consts/techs'

export default ({ id }, t) => {
  return /*html*/ `
        <div class="skill-block">
            <div class="skill-block__name"> ${t[id]}</div>
            <ul class="skill-block__list">
            ${(skills[id].length === 2 ? techs.slice(...skills[id]) : skills[id].map((techIndex) => techs[techIndex]))
              .map(
                (tech, index) =>
                  /*html*/ `<li class="skill-block__skill"> <span class="skill-arrow">➞</span> ${tech}</li>`
              )
              .join('')}
            </ul>
        </div>
    `
}
