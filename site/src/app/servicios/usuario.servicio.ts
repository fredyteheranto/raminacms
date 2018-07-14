import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Ruta } from '../ruta_global';

@Injectable()

export class ServicioUsuarios{
  public url:string;
  constructor(private _http:Http){
    this.url = Ruta.url+"login";	

  }

  login(listaUsuarios){
   // listaUsuarios.token = token;
    let parametros = JSON.stringify(listaUsuarios);	
    let headers = new Headers({"Content-Type":"application/json"})
    return this._http.post(this.url, parametros, {headers: headers}).map(resultado => resultado.json())	

  }
  tomarJsonSlide(){
    return this._http.get(this.url+"mostrar-slides").map(resultado => resultado.json())	

  }



}