const signUp = document.querySelector('.sign-up');
const login = document.querySelector('.login');
const signUpPage = document.querySelector('.sign-up-page');
const loginPage = document.querySelector('.login-page');

loginPage.addEventListener('click', () => {
    login.style.right = '0';
    signUp.style.opacity = '0%';
});

signUpPage.addEventListener('click', () => {
    login.style.right = '-100%';
    signUp.style.opacity = '100%';
});




signUp.onsubmit = function () {
    const names = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const address = document.querySelector('.address').value;
    const password = document.querySelector('.password').value;

    const userData = {
        username: names,
        email: email,
        address: address,
        password: password
    };
    const userTextData = JSON.stringify(userData);

    // SENDING DATA TO THE LOCAL STORAGE
    if (names != '' && email != '' && address != '' && password != '') {
        localStorage.setItem(email, userTextData);
        const signUpButton = document.querySelector('.signUp-btn');
        signUpButton.innerHTML = 'Account Created Successfully <i class="fa-solid fa-circle-check"></i>';
        setTimeout(() => {
            signUpButton.innerHTML = 'Sign Up';
            signUp.reset();
        }, 3000);
        return false;
    } else {
        alert('Please Fill The Blanks');
    }

};



const emailInput = document.querySelector('.email');

emailInput.onchange = function () {


    // CONFIRM THE ENTERED EMAIL IN AN UNIQUE EMAIL ID

    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const warning = document.querySelector('.email-warning');
    const signUpButton = document.querySelector('.signUp-btn');

    if (localStorage.getItem(email) != null) {
        warning.style.display = 'block';
        signUpButton.disabled = true;
    } else {
        warning.style.display = 'none';
        signUpButton.disabled = false;
    }


};


login.addEventListener('submit', () => {
    const userEmail = document.querySelector('.userEmail');
    const userPassword = document.querySelector('.userPassword');
    const email = userEmail.value;

    if (localStorage.getItem(email) == null) {
        alert('This email does not exist');
    } else {
        const storedEmail = localStorage.getItem(email);
        const dbTextEmail = JSON.parse(storedEmail);
        const correctEmail = dbTextEmail.email;
        const correctPassword = dbTextEmail.password;

        if (userEmail.value === correctEmail && userPassword.value === correctPassword) {
            alert('Login Successful');
            window.location.href = 'https://devsudip07.github.io/sps/';
            window.open('https://devsudip07.github.io/sps/', '_parent');
        } else {
            alert('Invalid Email or Password');
        }
    }
});