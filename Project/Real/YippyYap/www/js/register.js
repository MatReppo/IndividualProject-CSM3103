$(function() {
    $('#btnSubmit').click(function() {
        // Handle form submission
        var email = $('#email').val();
        var name = $('#name').val();
        var password = $('#password').val();
        var confirmPassword = $('#cpassword').val();

        if (!enoughLength(password, confirmPassword)) {
            alert("Password must have a minimum of 8 characters!");
        } else {
            var formData = {
                email: email,
                name: name,
                password: password
            };

            // Simulating a successful registration
            // Replace 'url' with your actual backend endpoint
            $.ajax({
                type: "POST",
                url: 'url', // Replace with your backend URL
                data: formData,
                success: function(response) {
                    // Assuming response is successful
                    alert("Registration successful!");
                    // Redirect to login.html after registration
                    window.location.href = 'login.html';
                },
                error: function(xhr, status, error) {
                    console.error("Error:", error);
                    alert("Registration failed. Please try again.");
                }
            });
        }
    });

    function enoughLength(password1, password2) {
        // Check if passwords meet the minimum length requirement
        return (password1.length >= 8 && password2.length >= 8);
    }
});
