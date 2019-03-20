---
lat: 55.026479
lng: -1.5612468
pub_map_json: clousdenhill.json

---

const mapStyle = [
  {
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
      {
        "color": "#f2e5d4"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#8fb090"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263b49"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e4d7c6"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fbfaf7"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#acbcc9"
      }
    ]
  }
];



function initMap() {

  // Create the map
  const map = new google.maps.Map(document.getElementsByClassName('map-pub')[0], {
    zoom: 13,
    center: {
    lat: {{ page.lat }}, lng: {{ page.lng }} },
    styles: mapStyle
       });


// Load the stores GeoJSON onto the map.
  map.data.loadGeoJson("/assets/js/{{ page.pub_map_json }}");

  const infoWindow = new google.maps.InfoWindow();

  // Show the information for a store when its marker is clicked.
  map.data.addListener('click', event => {

    let name = event.feature.getProperty('name');
    let description = event.feature.getProperty('description');
    let hours = event.feature.getProperty('hours');
    let phone = event.feature.getProperty('phone');
    let web = event.feature.getProperty('web');
    let position = event.feature.getGeometry().get();
    let content = `
      <h2>${name}</h2><p>${description}</p>
      <p><strong>Open:</strong> ${hours}<br/><strong>Phone:</strong> ${phone}</p>
    `
    infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
    infoWindow.open(map);
  });
}











  







