import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(
    private platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen) {

      this.initializeApp();
    }

  initializeApp() {
		this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
		});
	  
		this.rootPage = LoginPage;
	}
}

