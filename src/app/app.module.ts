import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AF } from './providers/af';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDVOzY920BZg3nWSHtidI4wOXkSS5mKv4k',
  authDomain: 'tieqvietchatapp.firebaseapp.com',
  databaseURL: 'https://tieqvietchatapp.firebaseio.com',
  projectId: 'tieqvietchatapp',
  storageBucket: 'tieqvietchatapp.appspot.com',
  messagingSenderId: '378441525576'
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AF, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
