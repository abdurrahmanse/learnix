import skills from 'constants/skills'
import techs from 'constants/techs'

export default ({ id }, t) => {
  return /*html*/ `
        <div class="skill-block">
            <div class="skill-block__name"> ${t[id]}</div>
            <ul class="skill-block__list">
            ${skills[id]
              .map(
                (techKey) =>
                  /*html*/ `<li class="skill-block__skill"> <span class="skill-arrow">➞</span> ${techs[techKey]}</li>`
              )
              .join('')}
            </ul>
        </div>
    `
}
