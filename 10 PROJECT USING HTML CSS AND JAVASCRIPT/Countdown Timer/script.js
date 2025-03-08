const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const getTime = document.getElementById("countdown-Get");
const buttonElement = document.getElementById("setCountdown");





buttonElement.addEventListener("click", () => {
    const getTime = document.getElementById("countdown-Get");
    const inputValue = getTime.value;
    const newYears = inputValue;
   
    // parseFloat(getTime);
    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSecond = Math.floor((newYearsDate - currentDate) / 1000);
    
        const days = Math.floor(totalSecond / 3600 / 24);
        const hours = Math.floor(totalSecond / 3600) % 24;
        const mins = Math.floor(totalSecond / 60) % 60;
        const seconds = Math.floor(totalSecond) % 60;
    
        daysEl.innerHTML = days;
        hoursEl.innerHTML =formatTime(hours);
        minEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }
    
    function formatTime(time){
        return time < 10 ? (`0${time}`) : time;
    }

    
    
    // initial call
    countdown();
    
    setInterval(countdown, 1000);
});
