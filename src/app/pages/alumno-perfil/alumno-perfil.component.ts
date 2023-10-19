import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { retry } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumno-perfil',
  templateUrl: './alumno-perfil.component.html',
  styleUrls: ['./alumno-perfil.component.css']
})
export class AlumnoPerfilComponent implements OnInit {

  idAlumno: number;

 alumno:Usuario = new Usuario();






  constructor(private route: ActivatedRoute,private userService:UserService,private router: Router) { 

      this.idAlumno =0 ;
  
  }

  ngOnInit(): void {
  
    const token = localStorage.getItem('token');
    this.idAlumno = Number(localStorage.getItem("id_alumno") );

  this.userService.verUsuario(this.idAlumno).subscribe({
      next: (data:Usuario) => {
         
        this.alumno = data;
        console.log("DATAAAAAAAAAAAAAA")
       console.log(this.alumno);

      }

    });


  
     /* this.userService.mostrarNotasYUsuario(this.idAlumno).subscribe(
        ([notas, usuario]) => {
          // Aquí puedes manejar los datos obtenidos como desees
          console.log('Notas:', notas);
          console.log('Usuario:', usuario);
          // También puedes asignarlos a las propiedades de tu clase AlumnoPerfil si es necesario
        
          this.alumno = usuario;
        },
        error => {
          console.error('Error al obtener datos del perfil del alumno:', error);
        }
      );*/
       

  }

  
  tieneNota(materiaName: string): boolean {
    return !!this.alumno.notas[materiaName];
  }



  inscribirse(){
    
    this.router.navigate(['inscripcion']) 
  


  }

  actualizarDatos(){
    this.router.navigate(['editarAlumno']) 
  }


  cerrarSesion(){


    this.userService.cerrarSesion().subscribe({
      next: (data: any) => {
        
   
     
          this.router.navigate(['']);     
      
    
  
  
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
