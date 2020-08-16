const clockContainer = document.querySelector(".js-clock");
const ampmTitle = clockContainer.querySelector(".ampmTitle");

function ampmTime() {
  const date = new Date();
  const hours = date.getHours() % 12;
  const ampm = date.getHours() < 12 ? "AM" : "PM";
  const minute = date.getMinutes();
  const second = date.getSeconds();
  ampmTitle.innerText = `${ampm} ${hours < 10 ? `0${hours}` : hours} : ${
    minute < 10 ? `0${minute}` : minute
  } : ${second < 10 ? `0${second}` : second}`;
  setInterval(ampmTime, 1000);
}

function init() {
  ampmTime();
}

init();
