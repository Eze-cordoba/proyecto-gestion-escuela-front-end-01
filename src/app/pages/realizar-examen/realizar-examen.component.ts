import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Examen } from 'src/app/models/Examen';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-realizar-examen',
  templateUrl: './realizar-examen.component.html',
  styleUrls: ['./realizar-examen.component.css']
})
export class RealizarExamenComponent   implements OnInit{
 
  tituloExamen: string|undefined;
  examen : Examen = new  Examen();
  idMateria: number=0;
  idAlumno:number =0;


  ngOnInit(): void {
   
    this.route.params.subscribe(params => {
      const idMateriaa = params['idMateria'];
      this.idMateria = idMateriaa;
this.idAlumno = params['idAlumno'];
      // 'id' debe coincidir con el nombre del parámetro en la ruta
      console.log(idMateriaa); // Aquí puedes hacer lo que quieras con el ID
          
      this.userService.mostrarExamen(idMateriaa).subscribe({
        next: (data:any) => {
          
           console.log(data);
          this.examen = data;
          console.log(this.examen);


        }
         
      });

    });



  }


  constructor(private route: ActivatedRoute,private userService:UserService,private router: Router) { }


  
  enviarExamen(){


    this.userService.corregirExamen(this.examen, this.idMateria ,this.idAlumno ).subscribe({
      next: (data:any) => {
        
      
      console.log(data);
  
    
        this.router.navigate(['alumno-perfil']);
    
      Swal.fire({
        icon: 'success',
        title: 'examen realizdo',
        text: `Examen realizado   con exito`
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
