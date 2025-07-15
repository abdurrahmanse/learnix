"use strict";
(self["webpackChunkabdurrahmans"] = self["webpackChunkabdurrahmans"] || []).push([[340],{

/***/ 340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contacts)
});

;// ./src/app/blocks/contact/Touch.js
const initializeContactForm = () => {
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

/* harmony default export */ const Touch = ((t) => {
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
                            <textarea id="message" name="message" rows="4" placeholder="Your Message"></textarea>
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
});
// EXTERNAL MODULE: ./src/app/components/Path.js
var Path = __webpack_require__(778);
;// ./src/app/views/Contacts.js





/* harmony default export */ const Contacts = ((t, locale) => {
  // Ensure the form is initialized after the component is rendered
  setTimeout(initializeContactForm, 0);
  return /*html*/ `
        ${(0,Path/* default */.A)({ description: t.description })}
        ${Touch(t.touch)}
    `
});


/***/ }),

/***/ 778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ description }) => {
  return /*html*/ `
        <div class="path">
            <h1 class="h1 path__name">${window.location.pathname.slice(1)}</h1>
            <p class="path__description">${description}</p>
        </div>
    `
});


/***/ })

}]);