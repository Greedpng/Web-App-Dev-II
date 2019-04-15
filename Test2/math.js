$(document).ready(function() {
	function checkEven(number) {
		if (number % 2 === 0) {
			return "Even";
		} else {
			return "Odd";
		}
	}

    $('#numbutton').click(function() {
        var num = Math.floor(Math.random() * 100) + 1;
        this.value = checkEven(num) + ": " + num;
    });
});