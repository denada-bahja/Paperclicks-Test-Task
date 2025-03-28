const changeContainerBtn = document.getElementById('changeContainerBtn');
const timeDropdown = document.getElementById('timeDropdown');
const container = document.getElementById('container');

changeContainerBtn.addEventListener('click', () => {
  if (!timeDropdown.value) {
    alert('Please select a time before continuing.');
    return;
  }

  container.innerHTML = `
    <h1 class="second-text">Add Your Personal Details</h1>

    <input type="text" id="firstName" placeholder="First name" required>
    <input type="text" id="lastName" placeholder="Last name" required>
    <input type="email" id="email" placeholder="Email" required>
    <input type="tel" id="phone" placeholder="Phone Number" required>

    <div class="checkbox-container">
      <input type="checkbox" id="consent">
      <label for="consent">
        By clicking the button above, you acknowledge, consent, and agree to the following: a) Our Privacy Policy and consent to receive notices and other communications electronically; b) We take your privacy seriously. You are providing express written consent for us to share your information with up to four (4) of its and for, parties calling on behalf of, or authorized third parties on their behalf to contact you (including through automated means; e.g. autodialing, text, and pre-recorded messaging) about legal services or other Mass Tort related offers via telephone, mobile device (including SMS and MMS) and/or email, even if your telephone number is currently listed on any state, federal, local, or corporate Do Not Call list; c) Consent to be contacted is not required in order to purchase goods or services from or that contact you. You may choose to speak with an individual service provider by dialing (888) 888-8888.  
      </label>
    </div>
    <button class="submit-btn" id="submitBtn">SUBMIT YOUR DETAILS ></button>
    <p id="errorMessage" >Please complete all fields and agree to the terms.</p>
    <p id="successMessage">Form submitted successfully!</p>`;


  const submitBtn = document.getElementById('submitBtn');

  submitBtn.addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const consent = document.getElementById('consent').checked;
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    if (!firstName || !lastName || !email || !phone || !consent) {
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';
    } else {
      errorMessage.style.display = 'none';
      successMessage.style.display = 'block';

      setTimeout(() => {
        container.innerHTML = `
          <h1 class="third-text">Summary of Your Details</h1>
          <p><strong>Best Time to Reach You:</strong> ${timeDropdown.value}</p>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p style="color:green;">Your details have been successfully submitted!</p>
        `;
      }, 1000);
    }
  });
});
