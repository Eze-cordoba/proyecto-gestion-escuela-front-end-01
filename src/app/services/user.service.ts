import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import baserUrl from './helper';
import { Observable, forkJoin } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { Pregunta } from '../models/Pregunta';
import { Examen } from '../models/Examen';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private idAlumno: number | undefined;

  constructor(private httpClient :HttpClient) { 

  }

  public añadirUsuario(user:any):Observable<any>{
    return this.httpClient.post<any>(`${baserUrl}/utn/alumnos/crearAlumno`,user)
  }


  public iniciarUsuario(user:any){
    return this.httpClient.post(`${baserUrl}/api/v1/auth/authenticate`,user)
  }

  public verUsuario(id:number): Observable<Usuario>{

    const token = localStorage.getItem('token');
  this.idAlumno =  Number (localStorage.getItem("id_alumno"))


      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });


    return this.httpClient.get<Usuario>(`${baserUrl}/utn/alumnos/${this.idAlumno}`,{ headers });
  }

public inscripcionMateria( materia:string):Observable<any>{

    const url = `${baserUrl}/utn/agregarMateria/${localStorage.getItem('id_alumno')}`;
    const body = { materia };
    const token = localStorage.getItem('token');
  
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    };

  
    return this.httpClient.put<any>(url,body, { headers });

  }
  

  guardarIdAlumno(id: number) {
    this.idAlumno = id;
  }

  obtenerIdAlumno(): number | undefined {
    return this.idAlumno;
  }

public editarAlumno(alumno:any):Observable<any>{

  const url = `${baserUrl}/utn/editarAlumno/${localStorage.getItem('id_alumno')}`;
  const body = alumno;
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };
 
  console.log(body);

  return this.httpClient.put<any>(url,body, { headers });


}


public MateriaDetalles(idMateria:number):Observable<any>{

  const url = `${baserUrl}/utn/verMateria/${idMateria}`;

  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  return this.httpClient.get<any>(url,{ headers });

}


public crearExamen(idMateria:number,preguntas:Pregunta[]):Observable<any>{

  const url = `${baserUrl}/utn/crearExamen/${idMateria}`;
  const body = preguntas;
  const token = localStorage.getItem('token');

  
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  return this.httpClient.post<any>(url,body,{headers});

}

public mostrarExamen (idMateria:number):Observable<any>{

  const url = `${baserUrl}/utn/mostrarExamen/${idMateria}`;
 
  const token = localStorage.getItem('token');

  
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  return this.httpClient.get<any>(url,{headers});

}

public corregirExamen (examen:Examen,  idMateria :number ,  idAlumno : number ){

  const url = `${baserUrl}/utn/corregirExamen/${idMateria}/${idAlumno}`;
  const body = examen;
  const token = localStorage.getItem('token');

  
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  return this.httpClient.post<any>(url,body,{headers});


}


public mostrarNotas (idAlumno:number){

  const url = `${baserUrl}/utn/mostrarNotas/${idAlumno}`;

  const token = localStorage.getItem('token');

  
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  return this.httpClient.get<any>(url,{headers});

}

mostrarNotasYUsuario(idAlumno: number): Observable<any> {
  const notasUrl = `${baserUrl}/utn/mostrarNotas/${idAlumno}`;
  const usuarioUrl = `${baserUrl}/utn/alumnos/${idAlumno}`;
  const token = localStorage.getItem('token');

  const notasRequest = this.httpClient.get<any>(notasUrl, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });

  const usuarioRequest = this.httpClient.get<Usuario>(usuarioUrl, {
    headers: new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
  });

  return forkJoin([notasRequest, usuarioRequest]);
}




public cerrarSesion (){

  const url = `${baserUrl}/utn/cerrarSesion`;

  const token = localStorage.getItem('token');

  
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  return this.httpClient.get<any>(url,{headers});

}



public eliminarCuenta (idUsuario : number){

  const url = `${baserUrl}/utn/eliminarCuenta/${idUsuario}`;

  const token = localStorage.getItem('token');

  
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  return this.httpClient.delete<any>(url,{headers});

}



}
