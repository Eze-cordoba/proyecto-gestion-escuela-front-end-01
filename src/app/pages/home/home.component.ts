import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  public alumno:Usuario ;


  constructor (private userService:UserService,private router: Router){

  
    this.alumno= new Usuario();

}


  onSubmit(){

    this.userService.iniciarUsuario(this.alumno).subscribe({
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
          title: 'login success',
          text: `el alumno inicio session correctamente`
        })
  
      },
      error: (error: any) => {
        console.log(error);
      
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: `el alumno no inicio session correctamente`
        })
  
  
      }
    });
  




  }




}
