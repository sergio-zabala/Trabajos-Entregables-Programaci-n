import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";

export class RegistroAutomotor{
//Propiedades
private nombre:string;
private autos:Auto[];
private motos:Moto[];
private camiones:Camion[];

//constructor

constructor(nombre:string){
    this.nombre=nombre;
    this.autos=[];
    this.motos=[];
    this.camiones=[];
}
//metodos

//AGREGAR VEHICULO
public agregarAutos(parAuto:Auto) : void{
    this.autos.push(parAuto);
}

public agregarMotos(parMoto:Moto) : void{
    this.motos.push(parMoto);
}

public agregarCamiones(parCamion:Camion): void{
    this.camiones.push(parCamion);
}

// DAR DE BAJA
public bajaAuto(empresa:string):void{
this.autos = this.autos.filter(Auto => Auto.getEmpresa() !== empresa);
}

public bajaMoto(empresa:string):void{
    this.motos = this.motos.filter(Moto => Moto.getEmpresa() !== empresa);
}

public bajaCamion(empresa:string):void{
    this.camiones = this.camiones.filter(Camion => Camion.getEmpresa() !== empresa);
}


//GET
public getNombre():string{
    return this.nombre;
}

public getAuto():Auto[]{
    return this.autos;
}

public getMoto():Moto[]{
    return this.motos;
}

public getCamion():Camion[]{
    return this.camiones;
}

//SET

public setNombre(parNombre:string):void{
    this.nombre=parNombre;
}

}