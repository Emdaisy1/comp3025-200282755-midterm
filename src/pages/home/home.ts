// File: home.ts
// Name: Emma Hilborn - 200282755
// COMP3025 Midterm
// Date: Feb 21, 2017

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Properties
  lists: FirebaseListObservable<any>;
  //Constructor
  constructor(public navCtrl: NavController, af:AngularFire) {
    this.lists = af.database.list('/lists');
  }

  cancelList() {
    this.navCtrl.push(HomePage);
  }

  saveList() {
    console.log("Save clicked");
  }

}
