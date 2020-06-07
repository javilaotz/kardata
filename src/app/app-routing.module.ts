import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ClientedetalleComponent } from './components/clientedetalle/clientedetalle.component';


const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientesdetalle', component: ClientedetalleComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'clientes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
