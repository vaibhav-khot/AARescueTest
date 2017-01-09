import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EditReminderPage } from '../edit-reminder/edit-reminder'
/*
  Generated class for the ViewReminders page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-reminders',
  templateUrl: 'view-reminders.html'
})
export class ViewRemindersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  back() {
    this.navCtrl.pop();
  }
  editremanider(driverContent) {
    this.navCtrl.push(EditReminderPage,{ editThisContent : driverContent })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRemindersPage');
  }

}
