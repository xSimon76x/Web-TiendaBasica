const searchByName = () => {
  let text = document.getElementById("inputName").value.toLowerCase();
  if (text) {
    document.getElementById("listProduct").innerHTML = "";

    getData("/product").then((response) => {
      response.data.data.map((item) => {
        let name = item.name.toLowerCase();
        if (name.includes(text.toLowerCase())) {
          const categoryInList = document.createElement("div");
          const rowSell = document.createElement("div");
          categoryInList.className = "cardProducto";
          categoryInList.innerHTML += `<img src="${item.url_image}">`;
          categoryInList.innerHTML += `<p> ${item.name}<p/>`;

          rowSell.className = "rowSell";
          rowSell.innerHTML += `<p> $${item.price}<p/>`;
          rowSell.innerHTML += `<i class="bi bi-cart-plus" style="font-size: 1rem; color: white"></i>`;
          categoryInList.appendChild(rowSell);
          listaProductos.appendChild(categoryInList);
        }
      });
    });
  } else {
    viewProducts();
  }
};
