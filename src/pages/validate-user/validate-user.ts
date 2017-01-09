import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { ValidateUserOtpPage } from '../validate-user-otp/validate-user-otp';
/*
  Generated class for the ValidateUser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-validate-user',
  templateUrl: 'validate-user.html'
})
export class ValidateUserPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController ) {}

  validateuser(){

    let loader=this.loadingCtrl.create(
      {
        content: "Please Wait !",
        showBackdrop: true
      }
    );
    loader.present();
    setTimeout(()=>{
        loader.dismiss();
        this.navCtrl.push(ValidateUserOtpPage);
    },250);


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidateUserPage');
  }

}
