import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscripcion-materia',
  templateUrl: './inscripcion-materia.component.html',
  styleUrls: ['./inscripcion-materia.component.css']
})
export class InscripcionMateriaComponent implements OnInit {



  idAlumno: number | undefined;

  alumno: Usuario= new Usuario();
  materiaInscripta: string;
  rol: string | null | undefined;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
    this.materiaInscripta = "";
  }

  ngOnInit(): void {
    this.rol =  localStorage.getItem("rol");
 
  }


  inscribirse() {

    console.log(this.materiaInscripta);
    this.userService.inscripcionMateria(this.materiaInscripta).subscribe({

      next: (data: any) => {

       const rol =  localStorage.getItem("rol")
 
    

        if(rol == "profesor"){
          this.router.navigate(['profesor-perfil'])     
      }else{
          this.router.navigate(['alumno-perfil']) 
     
        }   

        Swal.fire({
          icon: 'success',
          title: 'inscripcion exitosa',
          text: `el alumno se inscribio a la materia correctamente`
        })

      },
      error: (error: any) => {
        console.log("antes de error");
        console.log(error);

        Swal.fire({
          icon: 'error',
          title: 'error',
          text:`${error.error.error}`
         
        })


      }
    });
  
  
  }

  irAlumnoPerfil() {
    this.router.navigate(['alumno-perfil']);
  }

  irProfesorPerfil() {
    this.router.navigate(['profesor-perfil']);
  }



} 
