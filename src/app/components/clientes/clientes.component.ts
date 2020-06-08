import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  clientes: any[] = [];
  cliente: any = {};
  loading:boolean = true;

  constructor(private data: DataService,
              private route: Router) { 
    
    this.data.cargarClientes()
    .subscribe((resp: any) => {
      console.log(resp);
      this.clientes = resp;
      this.loading = false;
    });
  
  }

  clienteDetalle(cliente: Object){
    this.cliente = cliente;
    this.route.navigateByUrl(`/clientesdetalle/${this.cliente.id}`);
  }

  ngOnInit(): void {
  }


}
