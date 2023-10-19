import { Examen } from "./Examen";
import { Usuario } from "./Usuario";

export class Materia {

    id: number | undefined;
    name: string ="";
    alumnos:Usuario[]| undefined;
    examen : Examen | undefined;

}