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

import { Mago } from "./mago";
import { Luchador } from "./luchador";
import { Arquero } from "./arquero";
import { Personajes } from "./personajes";
import { Hechicero } from "./hechicero";
import { Gladiador } from "./gladiador";
import { Tirador } from "./tirador";


//CREAR PERSONAJES.

const mago = new Mago("Lord Voldemort", 100);
const luchador = new Luchador("Dark Knight", 100);
const arquero = new Arquero("Flechita",100);
const hechicero = new Hechicero("Dombuldor", 200, "Bola de Fuego");
const gladiador = new Gladiador("Espartano", 200, "Giro de Espada");
const tirador = new Tirador("OneShooter", 200, "Triple Flechas");

const personajes = new Personajes("Equipo A", mago, luchador, arquero, hechicero, gladiador, tirador);

const magoB = new Mago("Saruman", 120);
const luchadorB = new Luchador("Berserker", 110);
const arqueroB = new Arquero("HawkEye", 105);
const hechiceroB = new Hechicero("Merlín", 180, "Rayo Fulminante");
const gladiadorB = new Gladiador("Centurión", 190, "Estocada Letal");
const tiradorB = new Tirador("Sharpshooter", 180, "Flecha Perforante");

const equipoB = new Personajes("Equipo B", magoB, luchadorB, arqueroB, hechiceroB, gladiadorB, tiradorB);

console.log(arquero);
console.log(personajes.atacarArquero());
console.log(luchador.getNombre(), personajes.defenderLuchador());
console.log(personajes.evolucionarMago(mago,hechicero));
console.log(hechicero);
console.log(personajes.enfrentarEquipos(personajes, equipoB));




