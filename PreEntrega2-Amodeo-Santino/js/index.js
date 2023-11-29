class Producto{
    constructor(nombreDelProducto, fecha, puntoDeVenta, costo, cuotas){
        this.nombreDelProducto = nombreDelProducto.toUpperCase();
        this.fecha = fecha;
        this.puntoDeVenta = puntoDeVenta.toUpperCase();
        this.costo = parseFloat(costo);
        this.cuotas = cuotas;
        this.vendido = false;
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto("Iphone 12", "12-12-21", "Online", 450, 1));
productos.push(new Producto("Iphone 13", "15-2-22", "Local", 650, 3));
productos.push(new Producto("Iphone 14", "1-10-22", "Online", 800, 12));

for (const Producto of productos)
    Producto.sumaIva();

console.log(productos)

const carrito = [];
carrito.push(new Producto("Iphone 15", "1-11-23", "Online", 1100, 1));

console.log(carrito)
