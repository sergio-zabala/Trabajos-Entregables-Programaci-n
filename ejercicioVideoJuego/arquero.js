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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
var Arquero = /** @class */ (function () {
    //CONSTRUCTOR.
    function Arquero(nickName, puntosDeVida) {
        this.nombre = nickName;
        this.nivel = 1;
        this.puntosDeVida = puntosDeVida;
        this.evolucion = 1;
    }
    //GETTERS.
    Arquero.prototype.getNombre = function () {
        return this.nombre;
    };
    Arquero.prototype.getNivel = function () {
        return this.nivel;
    };
    Arquero.prototype.getPuntosDeVida = function () {
        return this.puntosDeVida;
    };
    Arquero.prototype.getEvolucion = function () {
        return this.evolucion;
    };
    Arquero.prototype.getPoder = function () {
        return this.poder;
    };
    //SETTERS
    Arquero.prototype.setNombre = function (parNombre) {
        this.nombre = parNombre;
    };
    Arquero.prototype.setNivel = function (parNivel) {
        this.nivel = parNivel;
    };
    Arquero.prototype.setPuntosDeVida = function (parPuntosDeVida) {
        this.puntosDeVida = parPuntosDeVida;
    };
    Arquero.prototype.setPoder = function (parPoder) {
        this.poder = parPoder;
    };
    return Arquero;
}());
exports.Arquero = Arquero;
