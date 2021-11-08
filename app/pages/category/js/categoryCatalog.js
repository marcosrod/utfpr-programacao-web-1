const table = document.getElementById("category-table");

fetch('https://sparkyproduct-default-rtdb.firebaseio.com/category.json')
        .then(res => res.json())
        .then(vals => {
            for(let data in vals) {
                let row = table.insertRow();
                let name = row.insertCell(0);
                name.innerHTML = data;
                let btnEdit = document.createElement("button");
                btnEdit.classList.add("btn-edit");
                let iconEdit = document.createElement("i");
                iconEdit.classList.add("fa-solid", "fa-pen-to-square", "icon-btn-edit");
                btnEdit.appendChild(iconEdit);
                btnEdit.addEventListener("click", () => window.location.href='edit.html');
                let btnDelete = document.createElement("button");
                btnDelete.classList.add("btn-delete");
                btnDelete.addEventListener("click", e => {
                    e.target.parentElement.parentElement.firstChild.id = "deleted";
                })
                let iconDelete = document.createElement("i");
                iconDelete.classList.add("fa-solid", "fa-trash", "icon-btn-delete");
                btnDelete.appendChild(iconDelete);
                btnDelete.setAttribute("data-toggle", "modal");
                btnDelete.setAttribute("data-target", "#deleteCategoryModal");
                let btnTd = row.insertCell(1);
                btnTd.appendChild(btnEdit);
                btnTd.appendChild(btnDelete);
            }
        })