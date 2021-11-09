$('#product-btn-delete').click(e => {
    productDelete("teste");
})

const productDelete = (name) => {
    console.log(name)
    fetch(`https://sparkyproduct-default-rtdb.firebaseio.com/product/${name}.json`, {
      method: "DELETE",
    }).then((res) =>
      res.ok
        ? (window.location.href='../../../../app/pages/product/catalog.html')
        : alert("Ocorreu um erro, tente novamente mais tarde.")
    );
}
  