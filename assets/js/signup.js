// Get form and progress bar elements
const form = document.getElementById('form');
const progressBar = document.getElementById('progressBar');

// Calculate total number of input fields
const totalFields = 5;
console.log(totalFields)

// Function to update progress
const updateProgress = () => {
    const filledFields = document.querySelectorAll('.form .input-box input:valid, .form .gender-option input:checked').length;
    console.log(filledFields)
  const progress = (filledFields / totalFields) * 100;
  progressBar.style.width = `${progress}%`;
};

// Event listener for input changes
form.addEventListener('input', updateProgress);




// Registration Form Submission
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const regEmail = document.getElementById('email').value;
    const regPassword = document.getElementById('password').value;
    const regName = document.getElementById('name').value;
  
    // Store data in local storage
    localStorage.setItem('userEmail', regEmail);
    localStorage.setItem('userPassword', regPassword);
    localStorage.setItem('userName', regName);
  
    alert('Registration successful!');
    this.reset();
    window.location.href = 'login.html'; 
  });
  
  