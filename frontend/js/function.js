const lista = document.getElementById("listProduct");

getData("/category").then((response) => {
  //console.log(response.data.data[0].name);
  response.data.data.map((item) => {
    const categoryInList = document.createElement("div");
    categoryInList.innerHTML = item.name;
    lista.appendChild(categoryInList);
  });
});
