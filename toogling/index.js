"use strict";
const body = document.querySelector("body");
const switcher = document.querySelector(".toggle");
const text = document.querySelector(".text");
const header_text = document.querySelector(".header-text");
switcher.addEventListener("click", function () {
  switcher.classList.toggle("active");
  body.classList.toggle("active");
  text.classList.toggle("active");
  text.textContent === "OFF"
    ? (text.textContent = "ON")
    : (text.textContent = "OFF");
  header_text.textContent === "NIGHT MODE"
    ? (header_text.textContent = "DAY MODE")
    : (header_text.textContent = "NIGHT MODE");
});
