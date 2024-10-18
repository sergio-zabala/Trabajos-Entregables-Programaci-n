"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    //Constructor
    function Auto(empresa, modelo) {
        this.empresa = empresa;
        this.modelo = modelo;
    }
    //metodos
    //GET
    Auto.prototype.getEmpresa = function () {
        return this.empresa;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    //SET
    Auto.prototype.setEmpresa = function (parEmpresa) {
        this.empresa = parEmpresa;
    };
    Auto.prototype.setModelo = function (parModelo) {
        this.modelo = parModelo;
    };
    return Auto;
}());
exports.Auto = Auto;
