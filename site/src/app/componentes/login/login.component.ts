import { Component, OnInit } from '@angular/core';
import { ServicioUsuarios } from "../../servicios/usuario.servicio";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario
  public pass
  public session : boolean = false

  constructor(public userSevc:ServicioUsuarios,public router: Router) { }

  ngOnInit() {
   //document.getElementById("loon").style.display = "block";

    document.querySelector('.img__btn').addEventListener('click', function() {
      document.querySelector('.cont').classList.toggle('s--signup');
    });
  }
  entrarRami(u,p){
    var  s = {"ram_usuario":u,"ram_password":p}
    this.userSevc.login(s).subscribe(
      resultado => {
        if (resultado.seleccionUsuario) {
          this.session = true
          
          this.router.navigate(['admin']); 
        }
      },
      error => {
        var mensajeError = <any>error.json();
        console.log(mensajeError.mensaje)
      });
    }
}