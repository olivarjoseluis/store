var Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function () {
    return 'id: ' + this.id + ' color: ' + this.color + ' modelo: ' + this.modelo + ' ubicacion: ' + this.ubicacion;
}

Bicicleta.allBicis = [];
Bicicleta.add = function (aBici) {
    Bicicleta.allBicis.push(aBici);
}

var a = new Bicicleta(1,'Rojo','Montaña',[3.257129, -76.539517]);
var b = new Bicicleta(2,'Azul','Urbana',[3.257292, -76.542040]);
Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;