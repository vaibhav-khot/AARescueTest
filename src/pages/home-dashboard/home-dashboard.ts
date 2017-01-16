import { Component } from '@angular/core';
import { NavController,
         NavParams,
         ViewController,
         LoadingController,
         AlertController } from 'ionic-angular';

import { AccidentAssistPage } from '../accident-assist/accident-assist';
import { ReminderServicePage } from '../reminder-service/reminder-service';
import { POIListPage } from '../poi-list/poi-list';
import { UpdateYourDetailsPage } from '../update-your-details/update-your-details';
/*
  Generated class for the HomeDashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home-dashboard',
  templateUrl: 'home-dashboard.html'
})
export class HomeDashboardPage {

  constructor(  public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public loadingCtrl: LoadingController,
                public alertCtrl: AlertController
             ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeDashboardPage');
    // var ic = '<ion-icon name="contact"></ion-icon>';
    let alert = this.alertCtrl.create({
      // <ion-icon name=\"contact\">hello</ion-icon>
        title: `<div class="button-background">
                  <i class="fa fa-user i"></i>
                </div>` ,
        subTitle: `<b>Please update your details</b>`,
        buttons:[{
          text: "Update Details",
          cssClass: "alert_up_dt",
          handler: ()=>{
            this.navCtrl.push(UpdateYourDetailsPage);
          }
        }]
     });
     alert.present();
  }


  openAccidentAssist() {
    this.navCtrl.push(AccidentAssistPage);
  }

  openReminderService() {
    this.navCtrl.push(ReminderServicePage);
  }

  openPOIList() {
    this.navCtrl.push(POIListPage);
  }

  ionViewDidEnter() {
    this.viewCtrl.showBackButton(false);
  }




}
