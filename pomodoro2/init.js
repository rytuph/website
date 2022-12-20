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

play_pause.addEventListener('click', function(){
    
    playpause();
})

// timer.startTimer(); 