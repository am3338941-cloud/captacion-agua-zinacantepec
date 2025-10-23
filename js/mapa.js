
document.addEventListener('DOMContentLoaded', () => {
  if (typeof L === 'undefined') return; 
  const municipio = { nombre: "Zinacantepec, Estado de México", lat: 19.2847, lon: -99.7405, zoom: 12 };
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  const map = L.map(mapEl).setView([municipio.lat, municipio.lon], municipio.zoom);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const zonas = [
    { nombre: "San Miguel Zinacantepec", lat: 19.283, lon: -99.735, info: "Precipitación(mm): 1200<br>Escasez: Baja<br>Población: 8900" },
    { nombre: "San Luis Mextepec", lat: 19.2972, lon: -99.7372, info: "Precipitación(mm): 850<br>Escasez: Media<br>Población: 7600" },
    { nombre: "San Cristobal Tecolit", lat: 19.2719, lon: -99.7478, info: "Precipitación(mm): 600<br>Escasez: Alta<br>Población: 5100" },
    { nombre: "San Lorenzo Cuauhtenco", lat: 19.28, lon: -99.77, info: "Precipitación(mm): 500<br>Escasez: Alta<br>Población: 4200" },
    { nombre: "Santa Maria del Monte", lat: 19.28973, lon: -99.82355, info: "Precipitación(mm): 1400<br>Escasez: Baja<br>Población: 4500" }
  ];

  zonas.forEach(z => {
    const marker = L.marker([z.lat, z.lon]).addTo(map);
    marker.bindPopup(`<div class="infoBox"><strong>${z.nombre}</strong><br>${z.info}</div>`);
    marker.on('click', e => {
      const icon = e.target._icon;
      if (icon) {
        icon.classList.add('bounce');
        setTimeout(() => icon.classList.remove('bounce'), 600);
      }
    });
  });
