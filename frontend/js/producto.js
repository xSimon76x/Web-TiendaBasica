const listaProductos = document.getElementById("listProduct");

const viewProducts = () => {
  return getData("/product").then((response) => {
    response.data.data.map((item) => {
      const categoryInList = document.createElement("div");
      const rowSell = document.createElement("div");
      categoryInList.className = "cardProducto";
      categoryInList.innerHTML += `<img src="${item.url_image}">`;
      categoryInList.innerHTML += `<p> ${item.name}<p/>`;
      categoryInList.id = "firstPanelProducto";

      rowSell.id = "secondPanelProducto";
      rowSell.className = "rowSell";
      rowSell.innerHTML += `<p> $${item.price}<p/>`;
      rowSell.innerHTML += `<i class="bi bi-cart-plus" style="font-size: 1rem; color: white"></i>`;
      categoryInList.appendChild(rowSell);
      listaProductos.appendChild(categoryInList);
    });
  });
};
viewProducts();
