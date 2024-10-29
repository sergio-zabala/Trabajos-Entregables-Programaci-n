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
import { Hechicero } from "./hechicero";
import { Gladiador } from "./gladiador";
import { Tirador } from "./tirador";

export class Personajes{
   //PROPIEDADES
    private nombre:string;
    private mago:Mago;
    private luchador:Luchador;
    private arquero:Arquero;
    private hechicero:Hechicero;
    private gladiador:Gladiador;
    private tirador:Tirador;

    //CONSTRUCTOR.

    constructor(nombre: string, mago: Mago, luchador: Luchador, arquero: Arquero, hechicero: Hechicero, gladiador: Gladiador, tirador: Tirador) {
        this.nombre = nombre;
        this.mago = mago;
        this.luchador = luchador;
        this.arquero = arquero;
        this.hechicero = hechicero;
        this.gladiador = gladiador;
        this.tirador = tirador;
    }

    //GETTERS.

    public getNombre():string{
        return this.nombre;
    }

    public getMago():Mago{
        return this.mago;
    }

    public getLuchador():Luchador{
        return this.luchador;
    }

    public getArquero():Arquero{
        return this.arquero;
    }
    
    public getHechicero() : Hechicero {
        return this.hechicero;
    }

    public getGladiador() : Gladiador {
        return this.gladiador;
    }
    
    public getTirador() : Tirador {
        return this.tirador;
    }
    
    
    

        //METODOS.
//atacar
    public atacarMago():string{
        return `${this.mago.getNombre()} realiza un hechizo.`;
    }
        
    public atacarLuchador():string{
        return `${this.luchador.getNombre()} realiza un ataque.`;
    }
        
    public atacarArquero():string{
        return `${this.arquero.getNombre()} realiza un ataque.`;
    }

//defender.
public defenderMago(): string {
    return `${this.mago.getNombre()} realiza una defensa.`;
}

public defenderLuchador(): string {
    return `${this.luchador.getNombre()} realiza una defensa.`;
}

public defenderArquero(): string {
    return `${this.arquero.getNombre()} realiza una defensa.`;
}

//Evolucionar
public evolucionarMago(personaje1: Mago, personaje2: Hechicero): string {
    let nombreOriginal = personaje1.getNombre();
    personaje1.setNombre(personaje2.getNombre());
    personaje1.setPoder(personaje2.getPoder());
    return `Evolución exitosa. Ahora ${nombreOriginal} tiene las propiedades de ${personaje2.getNombre()}.`;
}

public evolucionarLuchador(personaje1: Luchador, personaje2: Gladiador): string {
    let nombreOriginal = personaje1.getNombre();
    personaje1.setNombre(personaje2.getNombre());
    personaje1.setPoder(personaje2.getPoder());
    return `Evolución exitosa. Ahora ${nombreOriginal} tiene las propiedades de ${personaje2.getNombre()}.`;
}

public evolucionarArquero(personaje1: Arquero, personaje2: Tirador): string {
    let nombreOriginal = personaje1.getNombre();
    personaje1.setNombre(personaje2.getNombre());
    personaje1.setPoder(personaje2.getPoder());
    return `Evolución exitosa. Ahora ${nombreOriginal} tiene las propiedades de ${personaje2.getNombre()}.`;
}

public enfrentarEquipos(equipoA: Personajes, equipoB: Personajes) {
    let personajesA = [
        equipoA.getMago(), 
        equipoA.getLuchador(), 
        equipoA.getArquero(), 
        equipoA.getHechicero(), 
        equipoA.getGladiador(), 
        equipoA.getTirador()
    ];
    let personajesB = [
        equipoB.getMago(), 
        equipoB.getLuchador(), 
        equipoB.getArquero(), 
        equipoB.getHechicero(), 
        equipoB.getGladiador(), 
        equipoB.getTirador()
    ];

    console.log("Comienza el enfrentamiento entre Equipo A y Equipo B");

    for (let i = 0; i < personajesA.length; i++) {
        const atacanteA = personajesA[i];
        const defensorB = personajesB[i];
            
        // Equipo A ataca y Equipo B se defiende
        console.log(`${atacanteA.getNombre()} del Equipo A ataca. ${defensorB.getNombre()} del Equipo B se defiende.`);
        console.log(equipoA.atacarArquero()); 
        
        // Equipo B contraataca
        console.log(`${defensorB.getNombre()} del Equipo B contraataca. ${atacanteA.getNombre()} del Equipo A se defiende.`);
        console.log(equipoB.defenderArquero());
    }
    console.log("El enfrentamiento ha terminado");
    
}
}
