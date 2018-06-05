// Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');


// Event Listeners
eventListeners();

function eventListeners() {
     // App Init
     document.addEventListener('DOMContentLoaded', appInit);

     // Validate the forms
     email.addEventListener('blur', validateField);
     subject.addEventListener('blur', validateField);
     message.addEventListener('blur', validateField);

     // Send Email & reset button
     sendEmailForm.addEventListener('submit', sendEmail);
     resetBtn.addEventListener('click', resetForm);
}


// Functions

// App Initialization
function appInit() {
     // disable the send button on load
     sendBtn.disabled = 'true';
}

function sendEmail(e) {
     

     // show the spinner
     const spinner = document.querySelector('#spinner');
     

     // Show the image
     

     // Hide Spinner then show the send Email image
     
}

// Validate the fields
function validateField() {
     let errors;

     // Validate the Length of the field
     validateLength(this);

     // Validate the email
     if (this.type === 'email') {
         validateEmail(this);
     }

     // Both will return errors, then check if there're any errors
     

     // Check that the inputs are not empty
     
}

// Validate the Length of the fields
function validateLength(field) {
     if (field.value.length > 0) {
         field.style.borderBottomColor = 'green';
         field.classList.remove('error');
     } else {
         field.style.borderBottomColor = 'red';
         field.classList.add('error');
     }
}

// validate email (checks for @ in the value )
function validateEmail(field) {
    let emailText = field.value;
    if (emailText.indexOf('@') !== -1) {
         field.style.borderBottomColor = 'green';
         field.classList.remove('error');
     } else {
         field.style.borderBottomColor = 'red';
         field.classList.add('error');
     } 
    
}

// Reset the form
function resetForm(e) {
      

}