$('#submit-entry').on('click', function(e){
	e.preventDefault();
	var form 	= $(this).parents('form');

	if( im_submit_validation(form) ) {

		im_submit_form(form);

	}

});

function im_submit_validation(form) {

	var toReturn = false;
	
	//Check year
	//
	var year = document.getElementById('start-year').value;

	if(year == 0) {
		$('#start-year').addClass('error');
		return toReturn;
	} 

	else {
		toReturn = true;
		return toReturn;
	}

}

function im_submit_form(form) {

	// The OLD WAY
	// 
	// i like this better because it's a JSON array, which would make it easier to pull out, and would only need 2 columns
	// need to look at PDO again to try and save something like that into database
	// 

	// var formData	= [];

	// //Year
	// formData.push(form.find('#start-year').val());

	// //Locations
	// var locations 	= ['start', 'end'];
	// $.each(locations, function(index, value) {
	// 	thisItem 	= $('#'+value).find('#'+value+'-coordinates');
		
	// 	formData.push({
	// 		lat 	: thisItem.attr('data-lat'), 
	// 		lng 	: thisItem.attr('data-lng'), 
	// 		name 	: thisItem.attr('data-name')
	// 	});
	// });

	// //Extra Details
	// var details 	= ['story'];
	// $.each(details, function(index, value) {
	// 	thisItem 	= $('#'+value).val();
	// 	obj = {};
	// 	obj[value] = thisItem;
	// });

	// formData.push(obj);

	// console.log(formData);


	//New School
	//
	//
	var year 	= form.find('#start-year').val(),
		from 	= $('#start #start-coordinates'),
		fName	= from.attr('data-name'),
		fLatLng	= from.attr('data-lat')+','+from.attr('data-lng'),
		to 		= $('#end #end-coordinates'),
		tName 	= to.attr('data-name'),
		tLatLng	= to.attr('data-lat')+','+to.attr('data-lng'),
		story 	= $('#story.form-control').val();


	im_entry_add(year, fName, fLatLng, tName, tLatLng, story);

}
