"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    //Constructor
    function Camion(empresa, modelo) {
        this.empresa = empresa;
        this.modelo = modelo;
    }
    //metodos
    //GET
    Camion.prototype.getEmpresa = function () {
        return this.empresa;
    };
    Camion.prototype.getModelo = function () {
        return this.modelo;
    };
    //SET
    Camion.prototype.setEmpresa = function (parEmpresa) {
        this.empresa = parEmpresa;
    };
    Camion.prototype.setModelo = function (parModelo) {
        this.modelo = parModelo;
    };
    return Camion;
}());
exports.Camion = Camion;
