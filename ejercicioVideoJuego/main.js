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
var mago_1 = require("./mago");
var luchador_1 = require("./luchador");
var arquero_1 = require("./arquero");
var personajes_1 = require("./personajes");
var hechicero_1 = require("./hechicero");
var gladiador_1 = require("./gladiador");
var tirador_1 = require("./tirador");
//CREAR PERSONAJES.
var mago = new mago_1.Mago("Lord Voldemort", 100);
var luchador = new luchador_1.Luchador("Dark Knight", 100);
var arquero = new arquero_1.Arquero("Flechita", 100);
var hechicero = new hechicero_1.Hechicero("Dombuldor", 200, "Bola de Fuego");
var gladiador = new gladiador_1.Gladiador("Espartano", 200, "Giro de Espada");
var tirador = new tirador_1.Tirador("OneShooter", 200, "Triple Flechas");
var personajes = new personajes_1.Personajes("Equipo A", mago, luchador, arquero, hechicero, gladiador, tirador);
var magoB = new mago_1.Mago("Saruman", 120);
var luchadorB = new luchador_1.Luchador("Berserker", 110);
var arqueroB = new arquero_1.Arquero("HawkEye", 105);
var hechiceroB = new hechicero_1.Hechicero("Merlín", 180, "Rayo Fulminante");
var gladiadorB = new gladiador_1.Gladiador("Centurión", 190, "Estocada Letal");
var tiradorB = new tirador_1.Tirador("Sharpshooter", 180, "Flecha Perforante");
var equipoB = new personajes_1.Personajes("Equipo B", magoB, luchadorB, arqueroB, hechiceroB, gladiadorB, tiradorB);
console.log(arquero);
console.log(personajes.atacarArquero());
console.log(luchador.getNombre(), personajes.defenderLuchador());
console.log(personajes.evolucionarMago(mago, hechicero));
console.log(hechicero);
console.log(personajes.enfrentarEquipos(personajes, equipoB));
