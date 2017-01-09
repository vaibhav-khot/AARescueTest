import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { POIMapPage } from '../poi-map/poi-map';
/*
  Generated class for the POIList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-poi-list',
  templateUrl: 'poi-list.html'
})
export class POIListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openPOIMap() {
    this.navCtrl.push(POIMapPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad POIListPage');
  }

}
