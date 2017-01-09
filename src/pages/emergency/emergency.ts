import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PanicAlertPage } from '../panic-alert/panic-alert';
/*
  Generated class for the Emergency page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-emergency',
  templateUrl: 'emergency.html'
})
export class EmergencyPage {
  rootPage:any=PanicAlertPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergencyPage');
  }

}
