import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Http } from'@angular/http';
import { HttpHeaders, HttpClient } from'@angular/common/http'; 
import 'rxjs/add/operator/map'

@Injectable()

export class LugaresService {

  API_ENDPOINT = "https://angular-4-platzi.firebaseio.com/"
  err = ""

  lugares:any = [
    {description: 'lorem ipsum', id:1, plan: "basic", distancia: '12 km', active: true, nombre: "Veterinaria huellitas"},
    {description: 'lorem ipsum', id:2, plan: "full", distancia: '10 km', active: false, nombre: "Floristeria rosas rojas"},
    {description: 'lorem ipsum', id:3, plan: "free", distancia: '23 km', active: true, nombre: "donas redondas"}
  ]

  constructor(  private afDB: AngularFireDatabase, 
                private http : Http,
                private httpCliente: HttpClient
              ) {}
    
  public getLugares() {
    // get data by angular fire 2
    /* return this.afDB.list('/').valueChanges() */

    // get data by GET
    //return this.http.get(this.API_ENDPOINT+'lugares.json') 
    
    // return full data
    return this.http.get(this.API_ENDPOINT+'.json').map(result => {
      return result.json().lugares
    })
  }
  
  public buscarLugar (id) {
    return this.afDB.object(`/lugares/${id}`).valueChanges()
  }
  
  public guardarLugar(lugar){
    // save data by angular fire 2
    /* this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar)
    console.log(lugar) */

    // save data by POST
    const headers = new HttpHeaders({ "Content-Type" : "application/json" })
    return this.httpCliente.post(this.API_ENDPOINT+'lugares.json', lugar, {headers: headers}).subscribe()
  }
}