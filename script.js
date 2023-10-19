const registerBtn = document.getElementById('register');
const container = document.getElementById('container');
const loginBtn = document.getElementById('login');

const signInBtn = document.getElementById('sign-in-btn');
const signUpBtn = document.getElementById('sign-up-btn');

registerBtn.addEventListener('click', () => { 
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

signInBtn.addEventListener('click', (e) => { e.preventDefault(); });
signUpBtn.addEventListener('click', (e) => { e.preventDefault(); });