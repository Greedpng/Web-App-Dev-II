"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var isValid = true;

    // validate the entries
    if (emailAddress1 == "") {
    	$("email_address1").nextElementSibling.firstChild.nodeValue 
    		= "Email address required.";
          isValid = false;
    } else if (emailAddress2 == "") {
    	$("email_address2").nextElementSibling.firstChild.nodeValue = 
    		"Re-entering email address required.";
    	isValid = false;
    } else if (emailAddress2 != emailAddress1) {
    	$("email_address2").nextElementSibling.firstChild.nodeValue = 
    		"Email addresses must match.";
    } else {
        $("email_address2").nextElementSibling.firstChild.nodeValue = "";
    }
    
    if (firstName == "") {
    	$("first_name").nextElementSibling.firstChild.nodeValue = 
    		"First name is required.";
    	isValid = false;
    }

    // submit the form if all entries are valid
    // otherwise, display an error message
    if (isValid) {
        $("email_form").submit(); 
    }
};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};
