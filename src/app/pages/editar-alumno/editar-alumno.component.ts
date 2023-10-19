import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent  implements OnInit{

  public alumno:Usuario ;
  public idAlumno:number | undefined;
  public token:string | undefined;
  rol: string | null ="";


constructor (private userService:UserService,private router: Router){


         this.alumno= new Usuario();

}
ngOnInit(): void {
  
 
    this.rol =  localStorage.getItem("rol");



  const token = localStorage.getItem('token');
  this.idAlumno = Number(localStorage.getItem("id_alumno") );

  this.userService.verUsuario(this.idAlumno).subscribe({
    next: (data:Usuario) => {
      
    
      this.alumno = data;
     
     
    }
   


  });


}

onSubmit(){

  this.userService.editarAlumno(this.alumno).subscribe({
    next: (data: any) => {
      
      const token = data.access_token;
    
      localStorage.setItem('token',token);
      localStorage.setItem('id_alumno',data.id_alumno);
      console.log(localStorage.getItem("id_alumno")); 

      console.log(data.rol_usuario)

      if (!this.alumno.firstname || !this.alumno.lastname || !this.alumno.email || !this.alumno.password) {
        // Los campos están vacíos o son nulos, muestra la alerta
        this.mostrarAlertaCamposVacios();
        return;
      } else {
        // Los campos tienen valores, puedes continuar con la lógica de envío del formulario
      }

      if(data.rol_usuario == "profesor"){
        this.router.navigate(['profesor-perfil'])     
      }else{
        this.router.navigate(['alumno-perfil']) 
      }   
  


      Swal.fire({
        icon: 'success',
        title: 'usuario editado',
        text: `Nombre: ${this.alumno?.firstname}  ${this.alumno?.lastname}`
      })

    },
    error: (error: any) => {
      console.log(error);
    
      Swal.fire({
        icon: 'error',
        title: 'error',
        text: `Nombre: ${this.alumno?.firstname}  ${this.alumno?.lastname} no se pudo Editar`
      })


    }
  });


}

mostrarAlertaCamposVacios() {
  // Muestra una alerta con el mensaje de campos vacíos (puedes personalizar el mensaje)
  alert('Todos los campos son obligatorios. Por favor, complete todos los campos.');
  // O muestra una alerta modal usando NgbModal
  // this.modalService.open(MiAlertaCamposVaciosComponent); // Reemplaza MiAlertaCamposVaciosComponent con el componente de la alerta modal
}


irAlumnoPerfil() {
  this.router.navigate(['alumno-perfil']);
}

irProfesorPerfil() {
  this.router.navigate(['profesor-perfil']);
}



}
