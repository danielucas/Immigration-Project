// This example creates an interactive map which constructs a polyline based on
// user clicks. Note that the polyline only appears once its path property
// contains two LatLng coordinates.

var poly;
map;
iconBase = '../dist/images/_icons/';

function initMap() {

  //Setup Map
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    styles: mapStyles,
    center: {lat: 41.879, lng: -87.624}  // Center the map on Chicago, USA.
  });

  //For Location Line drawing
  poly = new google.maps.Polyline({
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 1
  });
  poly.setMap(map);


  // Add a listener for the click event
  // map.addListener('click', addLatLng);

  var geocoder = new google.maps.Geocoder();

  $('.address-submit').on('click touch', function(e){
    geocodeAddress($(this), geocoder, map);
  });
 
}


