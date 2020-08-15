const inputNameContainer = document.querySelector(".js-name");
const inputNameForm = inputNameContainer.querySelector(".js-form");
const inputName = inputNameForm.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
  SHOWING = "showing";

function askForName() {
  inputNameForm.classList.add(SHOWING);
  inputNameForm.addEventListener("submit", handleSubmit);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = inputName.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function paintGreeting(text) {
  inputNameForm.classList.remove(SHOWING);
  greeting.classList.add(SHOWING);
  greeting.innerText = `안녕하세요! ${text} 님!`;
}

function init() {
  loadName();
}

init();
