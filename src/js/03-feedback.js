import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener(
  "input",
  throttle(function () {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  }, 500)
);

window.addEventListener("load", function () {
  const savedFormData = localStorage.getItem("feedback-form-state");
  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    emailInput.value = email;
    messageInput.value = message;
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
  localStorage.removeItem("feedback-form-state");
});
