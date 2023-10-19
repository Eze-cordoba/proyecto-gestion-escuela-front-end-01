import { Pregunta } from "./Pregunta";

export class Respuesta {

    id: number | undefined;
    contenido: string | undefined;
    pregunta : Pregunta | undefined;
    esCorrecta : boolean = false;  

    

}
