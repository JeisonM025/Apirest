import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NominaService {
  url='/api';
    constructor(private http: HttpClient) { }

  //get personas
  getPersonas(){
    return this.http.get(this.url);
  }
  //get una persona
  getUnaPersona(id: string){
    return this.http.get(this.url+'/'+id);
  }
  //agregar equipo
  addPersona(persona: Persona){
    return this.http.post(this.url, persona);
  }

  //eliminar
  deletePersona(id: string){
    return this.http.delete(this.url+'/'+id);


  }

  //modificar
  editPersona(id: string, persona:Persona){
    return this.http.put(this.url+'/'+id, persona);
  }

}

export interface Persona{
  IdPersona?:string;
  primerNombre?:string;
    segundoNombre?:string;
    primerApellido?:string;
    segundoApellido?:string;
    fechaNacimiento?:string;
    tipoSangre?:string;
    tic_Doc?:string;
    num_Doc?:string;
    activo?:string;
    EPS_emp?:string;
}    

