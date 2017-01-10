import { Component } from '@angular/core';
import { Platform ,App} from 'ionic-angular';
import { StatusBar, Splashscreen , Keyboard} from 'ionic-native';

import { BasePage } from '../pages/base/base';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = BasePage;

  constructor(platform: Platform,
              app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      Keyboard.disableScroll(true);
      app._setDisableScroll(false);


    });
  }
}
