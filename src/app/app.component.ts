import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'platzisquare';
  a = 2;
  b = 4;
  listo = false
  nombre = ""
  lugares:any = [
    {plan: "basic", distancia: 1, active: true, nombre: "Veterinaria huellitas"},
    {plan: "full", distancia: 10, active: false, nombre: "Floristeria rosas rojas"},
    {plan: "free", distancia: 20, active: true, nombre: "donas redondas"}
  ]

  constructor() {
    setTimeout(() => {
      this.listo = true
    }, 2000);
  }

  hacerAlgo() {
    alert("haciendo algo")
  }
}
