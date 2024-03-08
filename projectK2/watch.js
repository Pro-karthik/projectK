let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

function lol(){
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm/2;
  let mRotation = mm*6;
  let sRotation = ss*6;

  hours.style.transform = `rotate(${hRotation}deg)`;
  mins.style.transform = `rotate(${mRotation}deg)`;
  secs.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(lol, 1000);