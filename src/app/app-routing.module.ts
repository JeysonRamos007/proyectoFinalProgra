import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ControlconsultasComponent } from './componentes/controlconsultas/controlconsultas.component';
import { ControlespecialidadesComponent } from './componentes/controlespecialidades/controlespecialidades.component';
import { ControllaboratoriosComponent } from './componentes/controllaboratorios/controllaboratorios.component';
import { ControlmedicosComponent } from './componentes/controlmedicos/controlmedicos.component';
import { ControlpacientesComponent } from './componentes/controlpacientes/controlpacientes.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'controlconsultas', component: ControlconsultasComponent},
  {path: 'controlespecialidades', component: ControlespecialidadesComponent},
  {path: 'controllaboratorios', component: ControllaboratoriosComponent},
  {path: 'controlmedicos', component: ControlmedicosComponent},
  {path: 'controlpacientes', component: ControlpacientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
