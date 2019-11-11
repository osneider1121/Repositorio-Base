import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaListComponent } from './Persona/persona-list/persona-list.component';
import { PersonaAddComponent } from './Persona/persona-add/persona-add.component';
import { PersonaEditComponent } from './Persona/persona-edit/persona-edit.component';
import { ParametrosListComponent } from './Parametros/parametros-list/parametros-list.component';
import { ParametrosAddComponent } from './Parametros/parametros-add/parametros-add.component';
import { ParametrosEditComponent } from './Parametros/parametros-edit/parametros-edit.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'ListPersona',component:PersonaListComponent},
  {path:'NuevaPersona',component:PersonaAddComponent},
  {path:'EditarPersona',component:PersonaEditComponent},
  {path:'ListParametros',component:ParametrosListComponent},
  {path:'NuevoParametro',component:ParametrosAddComponent},
  {path:'EditarParametro',component:ParametrosEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
