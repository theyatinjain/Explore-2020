
const year = (new Date().getFullYear()) + 1;
const fourthOfJuly = new Date(2020, 3, 27).getTime();


let timer = setInterval(function () {

	// get today's date
	const today = new Date().getTime();

	// get the difference
	const diff = fourthOfJuly - today;

	// math
	let days = Math.floor(diff / (1000 * 60 * 60 * 24));
	days = days - 30;
	let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((diff % (1000 * 60)) / 1000);
	if(days<0 && hours<0 && minutes<0 && seconds<0){
		days =  0;
		hours =  0;
		minutes =  0;
		seconds = 0;
	}

	// display
	document.getElementById("timer").innerHTML =
		"<div class=\"days\"> \
        <div class=\"numbers\">" + days + "</div>days</div> \
		<div class=\"hours\"> \
  		<div class=\"numbers\">" + hours + "</div>hours</div> \
		<div class=\"minutes\"> \
  		<div class=\"numbers\">" + minutes + "</div>minutes</div> \
		<div class=\"seconds\"> \
  		<div class=\"numbers\">" + seconds + "</div>seconds</div> \
		</div>";

}, 1000);