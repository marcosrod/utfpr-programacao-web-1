const $name = document.querySelector("#product-form-register-nome");
const $price = document.querySelector("#product-form-register-preco");
const $category = document.querySelector("#product-form-register-categoria");

document.querySelector("#product-form-register").addEventListener("submit", (event) => {
  event.preventDefault();

  addNewCategory();
});

const addNewCategory = () => {
  fetch("https://sparkyproduct-default-rtdb.firebaseio.com/product.json", {
    method: "POST",
    body: JSON.stringify({
      name: $name.value,
      price: $price.value,
      category: $category.value,
    }),
  }).then((res) =>
    res.ok
      ? (window.location.href='catalog.html')
      : alert("As informações inseridas são insuficientes ou inválidas.")
  );
};

fetch('https://sparkyproduct-default-rtdb.firebaseio.com/category.json')
        .then(res => res.json())
        .then(vals => {
            for(let data in vals) {
                $('#product-form-register-categoria').append(new Option(`${vals[data].name}`, vals[data].name))
            }
        })

