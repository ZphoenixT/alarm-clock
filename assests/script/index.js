'use strict';

function updateTime() {
    const timeNow = new Date().toLocaleTimeString().substring(0, 4);
    const time = document.querySelector(".currentTime"); 
    time.textContent = `${timeNow}`;
}

setInterval(updateTime, 100);
updateTime;

function setAlarm() {
    const hoursInput = document.querySelector(".inpText.hours").value;
    const minutesInput = document.querySelector(".inpText.minutes").value;
  
    const alarmSetTimeElement = document.querySelector(".alarmSetTime");
    alarmSetTimeElement.textContent = `${hoursInput.padStart(2, '0')}:${minutesInput.padStart(2, '0')}`;
  }

  document.querySelector(".setTime").addEventListener("click", setAlarm);