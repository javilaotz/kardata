import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { find } from 'rxjs/operators';



@Component({
  selector: 'app-clientedetalle',
  templateUrl: './clientedetalle.component.html',
  styleUrls: ['./clientedetalle.component.css']
})
export class ClientedetalleComponent implements OnInit {

  clienteshow: any = [];
  loading: boolean = true;
  constructor(private activatedroute: ActivatedRoute,
              private data: DataService) {

              }
  ngOnInit(): void {
   
    this.activatedroute.params.subscribe(resp => {
                  
      let idcliente = resp.id;
      // console.log(idcliente);
      this.data.detalleCliente(resp.id).subscribe((cliente: any) => {
        // console.log(cliente);
        this.clienteshow = cliente.find((clienteencontrado: any) =>  clienteencontrado.id === Number(idcliente));
        console.log(this.clienteshow);
        this.loading = false;
      });
    })
  }

}
