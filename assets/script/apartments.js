function myFunction() {
    document.getElementById("loc").classList.toggle("show");
}
window.onclick = function(_event) {
    if (!_event.targret.matched('.dropbtn')) {
        var listings = document.getElementsByName("list")
        var i;
        for (i = 0; i < listings.length; i++){
            var openListings = listings[i];
            if (openListings.classList.contains('show')){
                openListings.classList.remove('show');
            }
        }

    }
}

const logInButton = document.getElementById('log-in');
const signUpLink = document.getElementById('sign-up-link');
const signUpSection = document.querySelector('.sign-ups');
const signUpButton = document.getElementById('sign-up');
const logInLink = document.getElementById('log-in-link');
const navLogIn = document.getElementById('navLogIn');
const navSignUp = document.getElementById('navSignUp');
const logInSection = document.querySelector('.log-ins');
const container = document.querySelector('.container');
const closeButton = document.querySelector('.close-button');
const closeSignUpButton = document.querySelector('.close-sign-up-button');

// the navigation login button will call the login section
navLogIn.addEventListener('click', function () {
    logInSection.style.display = 'block';
    container.style.opacity = '0.1';

});

//the close button closes the login section .
closeButton.addEventListener('click', function () {
    logInSection.style.display = 'none';
    container.style.opacity = '1';

});

// call up sign up section
signUpLink.addEventListener('click', function () {
    logInSection.style.display = 'none';
    signUpSection.style.display = 'block';
    container.style.opacity = '0.1';

});

// nav sign up will call up sign up section
navSignUp.addEventListener('click', function () {
    signUpSection.style.display = 'block';
    container.style.opacity = '0.1';

});
//the close button closes the sign up section .
closeSignUpButton.addEventListener('click', function () {
    signUpSection.style.display = 'none';
    container.style.opacity = '1';

});

// the sign up button will call the sign up section
signUpButton.addEventListener('click', function () {
    signUpSection.style.display = 'none';
    container.style.opacity = '1';
    // property.style.display = 'block';

});


