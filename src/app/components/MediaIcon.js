import media from '@/consts/media'

export default ({ name }) => {
  return /*html*/ `
    <a href="${media[name]}" class="media" target="_blank" rel="noopener noreferrer">
      <img src="/images/icons/${name}.svg" alt="${name}" class="media__icon" loading="lazy"/>
        </a>`
}
