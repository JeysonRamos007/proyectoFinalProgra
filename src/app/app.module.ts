import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { HomeComponent } from './componentes/home/home.component';
import { ControlmedicosComponent } from './componentes/controlmedicos/controlmedicos.component';
import { ControlespecialidadesComponent } from './componentes/controlespecialidades/controlespecialidades.component';
import { ControlpacientesComponent } from './componentes/controlpacientes/controlpacientes.component';
import { ControlconsultasComponent } from './componentes/controlconsultas/controlconsultas.component';
import { ControllaboratoriosComponent } from './componentes/controllaboratorios/controllaboratorios.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    HomeComponent,
    ControlmedicosComponent,
    ControlespecialidadesComponent,
    ControlpacientesComponent,
    ControlconsultasComponent,
    ControllaboratoriosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
