"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    //constructor
    function RegistroAutomotor(nombre) {
        this.nombre = nombre;
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }
    //metodos
    //AGREGAR VEHICULO
    RegistroAutomotor.prototype.agregarAutos = function (parAuto) {
        this.autos.push(parAuto);
    };
    RegistroAutomotor.prototype.agregarMotos = function (parMoto) {
        this.motos.push(parMoto);
    };
    RegistroAutomotor.prototype.agregarCamiones = function (parCamion) {
        this.camiones.push(parCamion);
    };
    // DAR DE BAJA
    RegistroAutomotor.prototype.bajaAuto = function (empresa) {
        this.autos = this.autos.filter(function (Auto) { return Auto.getEmpresa() !== empresa; });
    };
    RegistroAutomotor.prototype.bajaMoto = function (empresa) {
        this.motos = this.motos.filter(function (Moto) { return Moto.getEmpresa() !== empresa; });
    };
    RegistroAutomotor.prototype.bajaCamion = function (empresa) {
        this.camiones = this.camiones.filter(function (Camion) { return Camion.getEmpresa() !== empresa; });
    };
    //GET
    RegistroAutomotor.prototype.getNombre = function () {
        return this.nombre;
    };
    RegistroAutomotor.prototype.getAuto = function () {
        return this.autos;
    };
    RegistroAutomotor.prototype.getMoto = function () {
        return this.motos;
    };
    RegistroAutomotor.prototype.getCamion = function () {
        return this.camiones;
    };
    //SET
    RegistroAutomotor.prototype.setNombre = function (parNombre) {
        this.nombre = parNombre;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
