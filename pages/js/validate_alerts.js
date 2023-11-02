document.addEventListener("DOMContentLoaded", function() {
    // Place your form validation code here
    document.querySelector('.contact-form form').addEventListener('submit', function(event) {
        var name = document.getElementById('formGroupExampleInput').value;
        var email = document.getElementById('formGroupExampleInput2').value;
        var form = document.querySelector('.contact-form form');
    
        // Remove existing error messages
        var existingAlerts = form.querySelectorAll('.custom-alert');
        existingAlerts.forEach(function(alert) {
            alert.remove();
        });
    
        // Validate name (it should not be empty)
        if (name.trim() === '') {
            showAlert('Name is required', document.getElementById('formGroupExampleInput'));
            event.preventDefault(); 
        }
    
        // Validate email format
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showAlert('Invalid email address', document.getElementById('formGroupExampleInput2'));
            event.preventDefault(); 
        }
    
        // Function to show custom alert below the element
        function showAlert(message, element) {
            var alertDiv = document.createElement('div');
            alertDiv.className = 'custom-alert';
            alertDiv.textContent = message;
            element.parentNode.insertBefore(alertDiv, element.nextSibling);
        }
    });
});
