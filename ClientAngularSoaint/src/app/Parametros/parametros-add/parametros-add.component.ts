import { Component, OnInit } from '@angular/core';
import { Parametro } from '../../Model/Parametros';
import { ParametrosServiceComponent } from '../../Service/parametros-service/parametros-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametros-add',
  templateUrl: './parametros-add.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/scss/bootstrap.scss']
})
export class ParametrosAddComponent implements OnInit {

  parametro:Parametro=new Parametro();
  constructor(private service:ParametrosServiceComponent, private router:Router) { }


  ngOnInit() {
  }
  Guardar(parametro:Parametro){
    this.service.createParametro(parametro)
    .subscribe(data=>{
      alert("se agrego exitosamente");
      this.router.navigate(["ListParametros"]);
    })
  }


}
