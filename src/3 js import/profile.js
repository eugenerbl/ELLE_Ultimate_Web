$(document).ready(function() {

    /* Changing the profile picture */
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.avatar').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }

	// get appropirate class to change picture
    $(".file-upload").on('change', function(){
        readURL(this);
    });
	
	
	/* Setting active tab */
	var btnContainer = document.getElementById("list-group");
	// Get all buttons with class="btn" inside the container
	var btns = btnContainer.getElementsByClassName("list-group-item");

	// Loop through the buttons and add the active class to the current/clicked button
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function() {
			var current = document.getElementsByClassName("active");

			// If there's no active class
			if (current.length > 0) { 
			current[0].className = current[0].className.replace(" active", "");
			}

			// Add the active class to the current/clicked button
			this.className += " active";
		});
	}
});