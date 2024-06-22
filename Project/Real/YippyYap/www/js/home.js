$(document).ready(function() {
    // Function to toggle the navigation menu on small screens
    function myFunction() {
        var x = document.getElementById("myNav");
        if (x.className === "nav") {
            x.className += " responsive";
        } else {
            x.className = "nav";
        }
    }

    // Attach the function to the icon click event
    $(".icon").click(function() {
        myFunction();
    });
});
