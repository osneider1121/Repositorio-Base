import { Component, OnInit } from '@angular/core';
import { Parametro } from '../../Model/Parametros';
import { ParametrosServiceComponent } from '../../Service/parametros-service/parametros-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametros-edit',
  templateUrl: './parametros-edit.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/scss/bootstrap.scss']
})
export class ParametrosEditComponent implements OnInit {

  parametro:Parametro=new Parametro();
  constructor(private service:ParametrosServiceComponent, private router:Router) { }

  ngOnInit() {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getParametroId(+id)
    .subscribe(data=>{
      this.parametro=data;
    })
  }
  Actualizar(parametro:Parametro){
    this.service.updateParametro(parametro)
    .subscribe(
      data=>{
        alert("se actualizo");
        this.router.navigate(["ListParametros"]);
      }
    )
  }

}
