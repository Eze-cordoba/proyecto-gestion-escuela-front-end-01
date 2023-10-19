import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

 
  public alumno:Usuario ;
 
  public token:string | undefined;
  public codigoProfesor:number | undefined; 
  public file : File | null = null;

constructor (private userService:UserService,private router: Router){


          this.alumno= new Usuario();
         this.codigoProfesor=undefined;


}



onSubmit(){

  const formData = new FormData();

  console.log(this.alumno.role);
  console.log(this.codigoProfesor);
  if (this.alumno.role =="Profesor"){

    if (this.codigoProfesor==123){
      this.alumno.role ="ADMIN";
    }else{
      //alert('Código de profesor incorrecto');
      

      Swal.fire({
        icon: 'error',
        title: 'Inicio de sesión fallido',
        text: 'CODIGO DE PROFESOR INCORRECTO',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });


      return;
    }


  }else{
    this.alumno.role ="MANAGER";
  }

  this.userService.añadirUsuario(this.alumno).subscribe({
    next: (data: any) => {
      
      const token = data.access_token;
      
      localStorage.setItem('token',token);
      localStorage.setItem('id_alumno',data.id_alumno);
      localStorage.setItem('rol',data.rol_usuario);
   
      if(data.rol_usuario == "profesor"){
        this.router.navigate(['profesor-perfil'])     
      }else{
        this.router.navigate(['alumno-perfil']) 
      }   
  
      

      Swal.fire({
        icon: 'success',
        title: 'usuario guardado',
        text: `Nombre: ${this.alumno?.firstname}  ${this.alumno?.lastname}`
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


}
