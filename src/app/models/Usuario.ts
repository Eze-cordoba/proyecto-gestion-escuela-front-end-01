import { Materia } from "./Materia";


export class Usuario {

    id: number | undefined;
    firstname: string | undefined;
    lastname: string | undefined;
    email:string| undefined;
    password:string| undefined;
    token:string | undefined;
     materias: Materia[] = [];
     role:string | undefined;
     notas: any = {}; 
      

    constructor(){
      
    }


}