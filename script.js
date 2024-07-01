let dayInput = document.getElementById('day');
let timeInput = document.getElementById('time');

// Create and display time

const d = new Date();
let day = d.getDay();
let time = Date.now(); 
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
day = weekday[d.getDay()];
dayInput.innerHTML = day;
timeInput.innerHTML = time;