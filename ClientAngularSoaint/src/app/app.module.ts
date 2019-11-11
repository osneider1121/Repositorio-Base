import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PersonaServiceComponent } from './Service/persona-service/persona-service.component';
import { ParametrosServiceComponent } from './Service/parametros-service/parametros-service.component';
import { LoginComponent } from './Login/login/login.component';
import { SoaintComponent } from './Soaint/soaint/soaint.component';
import { PersonaListComponent } from './Persona/persona-list/persona-list.component';
import { PersonaEditComponent } from './Persona/persona-edit/persona-edit.component';
import { PersonaAddComponent } from './Persona/persona-add/persona-add.component';
import { ParametrosAddComponent } from './Parametros/parametros-add/parametros-add.component';
import { ParametrosListComponent } from './Parametros/parametros-list/parametros-list.component';
import { ParametrosEditComponent } from './Parametros/parametros-edit/parametros-edit.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,

    PersonaServiceComponent,
    ParametrosServiceComponent,
    LoginComponent,
    SoaintComponent,
    PersonaListComponent,
    PersonaEditComponent,
    PersonaAddComponent,
    ParametrosAddComponent,
    ParametrosListComponent,
    ParametrosEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PersonaServiceComponent,ParametrosServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
