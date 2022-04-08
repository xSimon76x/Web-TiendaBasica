const listaProductos = document.getElementById("listProduct");
const listaCategorias = document.getElementById("listCategorias");

getData("/product").then((response) => {
  response.data.data.map((item) => {
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
  });
});

getData("/category").then((response) => {
  response.data.data.map((item, index) => {
    const categoryInList = document.createElement("div");
    const nameCategoria = document.createElement("p");
    nameCategoria.innerHTML += `${item.name}`;
    // nameCategoria.id += `typeCategoria.${index}`;
    // nameCategoria.setAttribute("onclick", searchByCategory(item.name));
    categoryInList.className = "containerCategoria";
    categoryInList.appendChild(nameCategoria);
    listaCategorias.appendChild(categoryInList);
  });
});

const cat = document.getElementById("typeCategoria.1");
console.log(cat);

const searchByCategory = (category) => {
  getData("/product").then((response) => {
    response.data.data.map((item) => {
      {
        item.typeCategory.name == category ? console.log(item.name) : false;
      }
    });
  });
};
