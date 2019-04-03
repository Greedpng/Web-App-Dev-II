"use strict";

$(document).ready(function(){
	var displayTasks = function() {
        // $("#task_list").val( localStorage.E15tasks );

        var expiration = new Date(localStorage.expiration);
        var today = new Date();
        if (expiration.getTime() < today.getTime()) {
            localStorage.removeItem("E15tasks");
            localStorage.removeItem("expiration");
        } else {
            $("#task_list").val(localStorage.E15tasks);
        }

        $("#task").focus();
    };
	
    $("#add_task").click(function() {   
        var textbox = $("#task");
        var task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {  
            // add task to web storage 
            var tasks = localStorage.E15tasks || "";  // default value of empty string
            localStorage.E15tasks = tasks.concat( task, "\n" ); 

            // Date
            var due = new Date();
            due.setDate( due.getDate() + 21 );
            localStorage.expiration = due.toDateString();     

            // clear task text box and re-display tasks
            textbox.val( "" );
            displayTasks();
        }
    });
    
    $("#clear_tasks").click(function() {
        localStorage.removeItem( "E15tasks" );
        localStorage.removeItem("expiration");
        $("#task_list").val( "" );
        $("#task").focus();
    }); 
    
    // display tasks on initial load
    displayTasks();
});