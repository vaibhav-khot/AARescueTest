import { Component } from '@angular/core';
import { NavController,
         NavParams,
         LoadingController,
         ViewController } from 'ionic-angular';

import { HomeDashboardPage } from '../home-dashboard/home-dashboard';
/*
  Generated class for the PanicAlert page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.n
*/
@Component({
  selector: 'page-panic-alert',
  templateUrl: 'panic-alert.html'
})
export class PanicAlertPage {
 slidePager = {
  pager: true,

 };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public viewCtrl: ViewController) {

  }

  opendashboard() {
    this.navCtrl.push(HomeDashboardPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PanicAlertPage');
  }

}
