import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
/*
*==============================================================================
* Component Import
*/
import { TermsAndConditionsPage } from '../terms-and-conditions/terms-and-conditions';


@Component({
  selector: 'page-base',
  templateUrl: 'base.html'
})
export class BasePage {
rootPage:any;
  constructor(public navCtrl: NavController) {
    this.rootPage=TermsAndConditionsPage;

  }

}
