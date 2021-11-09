fetch('https://sparkyproduct-default-rtdb.firebaseio.com/category.json')
        .then(res => res.json())
        .then(vals => {
            for(let data in vals) {
                $('#product-form-edit-categoria').append(new Option(`${data}`, data))
            }
        })