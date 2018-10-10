import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
})
export class LugaresComponent {

  lugares = null;
  err = ''

  constructor(private lugaresService: LugaresService) {
    //get data by angular fire 2
    //console.log(lugaresService.getLugares())
    
    // get data by GET
    lugaresService.getLugares().subscribe( lugares => {
      console.log(lugares)
      this.lugares = lugares
      var me = this
      this.lugares = Object.values(this.lugares)
    }, err => {
      swal({
        title: 'Algo salio mal',
        text: 'Error '+err.statusText,
        type: 'error',
        showCancelButton: false
      })
      this.err = 'Algo salio mal ;('
    } )
  }

  }
