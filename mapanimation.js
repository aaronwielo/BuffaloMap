// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-78.87933260624736,42.88910257754849],
  [-78.87638127904275,42.888279194556176],
  [-78.87617309322754, 42.891238283634394],
  [-78.87334176614077, 42.8983151167429],
  [-78.8672211031888, 42.922193433185136],
  [-78.86747092616065, 42.94167347961129],
  [-78.86767911197586, 42.94484335794366],
  [-78.87001079308473, 42.95767360194871],
  [-78.86963605861737, 42.963676384067455],

];

// TODO: add your own access token CHECK
mapboxgl.accessToken = 'pk.eyJ1IjoiYWV3aWVsbyIsImEiOiJja29vY2YweXMwNTZ4Mm9xa25qaDJ4NTMxIn0.jr3073c9tWnbFtEG3Zydkg';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11',
  center: [-78.86597686165013, 42.934160936642066],
  zoom: 11.6,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker" CHECK
var marker = new mapboxgl.Marker()
.setLngLat([-71.093729, 42.359244])
.addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(()=>{
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
  }, 1000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
