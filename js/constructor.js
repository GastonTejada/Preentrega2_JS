class Articulo{
    
    // atributos 
    id;
    nombre;
    marca;
    precio;
    stock;

    //constructor
    constructor(id,nombre,marca,precio,stock)
    {
        this.id     = id;
        this.nombre = nombre;
        this.marca  = marca;
        this.precio = precio;
        this.stock  = stock;
    }

    ///función para calcular stock remanente
    calcularStock = function(articulosVendidos) {
        const remanente = this.stock-articulosVendidos;
        alert('Ahora el stock del producto es => '+remanente);
    };

}