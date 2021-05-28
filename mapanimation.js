

mapboxgl.accessToken = 'pk.eyJ1IjoiYWV3aWVsbyIsImEiOiJja29vY2YweXMwNTZ4Mm9xa25qaDJ4NTMxIn0.jr3073c9tWnbFtEG3Zydkg';

let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-118.3692, 34.0614],
  zoom: 10
});

async function run() {
  
	const vehicles = await getBusLocations();
    
    startTimer();
    update(vehicles);
    console.log(vehicles)

	
	setTimeout(run, 30000);
}


async function getBusLocations() {
	const url = 'http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=lametro&r=4&t=0';
	const response = await fetch(url);
	const json = await response.json();
	return json.vehicle;
}


let markers = [];
function update(vehicles) {
    markers.forEach(marker => {
        marker.remove();
    });
    vehicles.forEach(vehicle => {
        let popup = new mapboxgl.Popup().setText(
            `Bus ID: ${vehicle.id}, Speed: ${vehicle.speedKmHr} Km/Hr, LastUpdate: ${vehicle.secsSinceReport} seconds ago.`
        );

        markers.push(
            new mapboxgl.Marker()
            .setLngLat([vehicle.lon, vehicle.lat])
            .setPopup(popup)
            .addTo(map)
        );
    });
}

function startTimer() {
    let counter = 30;
    let timer = setInterval(() => {
        if (counter <= 1) {
            clearInterval(timer);
        }
        document.getElementById("timer").innerHTML = `Updating in ${counter}`;
        counter -= 1;
    }, 1000);
}