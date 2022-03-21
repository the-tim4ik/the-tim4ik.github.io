let date = new Date('Dec 28 2022 00:00:00');
function time() {
    let now = new Date();
    gap = date - now;

    let days1 = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours1 = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes1 = Math.floor(gap / 1000 / 60) % 60;
    let seconds1 = Math.floor(gap / 1000) % 60;

    document.getElementById('d').innerText = days1;
    document.getElementById('h').innerText = hours1;
    document.getElementById('m').innerText = minutes1;
    document.getElementById('s').innerText = seconds1;

    let time = document.querySelector('.time');
    let timeDay = document.querySelector('.time__day');

    let myDate = new Date();
    let days = [`Воскресенье`, `Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятниця`, `Суббота`];
    let hour = myDate.getHours();
    let number = myDate.getDate();
    let mounts = [`Января`, `Февраля`, `Марта`, `Апреля`, `Мая`, `Июня`, `Июля`, `Августа`, `Сентября`, `Октября`, `Ноября`, `Декабря`];
    let year = myDate.getFullYear();


    timeDay.innerHTML = `${days[myDate.getDay()]}, ${number} ${mounts[myDate.getMonth()]} ${year}` 

    if(hour >= 6 && hour < 12){
        time.classList.add('morning');
    }
    else if(hour >= 12 && hour < 18){
        time.classList.add('day');
    }
    else if(hour >= 18 && hour < 21){
        time.classList.add('evening');
    }
    else{
        time.classList.add('night');
    }
}
time();
setInterval(time, 1000);