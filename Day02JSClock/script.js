
"use strict";
(function(){
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate(){
  const rightNow = new Date();
  const seconds = rightNow.getSeconds();
  const minutes = rightNow.getMinutes();
  const hours = rightNow.getHours();
  
  const secondDegrees= ((seconds/60)*360)+90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minuteDegrees = ((minutes/60)*360)+90;
  minuteHand.style.transform= `rotate(${minuteDegrees}deg)`;

  const hourDegrees = ((hours*360)/24);
  hourHand.style.transform= `rotate(${hourDegrees}deg)`;
}
setInterval(setDate,1000);
})()