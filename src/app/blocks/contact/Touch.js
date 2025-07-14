export default (t) => {
  return /*html*/ `
          <section>
            <div>
              <form id="contactForm" action="https://formspree.io/f/xzblqwyw" method="POST" enctype="multipart/form-data">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email">
                <div id="emailError" class="error"></div>
            
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" cols="100"></textarea>
                <div id="messageError" class="error"></div>
            
                <button type="submit"> 🚀 Send Message</button>
              </form>
            </div>
        </section>
    `
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm')
  const emailInput = document.getElementById('email')
  const messageInput = document.getElementById('message')
  const emailError = document.getElementById('emailError')
  const messageError = document.getElementById('messageError')

  form.addEventListener('submit', function (event) {
    let isValid = true
    emailError.textContent = ''
    messageError.textContent = ''

    // Validate email
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Email is required'
      isValid = false
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = 'Invalid email format'
      isValid = false
    }

    // Validate message
    if (!messageInput.value.trim()) {
      messageError.textContent = 'Message is required'
      isValid = false
    }

    if (!isValid) {
      event.preventDefault() // Prevent form submission if validation fails
    }
  })

  function isValidEmail(email) {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
})