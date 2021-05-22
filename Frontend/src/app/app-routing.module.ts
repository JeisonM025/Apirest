import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';

const routes: Routes = [
  {path:'', redirectTo: '/inicio', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'add', component:AgregarComponent},
  {path: 'edit',component:ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
