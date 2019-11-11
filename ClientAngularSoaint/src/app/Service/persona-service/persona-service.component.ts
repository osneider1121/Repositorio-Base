import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Model/Persona';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-persona-service',
  templateUrl: './persona-service.component.html',
  styleUrls: ['./persona-service.component.css']
})
export class PersonaServiceComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  
  Url='http://localhost:8080/Persona';
  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url,persona);
  }
  deletePersona(id:number){
    return this.http.delete<Persona>(this.Url+"/"+id);
  }

}
