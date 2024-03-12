fetch(menu.)
//Que hace esta linea? Esta linea incia la carga del archivo menu.json, fetch es una funcion de Javascript que facilita la realizacion de solicitudes de red como obteber datos de un archivo o un endpoint de API. 
//Como funciona? fetch devuelve una promesa que,cuando se  resuelve, te da acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos en formato JSON, si no un objeto de respuesta que incluye varios detalles sobre la respuesta misma.


.then(response => response.json())
//Que hace? Esta linea toma el objeto de respuesta obteniendo del fetch y utiliza el metodo .json() para convertir el cuerpo de la respuesta esta en formato JSON)
//Como funciona? El metodo .json() tambien devuelve una promesa, la cual se resuelve con el contenido del cuerpo en formato
.then(data =>{
    //Que hace? Aqui se procesan los datos JSON
    const menuContainer=document.getElementById('menu-container');
    data.items.forEach(category => {
        const categoryTitle = document.createElement ('h2');
        categoryTitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);
        const table = document.createElement ('tab')})
