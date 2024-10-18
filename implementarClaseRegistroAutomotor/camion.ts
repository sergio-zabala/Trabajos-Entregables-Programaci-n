export class Camion{
//Propiedades
private empresa:string;
private modelo:string;

//Constructor
constructor(empresa:string,modelo:string){
this.empresa=empresa;
this.modelo=modelo;
}
//metodos

//GET
public getEmpresa():string{
return this.empresa
}

public getModelo():string{
return this.modelo
}

//SET
public setEmpresa(parEmpresa:string):void{
this.empresa=parEmpresa;
}

public setModelo(parModelo:string):void{
this.modelo=parModelo;
}
}