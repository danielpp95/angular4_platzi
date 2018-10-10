import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import swal from 'sweetalert2'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',

  animations: [
    trigger('contenedorAnimable', [
      state('open', style({
        opacity: 0,
        backgroundColor: 'blue',
        transform: 'rotate3d(0, 0, 0, 0deg)'
      })),
      state('closed', style({
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'rotate3d(5, 10, 20, 30deg)'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      
    ])
  ]

})
export class LugaresComponent {

  lugares = null;
  err = ''
  state = 'open'

  animate() {
    this.state = (this.state === 'open') ? 'closed' : 'open'
  }

  animationStart(event) {
    console.log(event);
  }

  animationDone(event) {
    console.log(event);
    //this.animate()
  }
 

  constructor(private lugaresService: LugaresService) {
    //get data by angular fire 2
    //console.log(lugaresService.getLugares())
    
    // get data by GET
    lugaresService.getLugares().subscribe( lugares => {
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
