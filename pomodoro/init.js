



// setting buttons to their functions

while (1){
    pomodoroButton.addEventListener('click', function(){
        const timer = new CountdownTimer({
            selector: "#clock",
            targetDate: new Date(new Date().getTime()+(25*60*1000))
        });
    
    })
    
    shortButton.addEventListener('click', function(){
        const timer = new CountdownTimer({
            selector: "#clock",
            targetDate: new Date(new Date().getTime()+(5*60*1000))
        });
    
    })
    
    longButton.addEventListener('click', function(){
        const timer = new CountdownTimer({
            selector: "#clock",
            targetDate: new Date(new Date().getTime()+(15*60*1000))
        });
    
    })
    
    playButton = addEventListener('click', function(){
        timer.startTimer();
    })
}
