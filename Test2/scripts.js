"use strict";

var $ = function (id) { return document.getElementById(id); };

var imageCache = [];
var imageCounter = 0;
var timer;

/* FAQ */
var toggle = function() {
    var link = this;
    var h2 = link.parentNode;   
    var div = h2.nextElementSibling; 

    if (h2.className == "minus") { 
        h2.className = "plus";
    } else {  
        h2.className = "minus";
    }

    if (div.className == "open") { 
        div.className = "closed";
    } else { 
        div.className = "open";
    } 
};
/*---*/

window.onload = function () {
    /* Age Prompt *
    var age = "";

    do {
        age = parseInt(prompt("Enter age (use integer):"));

        if (isNaN(age)) {
            alert("Please enter a number.")
        } else if (age > 15) {
            alert("You are old enough for a driver's license.");
        } else {
            alert("You are not old enough for a driver's license.");
        }
    } while (isNaN(age));
    /*---*/

    /* FAQ */
    var faqs = $("faqs");
    var aElements = faqs.getElementsByTagName("a");
      
    for (var i = 0; i < aElements.length; i++ ) {
    	aElements[i].onclick = toggle;
    }
    aElements[0].firstChild.focus(); 
    /*---*/
};