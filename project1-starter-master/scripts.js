window.onload = function(){
    // Get references to the form, input field, and message div
    const newsletterForm = document.getElementsByClassName('newsletter')[0];
    const emailInput = document.getElementById('email');
    const messageDiv = document.getElementsByClassName('message')[0];

    // Add a submit event listener to the form
    newsletterForm.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const email = emailInput.value.trim();

        if (email === '') {
            // If no email address is entered, display an error message
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            // Display a success message with the entered email address
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    });
}
