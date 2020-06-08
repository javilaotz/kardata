import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, find } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  clientes: any = [];
  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url = `https://karcher.repositorios.co/wp-json/wc/karcher/${ query }?consumer_key=ck_c0e4507cfb3127b9565c62e05fdc98b68738faa0&consumer_secret=cs_3aabdcd4094eafe7df8faf5d4e3eaa6e454c781a`;
    
    return this.http.get(url);

 }

  cargarClientes(){
    this.clientes = this.getQuery('clients');
    return this.clientes;
  }
  
  detalleCliente(id: any){
    return this.getQuery('clients');
  
  }
  
  // cargarPedidos(){
  //   return this.getQuery('billing');
  // }

}

