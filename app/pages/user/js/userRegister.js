const $name = document.querySelector("#form-register-name");
const $email = document.querySelector("#form-register-email");
const $password = document.querySelector("#form-register-password");

document.querySelector("#form-register").addEventListener("submit", (event) => {
  event.preventDefault();

  addNewUser();
});



const saveNewUserInfo = (id) => {
  fetch("https://sparkyproduct-default-rtdb.firebaseio.com/user.json", {
    method: "POST",
    body: JSON.stringify({
      id: id,
      name: $name.value,
      email: $email.value,
      password: $password.value,
    }),
  }).then((res) =>
    res.ok
      ? (window.location.href='../../../../app/pages/index.html')
      : alert("As informações inseridas são insuficientes ou inválidas.")
  );
};

const addNewUser = async () => {
  const res = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
    {
      method: "POST",
      body: JSON.stringify({
        email: $email.value,
        password: $password.value,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const userData = await res.json();
  saveNewUserInfo(userData.localId);
};

const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#form-register-password');
 
  togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    const iconState = document.querySelector('#span-icon-register').textContent; 
    document.querySelector('#span-icon-register').textContent = iconState === 'visibility_off' ? 'visibility' : 'visibility_off';

});


