import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";
import { RegistroAutomotor } from "./registroAutomotor";

//crear auto
const auto1 = new Auto("Ford","Fiesta");
const auto2 = new Auto("Chevrolet","Corsa");
//crear moto
const moto1 = new Moto("Yamaha","ybr",125);
const moto2 = new Moto("Honda","cg",150);
//crear camion
const camion1 = new Camion("Ford","Cargo");
const camion2 = new Camion("Scania","Accueli");
//crear registroAutomotor
const registro = new RegistroAutomotor("registro Automotor Olavarria");

//Agregar vehiculos al registro.
registro.agregarAutos(auto1);
registro.agregarAutos(auto2);
registro.agregarMotos(moto1);
registro.agregarMotos(moto2);
registro.agregarCamiones(camion1);
registro.agregarCamiones(camion2);

//mostramos todo
console.log(registro);

//modificar vehiculo
auto1.setEmpresa("VolksWagen");
auto1.setModelo("Scirocco");
//dar de baja
registro.bajaCamion("Ford");
registro.bajaMoto("Yamaha");
registro.bajaAuto("Chevrolet");
//mostramos todo
console.log(registro);



