import media from 'constants/media'

const contacts = [
  { name: 'email', text: media.emailRaw },
  { name: 'github', text: media.github },
  { name: 'linkedIn', text: media.linkedIn },
]

export default (t) => {
  return /*html*/ `
  <section class="contacts" id="contacts" aria-label="Contact information">
            <h2 class="h2">${t.title}</h2>
            <div class="contacts__content">
                <p class="contacts__description">
                ${t.text}
                </p>
       
                <div class="contacts__media">
                    <h3 class="contacts__title">${t.media}</h3>
                    <div class="contacts__list">
                        ${contacts
                          .map(
                            (contact) => /*html*/ `
              <a class="contact" href="${media[contact.name]}" target="_blank" rel="noopener noreferrer">
                  <img src="/images/icons/${contact.name}.svg" alt="${
                              contact.name.charAt(0).toUpperCase() + contact.name.slice(1)
                            } icon" loading="lazy">
                                <div class="contact__name">${contact.text}</div>
                            </a>
                        `
                          )
                          .join('')}
                    </div>
                </div>
            </div>
        </section>
    `
}
