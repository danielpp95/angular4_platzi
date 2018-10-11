import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {}

  constructor(private autorizcionServise: AutorizacionService) { 
    
  }

  login() {
    event.preventDefault()
    this.autorizcionServise.login(this.user.mail, this.user.pass)
  }

  ngOnInit() {
  }

}
