import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Parametro } from 'src/app/Model/Parametros';

@Component({
  selector: 'app-parametros-service',
  templateUrl: './parametros-service.component.html',
  styleUrls: ['./parametros-service.component.css']
})
export class ParametrosServiceComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  
  Url='http://localhost:8080/Parametros';
  getParametros(){
    return this.http.get<Parametro[]>(this.Url);
  }
  createParametro(parametro:Parametro){
    return this.http.post<Parametro>(this.Url,parametro);
  }
  getParametroId(id:number){
    return this.http.get<Parametro>(this.Url+"/"+id);
  }
  updateParametro(parametro:Parametro){
    return this.http.put<Parametro>(this.Url,parametro);
  }
  deleteParametro(id:number){
    return this.http.delete<Parametro>(this.Url+"/"+id);
  }
}
