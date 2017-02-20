// This example creates an interactive map which constructs a polyline based on
// user clicks. Note that the polyline only appears once its path property
// contains two LatLng coordinates.

var poly;
var map;
var iconBase = '../dist/images/_icons/';

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

function geocodeAddress(button, geocoder, map) {
  var type      = button.parents('.form-group').attr('id');
  var address   = document.getElementById(type+'-address').value;
  var thisIcon  = type + '_icon.png';


  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {

      //Get Location Vars
      var location  = results[0].geometry.location;
      var lat       = results[0].geometry.location.lat;
      var lng       = results[0].geometry.location.lng;

      //Set data attributes for hidden field
      $('#'+type+'-coordinates').attr('data-name', address);
      $('#'+type+'-coordinates').attr('data-lat', lat);
      $('#'+type+'-coordinates').attr('data-lng', lng);


      //Move Map Center
      map.setCenter(location);
  		
  		// Because path is an MVCArray, we can simply append a new coordinate
      // and it will automatically appear.
      var path = poly.getPath();       
      path.push({
        lat: lat, 
        lng: lng
      });

      // Add a new marker at the new plotted point on the polyline.
      var marker = new google.maps.Marker({
        position:  location,
        title:     '#' + path.getLength(),
        map:       map,
        icon:      iconBase + thisIcon
      });


      //Allow movement to next section
      $('#'+type).next('.disabled').removeClass('disabled').next('input.disabled').removeClass('disabled');
            
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

