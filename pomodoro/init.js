const timer = new CountdownTimer({
    selector: "#clock",
    targetDate: new Date(new Date().getTime()+(25*60*1000))
});

timer.startTimer();