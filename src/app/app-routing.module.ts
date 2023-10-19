import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AlumnoPerfilComponent } from './pages/alumno-perfil/alumno-perfil.component';
import { InscripcionMateriaComponent } from './pages/inscripcion-materia/inscripcion-materia.component';
import { EditarAlumnoComponent } from './pages/editar-alumno/editar-alumno.component';
import { ProfesorPerfilComponent } from './pages/profesor-perfil/profesor-perfil.component';
import { DetallesMateriaComponent } from './pages/detalles-materia/detalles-materia.component';
import { CrearExamenComponent } from './pages/crear-examen/crear-examen.component';
import { RealizarExamenComponent } from './pages/realizar-examen/realizar-examen.component';
import { MostrarNotasComponent } from './pages/mostrar-notas/mostrar-notas.component';

const routes: Routes = [
  {path:'',
   component:HomeComponent,
   pathMatch:'full' 
  },
  {path:'signup',
  component:SignupComponent,
  pathMatch:'full'
 },
{path:'profesor-perfil',
component:ProfesorPerfilComponent,
pathMatch:'full'
},
{path:'alumno-perfil',
 component:AlumnoPerfilComponent,
 pathMatch:'full'
},
{path:'inscripcion',
 component:InscripcionMateriaComponent,
 pathMatch:'full'
},
{path:'editarAlumno',
 component:EditarAlumnoComponent,
 pathMatch:'full'
},
{
path: 'detalles-materia/:id',
 component:DetallesMateriaComponent ,
 pathMatch:'full'
},
{path: 'crearExamen/:id',
component:CrearExamenComponent ,
pathMatch:'full'
},
{
  path: 'realizarExamen/:idMateria/:idAlumno',
  component:RealizarExamenComponent ,
  pathMatch:'full'
},
{
  path: 'mostrar-notas/:idAlumno',
  component:MostrarNotasComponent ,
  pathMatch:'full'
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
