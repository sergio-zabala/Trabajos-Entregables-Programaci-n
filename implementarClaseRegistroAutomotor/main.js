"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_1 = require("./auto");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var registroAutomotor_1 = require("./registroAutomotor");
//crear auto
var auto1 = new auto_1.Auto("Ford", "Fiesta");
var auto2 = new auto_1.Auto("Chevrolet", "Corsa");
//crear moto
var moto1 = new moto_1.Moto("Yamaha", "ybr", 125);
var moto2 = new moto_1.Moto("Honda", "cg", 150);
//crear camion
var camion1 = new camion_1.Camion("Ford", "Cargo");
var camion2 = new camion_1.Camion("Scania", "Accueli");
//crear registroAutomotor
var registro = new registroAutomotor_1.RegistroAutomotor("registro Automotor Olavarria");
//Agregar vehiculos al registro.
registro.agregarAutos(auto1);
registro.agregarAutos(auto2);
registro.agregarMotos(moto1);
registro.agregarMotos(moto2);
registro.agregarCamiones(camion1);
registro.agregarCamiones(camion2);
//mostramos todo
console.log(registro);
//modificar vehiculo
auto1.setEmpresa("VolksWagen");
auto1.setModelo("Scirocco");
//dar de baja
registro.bajaCamion("Ford");
registro.bajaMoto("Yamaha");
registro.bajaAuto("Chevrolet");
//mostramos todo
console.log(registro);
