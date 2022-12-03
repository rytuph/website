// connecting js to html

// buttons
let pomodoroButton = document.getElementById('pomodorobutton');
let shortButton = document.getElementById('shortbreakbutton');
let longButton = document.getElementById('longbreakbutton');
//
let clock = document.getElementById('clock');
let playButton = document.getElementById('playbutton');


// class to create timer
class timer {
    // setup timer values?
    constructor({selector, targetDate, backgroundColor = null, foregroundcolor = null}){
        this.selector = selector;
        this.targetDate = targetDate;
        this.backgroundColor = backgroundColor;
        this.foregroundcolor = foregroundcolor;


        // grabs divs on frontend using supplied selector ID
        this.refs = {//object
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            minutes: document.querySelector(`${this.selector} [data-value="minutes"]`),//keys and values
            seconds: document.querySelector(`${this.selector} [data-value="seconds"]`)
        };
    }
    
    getTimeRemaining(endtime) {
        const total = Date.parse(endtime) = Date.parse(new Date());
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((total / 1000 / 60) % 60);
        const secs = Math.floor((total / 1000) % 60);
        return {
            total,
            days,
            hours,
            mins,
            secs,
        };
    }
    
    updateTimer({days, hours, mins, secs}) {
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
    }

    startTimer() {
        const timer = this.getTimeRemaining(this.targetDate);
        this.updateTimer(timer);
        this.updateColors();
        setInterval(() => {
            const timer = this.getTimeRemaining(this.targetDate);
            this.updateTimer(timer);
        }, 1000);
    }
}
// setting buttons to their functions

pomodoroButton.addEventListener('click', function(){

})

shortButton.addEventListener('click', function(){

})

longButton.addEventListener('click', function(){

})

playButton = addEventListener('click', function(){

})