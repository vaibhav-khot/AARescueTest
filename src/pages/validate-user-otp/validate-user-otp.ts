import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { EmergencyPage } from '../emergency/emergency';

/*
  Generated class for the ValidateUserOtp page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-validate-user-otp',
  templateUrl: 'validate-user-otp.html'
})
export class ValidateUserOtpPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController) {}

  validateuserotp() {
    let loader=this.loadingCtrl.create(
      {
        content: "Please Wait !",
        showBackdrop: true
      }
    );
    loader.present();
    setTimeout(()=>{
        loader.dismiss();
        this.navCtrl.push(EmergencyPage);
    },250);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidateUserOtpPage');
  }

}
