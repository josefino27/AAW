import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  	{path:'home', component: HomeComponent},
  	{path:'nosotros', component: NosotrosComponent},
  	{path:'servicios', component: ServiciosComponent},
  	{path:'contacto', component: ContactoComponent},
  	{path:'producto', component: ProductoComponent},
  	{path:'clientes', component: ClientesComponent},
    {path:'**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
