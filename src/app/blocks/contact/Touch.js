export const initializeContactForm = () => {
  const form = document.getElementById('contactForm')
  const emailInput = document.getElementById('email')
  const subjectInput = document.getElementById('subject')
  const messageInput = document.getElementById('message')
  const emailError = document.getElementById('emailError')
  const subjectError = document.getElementById('subjectError')
  const messageError = document.getElementById('messageError')

  if (!form) return; // Ensure form exists before attaching listeners

  form.addEventListener('submit', function (event) {
    let isValid = true
    emailError.textContent = ''
    subjectError.textContent = ''
    messageError.textContent = ''

    // Validate email
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Email is required'
      isValid = false
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = 'Invalid email format'
      isValid = false
    }

    // Validate subject
    if (!subjectInput.value.trim()) {
      subjectError.textContent = 'Subject is required'
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
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/
    return emailRegex.test(email)
  }
}

export default (t) => {
  return /*html*/ `
        <section class="contact-section">
            <div class="contact-container">
                <h2 class="contact-title">Get In Touch 📬</h2>
                <p class="contact-description">Have a project in mind or just want to say hello? Fill out the form below or reach out through my social channels!</p>
                <div class="contact-content">
                    <form id="contactForm" action="https://formspree.io/f/xzblqwyw" method="POST" enctype="multipart/form-data" class="contact-form">
                        <div class="form-group">
                            <label for="email">✉️ Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your Email Address">
                            <div id="emailError" class="error"></div>
                        </div>
                        <div class="form-group">
                            <label for="subject">📝 Subject:</label>
                            <input type="text" id="subject" name="subject" placeholder="Subject of your message">
                            <div id="subjectError" class="error"></div>
                        </div>
                        <div class="form-group">
                            <label for="message">💬 Message:</label>
                            <textarea id="message" name="message" rows="7" placeholder="Your Message"></textarea>
                            <div id="messageError" class="error"></div>
                        </div>
                        <button type="submit" class="submit-button">🚀 Send Message</button>
                    </form>
                    <div class="contact-info">
                        <h3>Connect with me:</h3>
                        <p>I'm always open to new opportunities and collaborations. Feel free to connect!</p>
                        <p><strong>Email:</strong> abdurrahmansoftw@gmail.com </p>
                        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/abdurrahmanse" target="_blank">abdurrahmanse</a></p>
                        <p><strong>GitHub:</strong> <a href="https://github.com/abdurrahmanse" target="_blank">abdurrahmanse</a></p>
                    </div>
                </div>
            </div>
        </section>
    `
}