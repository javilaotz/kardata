import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ClientedetalleComponent } from './components/clientedetalle/clientedetalle.component';
import { PedidodetalleComponent } from './components/pedidodetalle/pedidodetalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientesComponent,
    PedidosComponent,
    ClientedetalleComponent,
    PedidodetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
