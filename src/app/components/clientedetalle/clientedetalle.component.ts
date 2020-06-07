import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ClientesComponent } from '../clientes/clientes.component';


@Component({
  selector: 'app-clientedetalle',
  templateUrl: './clientedetalle.component.html',
  styleUrls: ['./clientedetalle.component.css']
})
export class ClientedetalleComponent implements OnInit {

  clientedetalle:any = {};

  constructor(private activatedroute: ActivatedRoute,
              private data: DataService) {
  }
              
  // console.log(this.clientedetail.cliente);
  
  ngOnInit(): void {
  console.log(this.data.clientes);
  }

}
