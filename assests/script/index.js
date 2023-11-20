'use strict';

function updateTime() {
    const timeNow = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    const time = document.querySelector(".currentTime");
    time.textContent = `${timeNow}`;
  }

setInterval(updateTime, 100);
updateTime;


document.addEventListener('DOMContentLoaded', function() {
    const hourInput = document.querySelector('.hours');
    const minuteInput = document.querySelector('.minutes');
    const setTimeButton = document.querySelector('.setTime');
    const alarmSetTime = document.querySelector('.alarmSetTime');
  
    // Function to validate input value between 0 and 24 for hours and 0 and 59 for minutes
    function validateInput(input, max) {
      const value = parseInt(input.value, 10);
      if (isNaN(value) || value < 0 || value > max) {
        input.value = ''; // Clear the input if it doesn't meet the criteria
      }
    }
  
    // Event listeners for input validation
    hourInput.addEventListener('input', function() {
      validateInput(this, 24);
    });
  
    minuteInput.addEventListener('input', function() {
      validateInput(this, 59);
    });
  
    // Event listener for setting the time
    setTimeButton.addEventListener('click', function() {
      const hours = hourInput.value.padStart(2, '0');
      const minutes = minuteInput.value.padStart(2, '0');
      alarmSetTime.textContent = `${hours}:${minutes}`;
  
      // Clear input fields after setting time
      hourInput.value = '';
      minuteInput.value = '';
    });
  });
  