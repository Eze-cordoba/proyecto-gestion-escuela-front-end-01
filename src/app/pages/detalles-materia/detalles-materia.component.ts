import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materia } from 'src/app/models/Materia';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-detalles-materia',
  templateUrl: './detalles-materia.component.html',
  styleUrls: ['./detalles-materia.component.css']
})
export class DetallesMateriaComponent  implements OnInit{

   materia:Materia  = new Materia();

  constructor(private route: ActivatedRoute,private userService:UserService,private router: Router) { }

  ngOnInit() {
    // Obtener el ID del parámetro en la URL
    this.route.params.subscribe(params => {
      const id = params['id']; // 'id' debe coincidir con el nombre del parámetro en la ruta
      console.log(id); // Aquí puedes hacer lo que quieras con el ID
          
      this.userService.MateriaDetalles(id).subscribe({
        next: (data:Materia) => {
          
           console.log(data);
          this.materia = data;
          console.log(this.materia.name);

          if (this.materia && this.materia.alumnos && this.materia.alumnos.length > 0) {
            console.log(this.materia.alumnos[0].firstname);
          } else {
            console.log('La propiedad this.materia o this.materia.alumnos es null o el array está vacío.');
          }

        }
       

  
      });





    });


  }


  irProfesorPerfil() {
    this.router.navigate(['profesor-perfil']);
  }

}
