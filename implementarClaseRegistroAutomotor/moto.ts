export class Moto{
//Propiedades
private empresa:string;
private modelo:string;
private cilindrada:number;

//Constructor
constructor(empresa:string,modelo:string,cilindrada:number){
this.empresa=empresa;
this.modelo=modelo;
this.cilindrada=cilindrada;
}
//metodos

//GET

public getEmpresa():string{
return this.empresa
}

public getModelo():string{
return this.modelo
}

public getCilindrada():number{
return this.cilindrada
}

//SET

public setEmpresa(parEmpresa:string):void{
this.empresa=parEmpresa;
}

public setModelo(parModelo:string):void{
this.modelo=parModelo;
}

public setCilindrada(parCilindrada:number):void{
this.cilindrada=parCilindrada;
}
}