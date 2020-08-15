const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".clockTitle");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
    minute < 10 ? `0${minute}` : minute
  } : ${second < 10 ? `0${second}` : second}`;
}

function init() {
  setInterval(getTime, 1000);
  getTime();
}

init();
