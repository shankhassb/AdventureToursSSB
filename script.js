// JavaScript functionality can be added as needed, such as form validation or interactive elements
// Example form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  
  // Example of what to do with form data (e.g., send to server, display in console)
  console.log(Name: ${name}, Email: ${email}, Message: ${message});
  alert('Message sent successfully!'); // Replace with actual submission handling
});