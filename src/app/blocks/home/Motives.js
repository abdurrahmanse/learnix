export default (t) => {
  return /*html*/ `
          <figure class="quote">
              <blockquote class="quote__text">${t.motive}</blockquote>
              <figcaption class="quote__author">${t.author}</figcaption>
          </figure>
      `
}
