<form action="" id="add-entry">

	<div id="start" class="form-group pb-2">
		<h4 class="mb-2">Where did you come from?</h4>
		<select name="start-year" id="start-year" class="form-control mb-1 ">
			<option value="0"  disabled>What Year?</option>
			<option value="1980" selected>1980</option>
			<option value="1981">1981</option>
			<option value="1982">1982</option>
			<option value="1983">1983</option>
			<option value="1984">1984</option>
			<option value="1985">1985</option>
			<option value="1986">1986</option>
		</select>
  		<input id="start-address" type="textbox" value="Paris, France" class="form-control mb-1">
  		<input id="start-geocode" type="button" value="Submit" class="mb-1 btn btn-md btn-block text-uppercase address-submit">
  		<input id="start-coordinates" type="hidden" data-name="" data-lat="" data-lng="">
  		<hr>
  	</div>

	<div id="end" class="form-group pb-2 disabled">
		<h4 class="mb-2">Where did you go?</h4>
  		<input id="end-address" type="textbox" value="Chicago, USA" class="form-control mb-1">
  		<input id="end-submit" type="button" value="Submit" class="btn btn-md btn-block text-uppercase address-submit">
  		<input id="end-coordinates" type="hidden" data-name="" data-lat="" data-lng="">
  		<hr>
  	</div>

	<div id="story" class="form-group pb-2 disabled">
		<h4 class="mb-2">Tell us your story</h4>
		<textarea name="" id="story" cols="30" rows="10" class="form-control"></textarea>	
  		<hr>
	</div>

	<input type="submit" id="submit-entry" value="Submit Your Story" class="btn btn-md btn-block text-uppercase disabled">

</form>