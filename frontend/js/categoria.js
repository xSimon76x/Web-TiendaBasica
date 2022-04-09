/**
 * se  obteniene el bloque de la etiqueta listCategorias
 */
const listaCategorias = document.getElementById("listCategorias");

/**
 * en base a los datos de la api en la ruta de /categoria
 * se integran las categorias en el front
 */
getData("/category").then((response) => {
  response.data.data.map((item, index) => {
    const categoryInList = document.createElement("div");
    const nameCategoria = document.createElement("p");
    nameCategoria.innerHTML += `${item.name}`;

    categoryInList.className = "containerCategoria";
    categoryInList.appendChild(nameCategoria);
    listaCategorias.appendChild(categoryInList);
  });
});
