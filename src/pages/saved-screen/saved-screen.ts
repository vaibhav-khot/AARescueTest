import { Component } from '@angular/core';
import { NavController, NavParams,
         LoadingController } from 'ionic-angular';

import { ViewRemindersPage } from '../view-reminders/view-reminders';
// import { HomeDashboardPage } from '../view-reminders/view-reminders';
// import {  } from '../view-reminders/view-reminders';
/*
  Generated class for the SavedScreen page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-saved-screen',
  templateUrl: 'saved-screen.html'
})
export class SavedScreenPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController) {}

  savedscreenContinue() {
    let loader = this.loadingCtrl.create({
      content: "Please Wait !",
      showBackdrop: true
    })
    loader.present();
    setTimeout(()=>{

      this.navCtrl.pop().then(()=>{
        loader.dismiss();
        this.navCtrl.pop();
      })
    },250);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavedScreenPage');
  }

}
