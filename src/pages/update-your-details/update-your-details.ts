import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppAvailability, Device , AppRate} from 'ionic-native';


/*
  Generated class for the UpdateYourDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-update-your-details',
  templateUrl: 'update-your-details.html'
})
export class UpdateYourDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateYourDetailsPage');
  }
  yesClick() {
//     var scheme;
//     if(Device.platform === 'iOS') {
//       scheme = "twitter://";
//     } else if (Device.platform === 'Android') {
//       scheme = "com.twitter.android";
//   }
//   AppAvailability.check(scheme).then((data)=>{
//       window.open(encodeURI(scheme), '_blank');
//       console.log('mansystems is available  '+scheme);
//       console.log('return data' +data);
//
//
// })
AppRate.preferences.customLocale = {
  title: "Launch AA eCards App",
  message: "",
  cancelButtonLabel: "No",
  rateButtonLabel: "Yes",
  laterButtonLabel: ""
};
AppRate.preferences.storeAppURL = {
  ios: '1055934947',
  android: 'market://details?id=com.mansystems.aa',
};

AppRate.promptForRating(true);



 }

}
