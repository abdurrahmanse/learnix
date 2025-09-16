import SkillBlock from '@/components/SkillBlock'
import skills from '@/consts/skills'

export default (t, t2, services) => {
  return /*html*/ `
        <section class="skills">
            <h2 class="h2">⚙️ ${t.title}</h2>
            <div class="skills__content">
                ${Object.keys(skills)
                  .map((id) => SkillBlock({ id }, t2))
                  .join('')}
                ${
                  services?.items?.length
                    ? `
                <div class="skill-block">
                  <div class="skill-block__name">${services.title}</div>
                  <ul class="skill-block__list">
                    ${services.items
                      .map(
                        (s) =>
                          `<li class="skill-block__skill"><span class="skill-arrow">➞</span> <strong>${s.title}:</strong> ${s.description}</li>`
                      )
                      .join('')}
                  </ul>
                </div>`
                    : ''
                }
            </div>
        </section>
 `
}
