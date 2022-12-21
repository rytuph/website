// buttons
let pomodoroButton = document.getElementById('pomodorobutton');
let shortButton = document.getElementById('shortbreakbutton');
let longButton = document.getElementById('longbreakbutton');
let play_pause = document.getElementById('playbutton');

pomodoroButton.addEventListener('click', function(){
    const timer = new CountdownTimer({
        selector: "#clock",
        targetDate: new Date(new Date().getTime()+(25*60*1000))
    });
    timer.startTimer();
})

shortButton.addEventListener('click', function(){
    const timer = new CountdownTimer({
        selector: "#clock",
        targetDate: new Date(new Date().getTime()+(5*1000))
    });
    timer.startTimer();
})

longButton.addEventListener('click', function(){
    const timer = new CountdownTimer({
        selector: "#clock",
        targetDate: new Date(new Date().getTime()+(15*60*1000))
    });
    timer.startTimer();
})

// play_pause.addEventListener('click', function(){
    
//     playpause();
// })

play_pause.addEventListener('click', function(){
    console.log(typeof interval);
    console.log('test')
    if (typeof interval == 'number') {
	// is there better way to judge if interval is running?
	// timer.cancelPreviousTimer();
	clearInterval(interval);
	interval = null;// so that interval is not number anymore
    } else {
    
        let seconds = parseInt(document.querySelector(`[data-value="seconds"]`).textContent);
        let minutes= parseInt(document.querySelector(`[data-value="minutes"]`).textContent);
        let hours= parseInt(document.querySelector(`[data-value="hours"]`).textContent);
        let days= parseInt(document.querySelector(`[data-value="days"]`).textContent);
	// use hours and days below
	if (isNaN(seconds)) {
		alert('not started yet');
	} else {
        const timer = new CountdownTimer({
            selector: "#clock",
            targetDate: new Date(new Date().getTime()+(seconds * 1000 + minutes * 60000))
        });
        timer.startTimer();
	}
    }
})


// timer.startTimer(); 