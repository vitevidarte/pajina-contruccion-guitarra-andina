var map = L.map("mapa").setView([-16.297486, -71.626455], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([-16.297486, -71.626455])
  .addTo(map)
  .bindPopup(
    " <h3>Guitarra Andina.</h3><br> Boletos Disponibles <br>km16 Cono Norte  <br> Yura - Arequipa - Peru"
  )
  .openPopup()
  .bindTooltip("A media Cuadra de My Banco ")
  .openTooltip();
