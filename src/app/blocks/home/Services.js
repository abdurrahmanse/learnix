// Services block for Skills & Expertise section (reuses services from services/Services.js)
const Services = require('../services/Services.js')

function ServicesBlock() {
  // Reuse the HTML from the main Services block, but adapt for embedding in Skills
  // Optionally, you could customize the markup here if needed
  return /*html*/ `
    <div class="skills__services">
      <h3>Services</h3>
      ${Services().replace('<section class="services-section">', '').replace('</section>', '')}
    </div>
  `
}

module.exports = ServicesBlock
