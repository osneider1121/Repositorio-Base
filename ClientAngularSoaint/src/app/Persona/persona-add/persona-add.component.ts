import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Model/Persona';
import { PersonaServiceComponent } from '../../Service/persona-service/persona-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-add',
  templateUrl: './persona-add.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/scss/bootstrap.scss']
})
export class PersonaAddComponent implements OnInit {

  persona:Persona=new Persona();
  constructor(private service:PersonaServiceComponent, private router:Router) { }


  ngOnInit() {
  }
  Guardar(persona:Persona){
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("se agergo exitosamente");
      this.router.navigate(["ListPersona"]);
    })
  }

}
