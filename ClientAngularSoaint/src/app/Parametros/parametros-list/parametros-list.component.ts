import { Component, OnInit } from '@angular/core';
import { Parametro } from '../../Model/Parametros';
import { ParametrosServiceComponent } from '../../Service/parametros-service/parametros-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametros-list',
  templateUrl: './parametros-list.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/scss/bootstrap.scss']
})
export class ParametrosListComponent implements OnInit {

  parametros:Parametro[];
  constructor(private service:ParametrosServiceComponent, private router:Router) { }

  ngOnInit() {
    this.service.getParametros()
    .subscribe(
      data=>{
        this.parametros=data;
      })
   }
   NuevoParametro(){
     this.router.navigate(["NuevoParametro"]);
   }
   Editar(para:Parametro){
    localStorage.setItem("id",para.id.toString());
    this.router.navigate(["EditarParametro"]);
   }
   Eliminar(para:Parametro){
    this.service.deleteParametro(para.id)
    .subscribe(
      data=>{
        alert("se elimino correctamente");
        this.router.navigate(["ListParametros"]);
      })
    
   }

}
