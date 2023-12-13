// Login Form Submission
document.getElementById('loginForm1').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const loginEmail = document.getElementById('loginemail').value;
    const loginPassword = document.getElementById('loginpassword').value;
    console.log(loginEmail)
  
    // Retrieve stored data from local storage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
  
    // Check if login credentials match stored data
    if (loginEmail === storedEmail && loginPassword === storedPassword) {
      alert('Login successful!');
      localStorage.setItem('loggedIn', 'true');
      const storedName = localStorage.getItem('userName');
      const Accountname = document.getElementById('dropdownMenuButton1');
      Accountname.innerHTML = storedName
      window.location.href = 'index.html'; 
    } else {
      alert('Invalid email or password. Please try again.');
    }
  
    this.reset();
    
   
  });

  