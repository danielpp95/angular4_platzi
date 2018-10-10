import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { Routes, RouterModule } from '@angular/router';
import { DetallepComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';

// Angular Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CrearComponent } from './crear/crear.component';
import { actualizarComponent } from './actualizar/actualizar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
export const firebaseConfig = {
  apiKey: "AIzaSyAvZHLmJHS6DzaCFAsZ9i36IIiAqxCqhpQ",
  authDomain: "angular-4-platzi.firebaseapp.com",
  databaseURL: "https://angular-4-platzi.firebaseio.com",
  projectId: "angular-4-platzi",
  storageBucket: "angular-4-platzi.appspot.com",
  messagingSenderId: "423973811950"
};


const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetallepComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear', component: CrearComponent},
  {path: 'actualizar/:id', component: actualizarComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetallepComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    actualizarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey: 'YOUR_KEY'}),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
