"use strict";
const signinButton = document.querySelector(".signinButton");
const signupButton = document.querySelector(".signupButton");
const hidden_signin = document.querySelector(".hidden-signin");
const hidden_signup = document.querySelector(".hidden-signup");
const signin_close_bar = document.querySelector(".signin-close-bar");
const signup_close_bar = document.querySelector(".signup-close-bar");
const okBtn = document.querySelector(".okBtn");
const Successfull = document.querySelector(".Successfull");
const Register = document.querySelector(".register");
const input_place = document.querySelector("input");
const overlay = document.querySelector(".overlay");

/* Functions */
function view_signinform() {
  hidden_signin.classList.remove("hidden-signin");
  overlay.classList.remove("hidden");
}
function hide_signinform() {
  hidden_signin.classList.add("hidden-signin");
  overlay.classList.add("hidden");
}
function view_signupform() {
  hidden_signup.classList.remove("hidden-signup");
  overlay.classList.remove("hidden");
}
function hide_signupform() {
  hidden_signup.classList.add("hidden-signup");
  input_place.forEach((element) => (element = ""));
  overlay.classList.remove("hidden");
}
function hide_popup() {
  Successfull.classList.add("Successfull");
  overlay.classList.add("hidden");
}

function view_popup() {
  Successfull.classList.remove("Successfull");
}

/* Event Handling */

signinButton.addEventListener("click", view_signinform);
signupButton.addEventListener("click", view_signupform);
signin_close_bar.addEventListener("click", hide_signinform);
signup_close_bar.addEventListener("click", hide_signupform);
okBtn.addEventListener("click", hide_popup);
Register.addEventListener("click", function (event) {
  event.preventDefault();
  if (input_place.value === "") {
    hide_popup();
    overlay.classList.remove("hidden");
  } else {
    view_popup();
    input_place.value = "";
    overlay.classList.add("hidden");
    hide_signupform();
  }
});
