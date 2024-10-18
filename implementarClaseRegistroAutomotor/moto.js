"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    //Constructor
    function Moto(empresa, modelo, cilindrada) {
        this.empresa = empresa;
        this.modelo = modelo;
        this.cilindrada = cilindrada;
    }
    //metodos
    //GET
    Moto.prototype.getEmpresa = function () {
        return this.empresa;
    };
    Moto.prototype.getModelo = function () {
        return this.modelo;
    };
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    //SET
    Moto.prototype.setEmpresa = function (parEmpresa) {
        this.empresa = parEmpresa;
    };
    Moto.prototype.setModelo = function (parModelo) {
        this.modelo = parModelo;
    };
    Moto.prototype.setCilindrada = function (parCilindrada) {
        this.cilindrada = parCilindrada;
    };
    return Moto;
}());
exports.Moto = Moto;
