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
exports.Personajes = void 0;
var Personajes = /** @class */ (function () {
    //CONSTRUCTOR.
    function Personajes(nombre, mago, luchador, arquero, hechicero, gladiador, tirador) {
        this.nombre = nombre;
        this.mago = mago;
        this.luchador = luchador;
        this.arquero = arquero;
        this.hechicero = hechicero;
        this.gladiador = gladiador;
        this.tirador = tirador;
    }
    //GETTERS.
    Personajes.prototype.getNombre = function () {
        return this.nombre;
    };
    Personajes.prototype.getMago = function () {
        return this.mago;
    };
    Personajes.prototype.getLuchador = function () {
        return this.luchador;
    };
    Personajes.prototype.getArquero = function () {
        return this.arquero;
    };
    Personajes.prototype.getHechicero = function () {
        return this.hechicero;
    };
    Personajes.prototype.getGladiador = function () {
        return this.gladiador;
    };
    Personajes.prototype.getTirador = function () {
        return this.tirador;
    };
    //METODOS.
    //atacar
    Personajes.prototype.atacarMago = function () {
        return "".concat(this.mago.getNombre(), " realiza un hechizo.");
    };
    Personajes.prototype.atacarLuchador = function () {
        return "".concat(this.luchador.getNombre(), " realiza un ataque.");
    };
    Personajes.prototype.atacarArquero = function () {
        return "".concat(this.arquero.getNombre(), " realiza un ataque.");
    };
    //defender.
    Personajes.prototype.defenderMago = function () {
        return "".concat(this.mago.getNombre(), " realiza una defensa.");
    };
    Personajes.prototype.defenderLuchador = function () {
        return "".concat(this.luchador.getNombre(), " realiza una defensa.");
    };
    Personajes.prototype.defenderArquero = function () {
        return "".concat(this.arquero.getNombre(), " realiza una defensa.");
    };
    //Evolucionar
    Personajes.prototype.evolucionarMago = function (personaje1, personaje2) {
        var nombreOriginal = personaje1.getNombre();
        personaje1.setNombre(personaje2.getNombre());
        personaje1.setPoder(personaje2.getPoder());
        return "Evoluci\u00F3n exitosa. Ahora ".concat(nombreOriginal, " tiene las propiedades de ").concat(personaje2.getNombre(), ".");
    };
    Personajes.prototype.evolucionarLuchador = function (personaje1, personaje2) {
        var nombreOriginal = personaje1.getNombre();
        personaje1.setNombre(personaje2.getNombre());
        personaje1.setPoder(personaje2.getPoder());
        return "Evoluci\u00F3n exitosa. Ahora ".concat(nombreOriginal, " tiene las propiedades de ").concat(personaje2.getNombre(), ".");
    };
    Personajes.prototype.evolucionarArquero = function (personaje1, personaje2) {
        var nombreOriginal = personaje1.getNombre();
        personaje1.setNombre(personaje2.getNombre());
        personaje1.setPoder(personaje2.getPoder());
        return "Evoluci\u00F3n exitosa. Ahora ".concat(nombreOriginal, " tiene las propiedades de ").concat(personaje2.getNombre(), ".");
    };
    Personajes.prototype.enfrentarEquipos = function (equipoA, equipoB) {
        var personajesA = [
            equipoA.getMago(),
            equipoA.getLuchador(),
            equipoA.getArquero(),
            equipoA.getHechicero(),
            equipoA.getGladiador(),
            equipoA.getTirador()
        ];
        var personajesB = [
            equipoB.getMago(),
            equipoB.getLuchador(),
            equipoB.getArquero(),
            equipoB.getHechicero(),
            equipoB.getGladiador(),
            equipoB.getTirador()
        ];
        console.log("Comienza el enfrentamiento entre Equipo A y Equipo B");
        for (var i = 0; i < personajesA.length; i++) {
            var atacanteA = personajesA[i];
            var defensorB = personajesB[i];
            // Equipo A ataca y Equipo B se defiende
            console.log("".concat(atacanteA.getNombre(), " del Equipo A ataca. ").concat(defensorB.getNombre(), " del Equipo B se defiende."));
            console.log(equipoA.atacarArquero());
            // Equipo B contraataca
            console.log("".concat(defensorB.getNombre(), " del Equipo B contraataca. ").concat(atacanteA.getNombre(), " del Equipo A se defiende."));
            console.log(equipoB.defenderArquero());
        }
        console.log("El enfrentamiento ha terminado");
    };
    return Personajes;
}());
exports.Personajes = Personajes;
