document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    

    // Here, you can perform any necessary validation or data processing before submitting the form.
    // For simplicity, we'll just display a thank-you message.
    let responseMessage = document.getElementById('response-message');
    responseMessage.textContent = 'Thank you, ' + name + ', for your message! We will get back to you at ' + email + '.';
    document.getElementById('contact-form').reset();
});
