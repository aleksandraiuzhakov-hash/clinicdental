var map = L.map('map').setView([41.565, 2.016], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {  /* Updated URL for reliability [web:13] */
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([41.565, 2.016]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();



const slides = document.querySelectorAll('.slides');
let currentSlide = 0;