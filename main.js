// Select important elements
const signUp = document.querySelector('.sign-up'); // Sign-up form
const login = document.querySelector('.login'); // Login form
const signUpPage = document.querySelector('.sign-up-page'); // Sign-up button
const loginPage = document.querySelector('.login-page'); // Login button
const emailInput = document.querySelector('.email'); // Email input field
const warning = document.querySelector('.email-warning'); // Warning message for duplicate email
const signUpButton = document.querySelector('.signUp-btn'); // Sign-up button

// 🔄 Toggle between Sign-up and Login pages
loginPage.addEventListener('click', () => {
    login.style.right = '0'; // Show login form
    signUp.style.opacity = '0%'; // Hide sign-up form
});

signUpPage.addEventListener('click', () => {
    login.style.right = '-100%'; // Hide login form
    signUp.style.opacity = '100%'; // Show sign-up form
});

// ✨ Sign-up Form Submission
signUp.onsubmit = function (event) {
    event.preventDefault(); // Prevent page refresh

    // Get input values
    const names = document.querySelector('.name').value;
    const email = emailInput.value;
    const address = document.querySelector('.address').value;
    const password = document.querySelector('.password').value;

    // Validate input fields
    if (names && email && address && password) {
        // Create user data object
        const userData = {
            username: names,
            email: email,
            address: address,
            password: password
        };

        // Convert object to JSON and store in localStorage
        localStorage.setItem(email, JSON.stringify(userData));

        // Show success message
        signUpButton.innerHTML = 'Account Created Successfully <i class="fa-solid fa-circle-check"></i>';

        // Reset form after 3 seconds
        setTimeout(() => {
            signUpButton.innerHTML = 'Sign Up';
            signUp.reset();
        }, 3000);
    } else {
        alert('❌ Please fill in all fields.'); // Alert user to fill all fields
    }
};

// 🔍 Check if email already exists in localStorage
emailInput.addEventListener('input', function () {
    const email = emailInput.value;

    if (localStorage.getItem(email) != null) {  ////////
        warning.style.display = 'block'; // Show warning message
        signUpButton.disabled = true; // Disable sign-up button
    } else {
        warning.style.display = 'none'; // Hide warning message
        signUpButton.disabled = false; // Enable sign-up button
    }
});

// 🔐 Login Form Submission
login.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Get user input values
    const userEmail = document.querySelector('.userEmail').value;
    const userPassword = document.querySelector('.userPassword').value;

    // Check if email exists in localStorage
    if (!localStorage.getItem(userEmail)) {
        alert('❌ This email does not exist! Please sign up first.');
        return;
    }

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem(userEmail));

    // Check if email and password match
    if (userEmail === userData.email && userPassword === userData.password) {
        alert('✅ Login Successful! Redirecting...');
        window.location.href = 'https://devsudip07.github.io/sps/'; // Redirect to dashboard
    } else {
        alert('❌ Invalid Email or Password!'); // Show error message
    }
});
