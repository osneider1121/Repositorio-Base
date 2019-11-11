import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Model/Persona';
import { PersonaServiceComponent } from '../../Service/persona-service/persona-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/scss/bootstrap.scss']
})
export class PersonaListComponent implements OnInit {

  personas:Persona[];
  constructor(private service:PersonaServiceComponent, private router:Router) { }

  ngOnInit() {
    this.service.getPersonas()
    .subscribe(
      data=>{
        this.personas=data;
      })
   }
   NuevaPersona(){
     this.router.navigate(["NuevaPersona"]);
   }
   Editar(persona:Persona){
    localStorage.setItem("id",persona.id.toString());
    this.router.navigate(["EditarPersona"]);
   }
   Eliminar(persona:Persona){
    this.service.deletePersona(persona.id)
    .subscribe(
      data=>{
        alert("se elimino correctamente");
        this.router.navigate(["ListPersona"]);
      })
    
   }
   

}
