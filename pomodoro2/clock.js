// connecting js to html

// buttons
let pomodoroButton = document.getElementById('pomodorobutton');
let shortButton = document.getElementById('shortbreakbutton');
let longButton = document.getElementById('longbreakbutton');
//
let clock = document.getElementById('clock');
let playButton = document.getElementById('playbutton');
let interval

// class to create a countdown timer
class CountdownTimer {
    // setup timer values
    constructor({ selector, targetDate, backgroundColor = null, foregroundColor = null }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.backgroundColor = backgroundColor;
        this.foregroundColor = foregroundColor;

        // grab divs on frontend using supplied selector ID
        this.refs = {
            days: document.querySelector(`${this.selector} [data-value="days"]`),
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            mins: document.querySelector(`${this.selector} [data-value="minutes"]`),
            secs: document.querySelector(`${this.selector} [data-value="seconds"]`),
        };
    }

    getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
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

    updateTimer({ days, hours, mins, secs }) {
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
    }

    updateColors() {
        if (this.backgroundColor != null) {
            this.refs.days.style.background = this.backgroundColor;
            this.refs.hours.style.background = this.backgroundColor;
            this.refs.mins.style.background = this.backgroundColor;
            this.refs.secs.style.background = this.backgroundColor;
        }

        if (this.foregroundColor != null) {
            this.refs.days.style.color = this.foregroundColor;
            this.refs.hours.style.color = this.foregroundColor;
            this.refs.mins.style.color = this.foregroundColor;
            this.refs.secs.style.color = this.foregroundColor;
        }
    }

    cancelPreviousTimer() {
        clearInterval(interval);
    }

    checkOver({ days, hours, mins, secs }){
        if (days === 0 && hours === 0 && mins === 0 && secs === 0){
            clearInterval(interval);
            this.refs.days.textContent = 0;
            this.refs.hours.textContent = 0;
            this.refs.mins.textContent = 0;
            this.refs.secs.textContent = 0;
        }
    }

    pause(){
        
    }

    play(){
        
    }

    startTimer() {
        this.cancelPreviousTimer();
        const timer = this.getTimeRemaining(this.targetDate);
        this.updateTimer(timer);
        // this.updateColors();
        interval=setInterval(() => {
            const timer = this.getTimeRemaining(this.targetDate);
            this.checkOver(timer);
            this.updateTimer(timer);
        }, 1000);
    }
}