let dayInput = document.getElementById('day');
let timeInput = document.getElementById('time');

// Get the current day of the week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getDay()];

// Get the current UTC time 
const currentUTC = new Date().toISOString().split('.')[0] + 'Z';

dayInput.innerHTML = currentDay;
timeInput.innerHTML = currentUTC;
