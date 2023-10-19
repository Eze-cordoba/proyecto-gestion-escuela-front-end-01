import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materia } from 'src/app/models/Materia';
import { Usuario } from 'src/app/models/Usuario';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profesor-perfil',
  templateUrl: './profesor-perfil.component.html',
  styleUrls: ['./profesor-perfil.component.css']
})
export class ProfesorPerfilComponent  implements OnInit{

  idAlumno: number;
  profesor:Usuario = new Usuario();
  materias: string[] = [];
  materiaSeleccionada : string[] = [];


  constructor(private route: ActivatedRoute,private userService:UserService,private router: Router) { 

    this.idAlumno =0 ;

  }



  ngOnInit(): void {
  
    const token = localStorage.getItem('token');
    this.idAlumno = Number(localStorage.getItem("id_alumno") );

    this.userService.verUsuario(this.idAlumno).subscribe({
      next: (data:Usuario) => {
        
      
        this.profesor = data;

        if (this.profesor.materias[0] != null){
          console.log("EXAMEN DEL PROFESOR " +  this.profesor.materias[0].examen?.id );
        }
     
      }
     


    });

  console.log(this.profesor.materias);

  }

  actualizarDatos(){
    this.router.navigate(['editarAlumno']) 
  }

  verDetalleMateria(){

  }

  inscribirse(){
    
    this.router.navigate(['inscripcion']) 
  
  }



  cerrarSesion(){


    this.userService.cerrarSesion().subscribe({
      next: (data: any) => {
        
   
     
          this.router.navigate(['']);     
      
    
        
  
        Swal.fire({
          icon: 'success',
          title: 'session cerrada con exito',
          text: `Nombre: ${this.profesor?.firstname}  ${this.profesor?.lastname}`
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



  eliminarCuenta (){


    
    this.userService.eliminarCuenta(this.idAlumno).subscribe({
      next: (data: any) => {
        
   
          this.router.navigate(['']);     
    
  
      }
    });



  }


}

