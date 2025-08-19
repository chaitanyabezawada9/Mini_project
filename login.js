const form = document.getElementById('login-form');

// Add event listener for form submission (replace with your logic to handle login)
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform validations (replace with your desired validation rules)
  if (username.trim() === '') {
    alert('Please enter your username.');
    return;
  }

  if (password.trim() === '') {
    alert('Please enter your password.');
    return;
  }

  // Simulate login (this is for demonstration purposes only)
  alert(`Logging in with username: ${username} and password: ${password}`); // In reality, you would send this data to the IRCTC server for validation.

  // After successful login (replace with your redirection logic)
  // window.location.href = 'your_dashboard_page.html';
});
