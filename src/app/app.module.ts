// File: app.module.ts
// Name: Emma Hilborn - 200282755
// COMP3025 Midterm
// Date: Feb 21, 2017

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//Import AF2 module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyBQLhWhm8d3IVGfR_ma3jZW4FbWniVz8ug",
    authDomain: "comp3025midtermshoppinglists.firebaseapp.com",
    databaseURL: "https://comp3025midtermshoppinglists.firebaseio.com",
    storageBucket: "comp3025midtermshoppinglists.appspot.com",
    messagingSenderId: "284388337971"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
