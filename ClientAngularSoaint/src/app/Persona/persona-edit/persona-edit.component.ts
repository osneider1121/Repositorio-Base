import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Model/Persona';
import { PersonaServiceComponent } from 'src/app/Service/persona-service/persona-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/scss/bootstrap.scss']
})
export class PersonaEditComponent implements OnInit {

  persona:Persona=new Persona();
  constructor(private service:PersonaServiceComponent, private router:Router) { }

  ngOnInit() {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })
  }
  Actualizar(persona:Persona){
    this.service.updatePersona(persona)
    .subscribe(
      data=>{
        alert("se actualizo");
        this.router.navigate(["ListPersona"]);
      }
    )
  }
}
