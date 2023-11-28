
class SelectionProduct{
    constructor(producto, fecha, puntoVenta){
        this.producto = producto;
        this.fecha = fecha || new Date (); 
        this.puntoVenta = puntoVenta;
    }
}

class Price{
    constructor(costo, cuotas){
        this.costo = Math.round(costo);
        this.cuotas = cuotas;
    }
}

let venta1 = new SelectionProduct("Iphone 11", 20-10-2019,"Web");
let venta2 = new SelectionProduct("MacBook 11", 21-10-2019,"Web");

let precio1 = new Price(1000,3);
let precio2 = new Price(2500, 1);

function descuentoXWeb(SelectionProduct){
    if(SelectionProduct.puntoVenta == "Online" || SelectionProduct.puntoVenta == "Web"){
        console.log("Pagaras mas barato por utilizar la web!")
    }else{
        console.log("Te recomendamos comprar por la web")
    }
}

function descontando(Price){
    let tres = prompt("En cuantas cuotas pagaras?");
    if(Price.cuotas >= 3){
        tres = Price.costo * 1.21;
        alert(tres);
    }else{
        console.log(`Pagaras en ${tres}`);
    }
}

descontando(Price);

