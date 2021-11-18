/*let HoursElement=document.getElementById('hours');
let minsElement=document.getElementById('miniutes');
let secElement=document.getElementById('seconds');
function currentTime() {
    let timestamp = new Date();
    console.log(timestamp);
    HoursElement.innerHTML=timestamp.getHours();
    minsElement.innerHTML=timestamp.getMinutes();
    secElement.innerHTML=timestamp.getSeconds();

    console.log('hours:'+ timestamp.getHours());

    console.log('fullyear:'+ timestamp.getFullYear());

    console.log('minutes:'+ timestamp.getMinutes());

    console.log('month:'+ timestamp.getMonth());

    console.log('second:'+ timestamp.getSeconds());

    console.log('day:'+ timestamp.getDay());
}
setInterval(currentTime,1000);*/
function time() {
    let now = new Date().getTime();
    let countDownDate = new Date("Jan 1, 2022 15:37:25").getTime();
    let distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    console.log(days,hours,minutes,seconds);
    document.querySelector('.days').innerHTML=days;
    document.querySelector('.hours').innerHTML=hours;
    document.querySelector('.minutes').innerHTML= minutes;
    document.querySelector('.seconds').innerHTML= seconds;
}
setInterval(time,1000)