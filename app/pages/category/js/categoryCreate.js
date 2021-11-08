const $name = document.querySelector("#category-form-register-nome");

document.querySelector("#category-form-register").addEventListener("submit", (event) => {
  event.preventDefault();

  addNewCategory();
});

const addNewCategory = () => {
  fetch(`https://sparkyproduct-default-rtdb.firebaseio.com/category/${$name.value}.json`, {
    method: "POST",
    body: JSON.stringify({
      name: $name.value,
    }),
  }).then((res) =>
    res.ok
      ? (window.location.href='catalog.html')
      : alert("As informações inseridas são insuficientes ou inválidas.")
  );
};