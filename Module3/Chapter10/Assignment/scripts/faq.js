$(document).ready(function() {
    $("#categories h2").click(
        function() {
            $(this).toggleClass("minus");

            if ($(this).attr("class") !== "minus") {
                $(this).next().fadeOut(1000);
            } else {
                $(this).next().fadeIn(1000);
            }

            $("#image").attr("src", "");
        }
    )

    $("#web_images a, #java_images a, #net_images a, #database_images a").each(function() {
        var imageURL = $(this).attr("href");
        
        var bookImage = new Image();
        bookImage.src = imageURL;
            
        $(this).click(function(evt) {
            $("#image").attr("src", imageURL);

        evt.preventDefault();
        });
    });
});