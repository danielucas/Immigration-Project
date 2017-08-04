var   markers   = [];
var   path      = [];

function geocodeAddress(button, geocoder, map) {
  var type      = button.parents('.form-group').attr('id');
  var address   = document.getElementById(type+'-address').value;
  var thisIcon  = type + '_icon.png';

  //Remove Geocoded Icon
  //
  path = clear_geocode(type, path);

  //Geocode address
  //
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

      // Add a new marker at the new plotted point on the polyline.
      var marker = new google.maps.Marker({
        position:  location,
        title:     '#' + location,
        map:       map,
        icon:      iconBase + thisIcon
      });

      markers.push(marker);

      // Because path is an MVCArray, we can simply append a new coordinate
      // and it will automatically appear.
      path = poly.getPath();       
      path.push({
        lat: lat, 
        lng: lng
      });

      console.log(path);
      console.log(markers);

      //Allow movement to next section
      $('#'+type).next('.disabled').removeClass('disabled').next('input.disabled').removeClass('disabled');
            
    } else {

      alert('Geocode was not successful for the following reason: ' + status);

    }

  });

}


function clear_geocode(type, path) {

  if($('#'+type+'-coordinates').attr('data-name')) {

      //Remove Markers
      //

      for (var i = 0; type == 'start' && i < markers.length; i++) {
        markers[i].setMap(null);
      }

      if(type == 'end') {
        markers[1].setMap(null);
      }

      markers = [];

      
      //Remove Lines
      //

      for (var i = 0; type == 'start' && i < path.length; i++){
        path.removeAt(i);
      }

      if(type == 'end') {
        path.removeAt(1);
      }

      path = [];

  }

}