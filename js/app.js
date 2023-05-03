let salir      = '0-salir'
let nArticulos = 0
let respuesta;
let listaArticulos2 = '';
let ListaArticulos = []; //// declaro la lista vacia
let stockActu = 0;
let articulosVendidos = 0;

ListaArticulos.push(new Articulo(1,'smartphone','samsung',60000,6));
ListaArticulos.push(new Articulo(2,'auriculares','noga',15000,8));
ListaArticulos.push(new Articulo(3,'cargador inalambrico','xiaomi',60000,12));
ListaArticulos.push(new Articulo(4,'parlante bluetooth','JBL',35200,3));
ListaArticulos.push(new Articulo(5,'cable hdmi','generico',7500,0));

for (const Articulo of  ListaArticulos){
    listaArticulos2 = listaArticulos2 + 'Id: '+Articulo.id + '   Nombre: '+Articulo.nombre+ '   Marca: '+Articulo.marca +'\n';
}

// respuesta = prompt('De la sig. lista de articulos'+'\n'+'\n'+listaArticulos2+'\n'+'\n'+'¿Que accion desea realizar?\n\n'+
//         '1-Buscar por nombre\n'+
//         '2-Eliminar un Item(debe seleccionar un id)\n'+
//         '3-Agregar un producto\n'+
//         '4-Modificar el nombre del producto\n'+
//         '5-Comprar un producto y obtener stock remanente\n'+
//         '0-Salir');

// Opcion 1
function buscarNombre(){
    const ingresaUsuario = prompt('Ingrese nombre de Articulo a buscar:');

    const articuloFound = ListaArticulos.find((Articulo) => Articulo.nombre.includes(ingresaUsuario.toLowerCase()));

    if (articuloFound){
        alert('Se encontro el artículo seleccionado en la lista de productos, el precio es => $ '+articuloFound.precio);
    }else{
        alert('No se encontro el artículo seleccionado en la lista de productos, verifique... ');
    }
}

// Opcion 2
function eliminaProducto(){
    const ingresaUsuario = prompt('Ingrese id de Articulo a eliminar:');
    
    ListaArticulos = ListaArticulos.filter(function(i) { return i !== ListaArticulos[ingresaUsuario-1] }); // filtramos
    console.log(ListaArticulos)

    let = listaArticulosSinBorrado = '';
    for (const Articulo of  ListaArticulos){
        listaArticulosSinBorrado = listaArticulosSinBorrado + 'Id: '+Articulo.id + '   Nombre: '+Articulo.nombre+ '   Marca: '+Articulo.marca +'\n';
    }

    alert('Lista resultante => \n\n'+listaArticulosSinBorrado);    
}


// Opcion 3        
function agregaProducto(){
    const nomNewArtic   = prompt('Ingrese nombre del Articulo nuevo');
    const marcaNewArtic = prompt('Ingrese marca del Articulo nuevo');
    const precioNewArtic = prompt('Ingrese precio del Articulo nuevo');
    const stockNewArtic = prompt('Ingrese el stock del Articulo nuevo');

    ListaArticulos.push(new Articulo(6,nomNewArtic,marcaNewArtic,parseFloat(precioNewArtic),parseFloat(stockNewArtic)));
    
    let newListaArticulos2 = ''
    for (const Articulo of  ListaArticulos){
        newListaArticulos2 = newListaArticulos2 + 'Id: '+Articulo.id + '   Nombre: '+Articulo.nombre+ '   Marca: '+Articulo.marca +'\n';
    }

    alert('Nueva Lista de artículos => \n\n'+newListaArticulos2);
}

// Opcion 4        
function modificaProducto(){
    const ingresaUsuario = prompt('Ingrese el Articulo a modificar su descripcion:');

    const articuloFound = ListaArticulos.find((Articulo) => Articulo.nombre.includes(ingresaUsuario.toLowerCase()));

    if (articuloFound){
        const idArtic = articuloFound.id;
        const nuevoNombre = prompt('Ingrese el nuevo nombre del articulos');
        ListaArticulos[idArtic-1].nombre = nuevoNombre;

        listaArticulos2 = '';
        for (const Articulo of  ListaArticulos){
            listaArticulos2 = listaArticulos2 + 'Id: '+Articulo.id + '   Nombre: '+Articulo.nombre+ '   Marca: '+Articulo.marca +'\n';
        }
    
        alert('Lista resultante => \n\n'+listaArticulos2);    
            
    }else{
        alert('No se encontro el artículo seleccionado en la lista de productos, verifique... ');
    }
}

// Opcion 5        
function comprarProducto(){
    const ingresaUsuario = prompt('Ingrese el nombre del Articulo que desea comprar:');

    const articuloFound = ListaArticulos.find((Articulo) => Articulo.nombre.includes(ingresaUsuario.toLowerCase()));

    if (articuloFound){
        const idArtic = articuloFound.id;
        const idStock = articuloFound.stock;
        const articulosVendidos = prompt('Ingrese la cantidad que desea comprar(max. '+idStock+' unidades)');
        
        if ( articulosVendidos > idStock ) {
            alert('La cantidad ingresada es superior al stock maximo, vuelva a intentar');
        }           
        else{            
            articuloFound.calcularStock(articulosVendidos);                        
        }                    
    }else{
        alert('No se encontro el artículo seleccionado en la lista de productos, verifique... ');
    }
}

do{

    respuesta = prompt('De la sig. lista de articulos'+'\n'+'\n'+listaArticulos2+'\n'+'\n'+'¿Que accion desea realizar?\n\n'+
    '1-Buscar por nombre\n'+
    '2-Eliminar un Item(debe seleccionar un id)\n'+
    '3-Agregar un producto\n'+
    '4-Modificar el nombre del producto\n'+
    '5-Comprar un producto y obtener stock remanente\n'+
    '0-Salir');

    switch( respuesta ) {
        case '1':
            buscarNombre();                  
            break    
        case '2':
            eliminaProducto();
            break
        case '3':
            agregaProducto();
            break
        case '4':
            modificaProducto();
            break
        case '5':
            comprarProducto();
            break
        case '0':
            alert('Muchas gracias por su visita');
            break                
        default:
            alert('Debe indicar una opción entre 1 y 5');    
    }
}while(respuesta!='0')