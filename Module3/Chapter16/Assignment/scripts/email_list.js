$(document).ready(function() {
	var setCookie = function(name, value, days) {
		var cookie = name + "=" + encodeURIComponent(value);

		if (days !== undefined) {
			cookie += "; max-age=" + days * 24 * 60 * 60;
		}

		cookie += "; path=/";
		document.cookie = cookie;
	}

	var getCookieByName = function(name) {
		var cookies = document.cookie;

		var start = cookies.indexOf(name + "=");

		if (start === -1) { return ""; }
		else {
			start = start + (name.length + 1);
			var end = cookies.indexOf(";", start);
			if (end === -1) { end = cookies.length; }

			var cookieValue = cookies.substring(start, end);

			return decodeURIComponent(cookieValue);
		}
	}

	// move focus to first text box
	$("#email_1").focus();
	$("#email_1").text(getCookieByName("email"));

	// reset
	$("#reset").click(function() {
		$(":text").val("");
        $(":text").next().text("*");
        $("#none").next().text("*");
        $("#email_address1").focus();
	});
	
	// the handler for the click event of a submit button
	$("#email_form").submit(
		function(event) {
			var isValid = true;
			
			// validate the email entry with a regular expression
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email_1").val().trim();
			if (email == "") { 
				$("#email_1").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email_1").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email_1").next().text("");
				setCookie("email", email, 30);
			}
			$("#email_1").val(email);


			// validate the second email entry
			var email2 = $("#email_2").val().trim();
			if (email2 == "") { 
				$("#email_2").next().text("This field is required.");
				isValid = false; 
			} else if (email !== email2 ) { 
				$("#email_2").next().text("Must equal first email entry.");
				isValid = false;
			} else {
				$("#email_2").next().text("");
			}
			$("#email_2").val(email2);
			
			// validate the first name entry
			var firstName = $("#first_name").val().trim();
			if ($("#first_name").val() == "") {
				$("#first_name").next().text("This field is required.");
				isValid = false;
			} else {
				$("#first_name").next().text("");
			}
			$("#first_name").val(firstName);
						
			// validate the state entry
			var state = $("#state").val().trim();
			if (state == "") {
				$("#state").next().text("This field is required.");
				isValid = false;
			} else if ( ! /^[a-zA-z]{2}$/.test(state) ) {
				$("#state").next().text("Use 2-character code.");
				isValid = false;
			} else {
				$("#state").next().text("");
			}
			$("#state").val(state);

			// validate the check boxes	
			var checkedOptions = [];
			checkedOptions = $('input:radio[name="contact"]:checked');
			if (checkedOptions.length == 0) {
				$("#none").next().text("Select at least one.");
				isValid = false;
			} else {
				$("#none").next().text("*");
			}
			
			// prevent the default action of submitting the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault(); 
			}
		} // end function
	);	// end submit
}); // end ready