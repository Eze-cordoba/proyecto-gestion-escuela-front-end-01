import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pregunta } from 'src/app/models/Pregunta';
import { Respuesta } from 'src/app/models/Respuesta';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-examen',
  templateUrl: './crear-examen.component.html',
  styleUrls: ['./crear-examen.component.css']
})
export class CrearExamenComponent {



  titulo: string = ''; // Título del examen
  preguntas: Pregunta[] = []; // Lista de preguntas
   id : number=0;
   
  // VOY A PONER RESPUESTAS VARIABLES SOLA   Y DESPUES LAS METO EN PREGUNTA 
  
  constructor(private route: ActivatedRoute,private userService:UserService,private router: Router) { }

  ngOnInit(): void {
    // Puedes inicializar con una pregunta predeterminada si lo deseas
    this.agregarPregunta();

    this.route.params.subscribe(params => {

      const id = params['id'];
     this.id = id;

    });


  }

  agregarPregunta(): void {

    const nuevaPregunta = new Pregunta();

    this.preguntas.push(nuevaPregunta);
  }

  eliminarPregunta(index: number): void {
    this.preguntas.splice(index, 1);
  }

  crearExamen(): void {


    if (this.titulo.trim() === '') {
      alert('El campo Título es obligatorio.');
      return;
    }

    for (const pregunta of this.preguntas) {
      // Verifica que pregunta no sea nula ni undefined
      if (!pregunta || !pregunta.enunciado || pregunta.enunciado.trim() === '') {
        alert('Todos los campos de Enunciado son obligatorios.');
        return;
      }
      
    //  if (pregunta.respuestas.length === 0) {
      //  alert('Cada pregunta debe tener al menos una respuesta.');
      //  return;
     // }   ya inicalizce con 2 respuestas cada pregunta
      
      for (const respuesta of pregunta.respuestas) {
        // Verifica que respuesta no sea nula ni undefined
        if (!respuesta || !respuesta.contenido || respuesta.contenido.trim() === '') {
          alert('Todos los campos de Respuestas son obligatorios.');
          return;
        }
      }
    }

    // Si todos los campos requeridos están completos, aquí puedes enviar los datos al servidor
  
    // Aquí puedes enviar los datos al servidor para crear el examen
    console.log('Examen creado:', this.titulo, this.preguntas);

  

   this.userService.crearExamen(this.id,this.preguntas).subscribe({
    next: (data:any) => {
      
    
    console.log(data);


  
      this.router.navigate(['profesor-perfil']);

    

    Swal.fire({
      icon: 'success',
      title: 'examen creado',
      text: `Examen Creado  con exito}`
    })

  },
  error: (error: any) => {
    console.log(error);
  
    Swal.fire({
      icon: 'error',
      title: 'error',
      text:`${error.error.error}`
    })




     
    }
    
   


  });

  }

  irProfesorPerfil() {
    this.router.navigate(['profesor-perfil']);
  }
  
  

}





