/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 360) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)  

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

document.addEventListener('DOMContentLoaded', function() {
    const loggedIn = localStorage.getItem('loggedIn');
    const dropdownMenuButton = document.getElementById('dropdownMenuButton1');
  
    if (loggedIn === 'true') {
      const storedName = localStorage.getItem('userName');
      dropdownMenuButton.textContent = storedName; // Set username in the dropdown button
  
      // Change the "Signup" option to "Sign Out" after login
      const dropdownMenu = document.querySelector('.dropdown-menu');
      dropdownMenu.innerHTML = '<li><a class="dropdown-item nav__link" id="signOutBtn">Sign Out</a></li>';
  
      // Add event listener to the dynamically created "Sign Out" button
      document.getElementById('signOutBtn').addEventListener('click', function(event) {
        event.preventDefault();
        signOut(); // Call the signOut function (assuming you've defined it)
      });
    } else {
      // If not logged in, keep the default "Signup" option
      dropdownMenuButton.textContent = 'Account'; // Clear the dropdown button content
  
      const dropdownMenu = document.querySelector('.dropdown-menu');
      dropdownMenu.innerHTML = '<li><a class="dropdown-item nav__link" href="./signup.html">Signup</a></li>';
    }
  });
  
  // Function to sign the user out
  function signOut() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userName'); // Clear user data
    window.location.href = 'login.html'; // Redirect to login page
  }
  

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})