<?php 

include_once('mysql.php');

function add_journey() {

	$year 		= $_POST['year'];
	$from 		= $_POST['from'];
	$fLatLng 	= $_POST['fLatLng'];
	$to 		= $_POST['to'];
	$tLatLng 	= $_POST['tLatLng'];
	$story 		= $_POST['story'];

	//print_r($fLatLng);
	//error_log($fLatLng);

	if( ! $year || ! $from || ! $to ) {
		
	    header('HTTP/1.1 500 Internal Server Booboo');
	    header('Content-Type: application/json; charset=UTF-8');
	    die('Sorry, there was a problem.');
	}

	else {
	
		global $connection;

		$connection->exec('INSERT INTO locations VALUES ("", "'.$year.'", "'.$from.'", "'.$fLatLng.'", "'.$to.'", "'.$tLatLng.'", "'.$story.'")');

	}

}

add_journey();