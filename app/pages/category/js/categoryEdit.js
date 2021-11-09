const $updatedName = document.querySelector("#category-form-edit-nome");

$('#category-btn-edit').click(e => {
    const $name = document.querySelector("#deleted");
    console.log($name)
})

$('#category-btn-confirm-edit').click(e => {
    console.log($name)
    categoryEdit();
}) 

const categoryEdit = () => {
    fetch(`https://sparkyproduct-default-rtdb.firebaseio.com/category/${$name}.json`, {
      method: "PUT",
      body: JSON.stringify({
        name: $updatedName,
      }),
    }).then((res) =>
      res.ok
        ? (window.location.href='../../../../app/pages/category/catalog.html')
        : alert("Ocorreu um erro, tente novamente mais tarde.")
    );
}
  