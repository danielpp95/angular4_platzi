import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'platzisquare';

  isLogged = false;

  constructor( private autorizationServece: AutorizacionService ) {
    this.autorizationServece.isLogged().subscribe(result =>{
      if (result && result.uid) {
        this.isLogged = true
      }else {
        this.isLogged = false
      }
    }, err=>{
      this.isLogged = false
    })
  }

  public logout(event) {
    event.preventDefault()
    this.autorizationServece.logout()
  }

  
}
