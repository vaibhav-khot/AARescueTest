import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { SavedScreenPage } from '../saved-screen/saved-screen';
/*
  Generated class for the EditReminder page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-reminder',
  templateUrl: 'edit-reminder.html'
})
export class EditReminderPage {
  dataToBeEdited: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController) {
    this.dataToBeEdited = this.navParams.get('editThisContent');
  }

  deleteReminder() {

  }

  savedReminder() {
    let loader=this.loadingCtrl.create(
      {
        content: "Please Wait !",
        showBackdrop: true
      }
    );
    loader.present();
    setTimeout(()=>{
        loader.dismiss();
        this.navCtrl.push(SavedScreenPage);
    },250);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditReminderPage');
  }

}
