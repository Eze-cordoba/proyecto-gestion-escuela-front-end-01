import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlumnoPerfilComponent } from './pages/alumno-perfil/alumno-perfil.component';
import { InscripcionMateriaComponent } from './pages/inscripcion-materia/inscripcion-materia.component';
import { EditarAlumnoComponent } from './pages/editar-alumno/editar-alumno.component';
import { ProfesorPerfilComponent } from './pages/profesor-perfil/profesor-perfil.component';
import { DetallesMateriaComponent } from './pages/detalles-materia/detalles-materia.component';
import { CrearExamenComponent } from './pages/crear-examen/crear-examen.component';
import { RealizarExamenComponent } from './pages/realizar-examen/realizar-examen.component';
import { MostrarNotasComponent } from './pages/mostrar-notas/mostrar-notas.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    AlumnoPerfilComponent,
    InscripcionMateriaComponent,
    EditarAlumnoComponent,
    ProfesorPerfilComponent,
    DetallesMateriaComponent,
    CrearExamenComponent,
    RealizarExamenComponent,
    MostrarNotasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
