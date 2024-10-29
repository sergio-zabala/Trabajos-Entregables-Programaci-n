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


export class Luchador{
    //PROPIEDADES.

    protected nombre: string;
    protected nivel: number;
    protected puntosDeVida: number;
    protected evolucion: number;
    private poder: string;

    //CONSTRUCTOR.

constructor(nickName:string, puntosDeVida:number){
    this.nombre=nickName;
    this.nivel = 1;
    this.puntosDeVida=puntosDeVida;
    this.evolucion = 1;

}
    //GETTERS.

    public getNombre():string{
        return this.nombre;
    }

    public getNivel():number{
        return this.nivel;
    }

    public getPuntosDeVida():number{
        return this.puntosDeVida;
    }

    public getEvolucion():number{
        return this.evolucion;
    }

    public getPoder():string{
        return this.poder;
    }

    //SETTERS

    public setNombre(parNombre:string):void{
        this.nombre=parNombre;
    }

    public setNivel(parNivel:number):void{
        this.nivel=parNivel;
    }

    public setPuntosDeVida(parPuntosDeVida:number):void{
        this.puntosDeVida=parPuntosDeVida;
    }

    public setPoder(parPoder:string):void{
        this.poder=parPoder;
    }

}