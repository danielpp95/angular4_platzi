import { Component, OnInit, EventEmitter } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: any = {}

  constructor(private autorizcionServise: AutorizacionService) { 
  }
  
  register(event) {
    event.preventDefault()
    if(this.user.mail && this.user.pass) {
      this.autorizcionServise.registro(this.user.mail, this.user.pass)
    } else {
      swal({
        text: 'El usuario y la clave no pueden quedar en blanco',
        title: 'Error',
        type: 'error'
      })
    }
  }

  ngOnInit() {
  }

}
