"use strict";
$(document).ready(function(){
    $( "#save" ).click(function() {
        $("span").text("");   // clear any previous error messages
        var isValid = true;   // initialize isValid flag
        
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var address = $("#address").val();
        var city = $("#city").val();
        var state = $("#state").val();
        var zip = $("#zip").val();
        
        if ( firstname === "" ) {
            isValid = false;
            $( "#firstname" ).next().text("Please enter your firstname.");
        }
        if ( lastname === "" ) {
            isValid = false;
            $( "#lastname" ).next().text("Please enter your lastname.");
        }
        if ( address === "" ) {
            isValid = false;
            $( "#address" ).next().text("Please enter a valid address.");
        }
        if ( city === "" ) {
            isValid = false;
            $( "#city" ).next().text("Please enter a valid city.");
        }
        if ( state === "" || ! /^[A-Za-z]{2}/.test(state)) {
            isValid = false;
            $( "#state" ).next().text("Please enter a valid state.");
            $("#state").val("");
        }
        if ( zip === "" || ! /^\d{5}(-\d{4})?$/.test(zip) ) {
            isValid = false;
            $( "#zip" ).next().text("Please enter a valid zip code.");
            $("#zip").val("");
        }
        if ( isValid == true ) { 
            $("#firstname").val("");
            $("#lastname").val("");
            $("#address").val("");
            $("#city").val("");
            $("#state").val("");
            $("#zip").val("");
        }
        
        $("#firstname").focus(); 
    });
    
    // set focus on initial load
    $("#firstname").focus();
});