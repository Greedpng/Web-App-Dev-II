$('#bk-btn').click(function(e){    
    $("#bk-btn, #projects, #personal").fadeOut("slow", function(){
        $("#projects-btn, #personal-btn").fadeIn("slow");
    });
});

$("#projects-btn").click(function() {
    $("#projects-btn, #personal-btn").fadeOut("slow", function(){
        $("#bk-btn, #projects").fadeIn("slow");
    });
});

$("#personal-btn").click(function() {
    $("#projects-btn, #personal-btn").fadeOut("slow", function(){
        $("#bk-btn, #personal").fadeIn("slow");
    });
});