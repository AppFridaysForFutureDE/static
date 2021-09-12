const countdown = () => {
    const countDate = new Date('September 24, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //Zeitdefinitionen
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Umrechnungen
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    //Update HTML
    document.querySelector(".tage").innerText = textDay;
    document.querySelector(".stunden").innerText = textHour;
    document.querySelector(".minuten").innerText = textMinute;
    document.querySelector(".sekunden").innerText = textSecond;
};

//ständiges Update
setInterval(countdown, 1000);