const table = document.getElementById("product-table");

fetch('https://sparkyproduct-default-rtdb.firebaseio.com/product.json')
        .then(res => res.json())
        .then(vals => {
            for(let data in vals) {
                let row = table.insertRow();
                let name = row.insertCell(0);
                name.innerHTML = vals[data].name;
                let price = row.insertCell(1);
                price.innerHTML = vals[data].price;
                let category = row.insertCell(2);
                category.innerHTML = vals[data].category;
                let btnEdit = document.createElement("button");
                btnEdit.classList.add("btn-edit");
                let iconEdit = document.createElement("i");
                iconEdit.classList.add("fa-solid", "fa-pen-to-square", "icon-btn-edit");
                btnEdit.appendChild(iconEdit);
                btnEdit.addEventListener("click", () => window.location.href='edit.html');
                let btnDelete = document.createElement("button");
                btnDelete.classList.add("btn-delete");
                let iconDelete = document.createElement("i");
                iconDelete.classList.add("fa-solid", "fa-trash", "icon-btn-delete");
                btnDelete.appendChild(iconDelete);
                btnDelete.setAttribute("data-toggle", "modal");
                btnDelete.setAttribute("data-target", "#deleteProductModal");
                let btnTd = row.insertCell(3);
                btnTd.appendChild(btnEdit);
                btnTd.appendChild(btnDelete);
            }
        })