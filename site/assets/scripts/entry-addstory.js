function im_entry_add(year, from, fLatLng, to, tLatLng, story) {

	$.ajax({
		url: '../lib/add-journey.php',
		type: 'post',
		
		data: ({
			action: 'add_journey',
			year: year,
			from: from,
			fLatLng: fLatLng,
			to: to,
			tLatLng: tLatLng,
			story: story,
		}),

		success: function(data) {
			//TODO
			//Success response
			//

			//console.log(data);
		},

		error: function(data) {
			alert(data.responseText);
		}

	})

}

//im_entry_add(1985, 'London', '-123534,95903.9533', 'San Diego', '', 'Heres a story elrkjger');