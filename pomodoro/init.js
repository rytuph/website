// setting buttons to their functions
// if pomodoro, short, or long break are clicked, timer resets


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
        targetDate: new Date(new Date().getTime()+(5*60*1000))
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

playButton = addEventListener('click', function(){
    timer.startTimer();
})

