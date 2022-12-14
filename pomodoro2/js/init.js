// const timer = new CountdownTimer({
//     selector: "#clock"
// });

pomodoroButton.addEventListener('click', function(){
    const timer = new CountdownTimer({
        selector: "#clock",
        targetDate: new Date(new Date().getTime()+(25*60*1000))
    });
    // timer.targetDate = new Date(new Date().getTime()+(25*60*1000))
    // timer.startTimer(new Date(new Date().getTime()+(25*60*1000)));
    // console.log(new Date(new Date().getTime()+(25*60*1000)))
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

timer.startTimer(); 