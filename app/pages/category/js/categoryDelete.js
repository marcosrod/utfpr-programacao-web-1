$('#category-btn-delete').click(e => {
    const name = document.querySelector("#deleted");
    console.log(name.textContent);
    categoryDelete(name.textContent);
})

const categoryDelete = (name) => {
    console.log(name)
    fetch(`https://sparkyproduct-default-rtdb.firebaseio.com/category/${name}.json`, {
      method: "DELETE",
    }).then((res) =>
      res.ok
        ? (window.location.href='../../../../app/pages/category/catalog.html')
        : alert("Ocorreu um erro, tente novamente mais tarde.")
    );
}
  