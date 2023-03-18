// creating the map
const map = L.map(document.getElementById('map') || 'map').setView([27.7172, 85.3240], 3);

// adding tiles on the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// adding marker
const marker = L.marker([27.7172, 85.3240]).addTo(map);

// adding circle
const circle = L.circle([28.2096, 83.9856], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// adding polygon
const polygon = L.polygon([
    [27.1838, 86.7819],
    [27.3619, 86.3782],
    [27.6992, 86.7416]
]).addTo(map);

// binding Popups to markers, circles and polygons
marker.bindPopup("<b>Hello World!</b><br> This is Kathmandu!").openPopup();
circle.bindPopup("This is Pokhara!");
polygon.bindPopup("This Polygon touches Khotang, Okhaldhunga and Solukhumbu!");

// creating a standalone popup and opening it on map open event
const popup = L.popup()
    .setLatLng([27.7172, 85.3240])
    .setContent("I am a standalone popup!")
    .openOn(map);

// adding event listeners to the map
map.on('click', onMapClick);
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(map);
}