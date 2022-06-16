let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // Reloj Dijital
    let hora = document.getElementById('hora');
    let minutos = document.getElementById('minutos');
    let segundo = document.getElementById('segundo');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";
    // convertir un reloj de 24 horas en un reloj de 12 horas
    if (h > 12) {
        h = h - 12;
    }
    // añadir un cero antes de un número de una sola cifra
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s 

    hora.innerHTML = h;
    minutos.innerHTML = m;
    segundo.innerHTML = s;
    ampm.innerHTML = am;    
})