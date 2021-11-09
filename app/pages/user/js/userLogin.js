const $email = document.querySelector("#form-login-email");
const $password = document.querySelector("#form-login-password");

document.querySelector("#form-login").addEventListener("submit", (event) => {
  event.preventDefault();

  userAuth();
});



const userAuth = () => {
  fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=", {
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


