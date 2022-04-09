const listaCategorias = document.getElementById("listCategorias");

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
