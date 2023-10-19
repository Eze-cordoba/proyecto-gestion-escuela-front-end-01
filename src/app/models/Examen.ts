import { Materia } from "./Materia";
import { Pregunta } from "./Pregunta";

export class Examen{

     id: number | undefined;
     materia: Materia| undefined;
     preguntas: Pregunta[];


     constructor(){      
        this.preguntas = [
            new Pregunta(),
            new Pregunta(),
            
            // ... otras instancias de Respuesta
          ];

    }

}