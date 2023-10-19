import { Respuesta } from "./Respuesta";

export class Pregunta {


    id: number | undefined;
    enunciado: string | undefined;
    respuestas: Respuesta[];

    constructor(){      
        this.respuestas = [
            new Respuesta(),
            new Respuesta(),
            
            // ... otras instancias de Respuesta
          ];

    }

}