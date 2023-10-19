import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mostrar-notas',
  templateUrl: './mostrar-notas.component.html',
  styleUrls: ['./mostrar-notas.component.css']
})
export class MostrarNotasComponent   implements OnInit{


  materiasNotas = [
    { materia: 'Matemáticas', nota: 90 },
    { materia: 'Ciencias', nota: 85 },
    { materia: 'Historia', nota: 78 },
    // Agrega más materias y notas según tu necesidad
  ];


  notas: any = {};

  constructor(private route: ActivatedRoute,private userService:UserService,private router: Router) { }
 


 
 
  ngOnInit(): void {
    

    this.route.params.subscribe(params => {
      const id = params['idAlumno']; // 'id' debe coincidir con el nombre del parámetro en la ruta
      console.log(id); // Aquí puedes hacer lo que quieras con el ID
          
      this.userService.mostrarNotas(id).subscribe({
        next: (data:any) => {
          
           console.log(data);
         
         this.notas = data;

        }
       
  
  
      });
  
  
  
  
  
    });

    



  }



 

}
