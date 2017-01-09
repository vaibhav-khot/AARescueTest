import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ViewRemindersPage } from '../view-reminders/view-reminders'

/*
  Generated class for the ReminderService page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reminder-service',
  templateUrl: 'reminder-service.html'
})
export class ReminderServicePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController) {}

  viewAllReminders() {
    let loader = this.loadingCtrl.create(
      {
        content: "Please Wait !",
        showBackdrop: true
      }
    )
    loader.present();
    setTimeout(()=>{
      loader.dismiss();
      this.navCtrl.push(ViewRemindersPage);
    },250)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReminderServicePage');
  }

}
