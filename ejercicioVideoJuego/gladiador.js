"use strict";
/*Crear un sistema de personajes de un
videojuego RPG utilizando herencia y
polimorfismo. Los personajes tendrán
características y habilidades únicas, y
algunos podrán evolucionar a versiones
mejoradas con nuevas habilidades.

Ejemplo de clase base personaje
El personaje debe tener atributos ej:
nombre (string): El nombre del personaje.
nivel (number): El nivel del personaje (empieza en 1).
puntosDeVida (number): Los puntos de vida del personaje.
Métodos ej:
atacar(): Imprime un mensaje indicando que el personaje
está atacando.
defender(): Imprime un mensaje indicando que el personaje
está defendiendo

Aclaracion, pueden crear las propiedades que quieran
pero no se vayan por la ramas. Hagan lo justo y
necesario.
Recomendamos crear  3 tipos de héroes (mago,
luchador, arquero) y luego algunos especiales.

Punto  extra: Contexto: un jugador puede encontrar una caja mágica en algún
momento y al abrirla el personaje aprende un nuevo ataque.
¿Qué cambio debe realizar en la clase?- Olvidense de la caja,
imaginen que ya está abierta-*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gladiador = void 0;
var luchador_1 = require("./luchador");
var Gladiador = /** @class */ (function (_super) {
    __extends(Gladiador, _super);
    //CONSTRUCTOR.
    function Gladiador(nickName, puntosDeVida, ataque) {
        var _this = _super.call(this, nickName, puntosDeVida) || this;
        _this.nivel = 50;
        _this.evolucion = 2;
        _this.ataque = ataque;
        return _this;
    }
    //GETTERS.
    Gladiador.prototype.getHechizo = function () {
        return this.ataque;
    };
    //SETTERS.
    Gladiador.prototype.setHechizo = function (parAtaque) {
        this.ataque = parAtaque;
    };
    return Gladiador;
}(luchador_1.Luchador));
exports.Gladiador = Gladiador;
