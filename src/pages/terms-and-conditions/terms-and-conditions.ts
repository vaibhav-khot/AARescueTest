import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
/*
*==============================================================================
* Page Imports
*/
import { ValidateUserPage } from '../validate-user/validate-user';



/*
  Generated class for the TermsAndConditions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/



@Component({
  selector: 'page-terms-and-conditions',
  templateUrl: 'terms-and-conditions.html'
})

export class TermsAndConditionsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController
              ) {}

  agree() {
    let loader=this.loadingCtrl.create(
      {
        content: "Please Wait !",
        showBackdrop: true
      }
    );
    loader.present();
    setTimeout(()=>{
        loader.dismiss();
        this.navCtrl.push(ValidateUserPage);
    },250);

  }
  openInAppBrowser() {
    // window.open("http://www.google.com",'_blank');
    let browser = new InAppBrowser('https://www.aarescue.co.za/Info/Terms', '_blank');
    browser.show();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsAndConditionsPage');
  }

}
