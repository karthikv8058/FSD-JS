const signUpform = document.querySelector("#signup-form");
const username = document.querySelector("#name");
const emailID = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordStrength = document.querySelector("#password-strength");
const confirmPassword = document.querySelector("#confirm");
const successMessage = document.querySelector("#success-message");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Helper functions

function showError(fieldId, message) {
  document.querySelector(`#${fieldId}-error`).textContent = message;

  const field = document.querySelector(`#${fieldId}`);
  field.classList.add("is-invalid");
  field.classList.remove("is-valid");
}

function clearError(fieldId) {
  document.querySelector(`#${fieldId}-error`).textContent = "";

  const field = document.querySelector(`#${fieldId}`);
  field.classList.remove("is-invalid");
  field.classList.add("is-valid");
}

username.addEventListener("input", () => {
  const value = username.value.trim();
  const fieldId = username.getAttribute("id");

  if (value.length === 0) {
    showError(fieldId, "Please enter a name");
  } else if (value.length < 3) {
    showError(fieldId, "Name must be atleast 3 characters");
  } else {
    clearError(fieldId);
  }
});

emailID.addEventListener("input", () => {
  const value = emailID.value.trim();
  const fieldId = emailID.getAttribute("id");

  if (value.length === 0) {
    showError(fieldId, "Please enter an email");
  } else if (!emailRegex.test(value)) {
    showError(fieldId, "Invalid email format");
  } else {
    clearError(fieldId);
  }
});

password.addEventListener("input", () => {
  const value = password.value.trim();
  // const confirmPasswordValue = confirmPassword.value.trim();
  const fieldId = password.getAttribute("id");
  // const confirmPasswordFieldId = confirmPassword.getAttribute("id");

  if (value.length === 0) {
    showError(fieldId, "Please enter a passord");
  }

  if (value.length < 8) {
    passwordStrength.textContent = "Weak password";
    // passwordStrength.classList.add("text-danger");
    passwordStrength.className = "small mt-1 text-danger"; //
    showError(fieldId, "Minimum 8 characters required");
  } else {
    passwordStrength.textContent = "Strong password";
    passwordStrength.className = "small mt-1 text-success";
    clearError(fieldId);
  }

  if (confirmPassword.value) {
    console.log("Confirm password");

    const confirmPasswordValue = confirmPassword.value.trim();
    const confirmPasswordFieldId = confirmPassword.getAttribute("id");
    // if (confirmPasswordValue.length === 0) {
    //   showError(confirmPasswordFieldId, "");
    // }
    if (confirmPasswordValue !== value) {
      showError(confirmPasswordFieldId, "Password does not match");
    } else {
      clearError(confirmPasswordFieldId);
    }
  }
});

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value) {
    console.log("Confirm password");

    const confirmPasswordValue = confirmPassword.value.trim();
    const confirmPasswordFieldId = confirmPassword.getAttribute("id");
    const value = password.value.trim();
    // if (confirmPasswordValue.length === 0) {
    //   showError(confirmPasswordFieldId, "");
    // }
    if (confirmPasswordValue !== value) {
      showError(confirmPasswordFieldId, "Password does not match");
    } else {
      clearError(confirmPasswordFieldId);
    }
  }
});

signUpform.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameValue = username.value.trim();
  const userEmail = emailID.value.trim();
  if (usernameValue.length === 0) {
    showError("name", "Please enter a name");
  }
  if (userEmail.length === 0) {
    showError("email", "Please enter an email");
  }
});
