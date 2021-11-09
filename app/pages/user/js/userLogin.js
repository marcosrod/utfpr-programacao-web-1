const $email = document.querySelector("#form-login-email");
const $password = document.querySelector("#form-login-password");

document.querySelector("#form-login").addEventListener("submit", (event) => {
  event.preventDefault();

  userAuth();
});



const userAuth = () => {
  fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAU-4rLBgoJiYH3xNUW8Pycg6QT4gOibTQ", {
    method: "POST",
    body: JSON.stringify({
      email: $email.value,
      password: $password.value,
      returnSecureToken: true,
    }),
  }).then((res) =>
    res.ok
      ? (window.location.href='../../../../app/pages/index.html')
      : alert("As informações inseridas são insuficientes ou inválidas.")
  );
};

const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#form-login-password');
 
  togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    const iconState = document.querySelector('#span-icon-login').textContent; 
    document.querySelector('#span-icon-login').textContent = iconState === 'visibility_off' ? 'visibility' : 'visibility_off';

});


