// 1. Toggle Theme (Light / Dark)
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("theme-light");
  body.classList.toggle("theme-dark");

  // Change button text dynamically
  if (body.classList.contains("theme-dark")) {
    themeBtn.textContent = "Switch to Light";
  } else {
    themeBtn.textContent = "Switch to Dark";
  }
});

// 2. Update Footer Year Automatically
document.getElementById("year").textContent = new Date().getFullYear();

// 3. Contact Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from refreshing the page

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Name validation
  if (name.length < 3) {
    showError("name", "Enter 3 or more characters!");
    isValid = false;
  } else {
    hideError("name");
  }

  // Email validation (basic pattern)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    showError("email", "Enter a valid email address!");
    isValid = false;
  } else {
    hideError("email");
  }

  // Message validation
  if (message.length < 10) {
    showError("message", "Message must be at least 10 characters!");
    isValid = false;
  } else {
    hideError("message");
  }

  // If all fields are valid, show success message
  if (isValid) {
    alert("✅ Form submitted successfully!");
    form.reset();
  }
});

// Helper Functions for showing/hiding error messages
function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorMsg = field.parentElement.querySelector(".error-msg");
  errorMsg.textContent = message;
  errorMsg.style.color = "red";
  errorMsg.style.display = "block";
}

function hideError(fieldId) {
  const field = document.getElementById(fieldId);
  const errorMsg = field.parentElement.querySelector(".error-msg");
  errorMsg.style.display = "none";
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // منع الريلود
  const messageElement = document.getElementById("formMessage");
  messageElement.textContent = "✅ Your message has been sent successfully!";
  messageElement.style.display = "block";

  // مسح البيانات بعد الإرسال
  this.reset();

  // إخفاء الرسالة بعد 3 ثواني
  setTimeout(() => {
    messageElement.style.display = "none";
  }, 3000);
});
