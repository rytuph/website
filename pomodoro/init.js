// setting buttons to their functions
// if pomodoro, short, or long break are clicked, timer resets
let cur = undefined;

pomodoroButton.addEventListener('click', function(){
    const timer = new CountdownTimer({
        selector: "#clock",
        targetDate: new Date(new Date().getTime()+(25*60*1000))
    });
    console.log("helOlo");
    console.log("sup");
    timer.startTimer();

    if(cur !== undefined) {
        delete cur;
        cur = timer;
    } else {
        cur = timer;
    }

})

shortButton.addEventListener('click', function(){
    const timer = new CountdownTimer({
        selector: "#clock",
        targetDate: new Date(new Date().getTime()+(5*60*1000))
    });
    timer.startTimer();
    if(cur !== undefined) {
        delete cur;
        cur = timer;
    } else {
        cur = timer;
    }
})

longButton.addEventListener('click', function(){
    const timer = new CountdownTimer({
        selector: "#clock",
        targetDate: new Date(new Date().getTime()+(15*60*1000))
    });
    timer.startTimer();
    console.log(cur);
    if(cur !== undefined) {
        delete cur;
        cur = timer;
    } else {
        cur = timer;
    }

})

playButton = addEventListener('click', function(){
    timer.startTimer();
})

