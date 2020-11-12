var map = L.map('main-map').setView([3.253059,-76.534767],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([3.253588,-76.535170]).addTo(map);
L.marker([3.254016, -76.534392]).addTo(map);
L.marker([3.253092, -76.536018]).addTo(map);