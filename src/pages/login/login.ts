import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
	loginError: string;

  constructor(
		private navCtrl: NavController,
    private fb: FormBuilder,
    private auth: AuthService ) { 

      this.loginForm = this.fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
  }

  login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
    };
    
    console.log('login with credentials: ' + credentials);
    this.navCtrl.setRoot(HomePage)
  }

  validLogin() {
    console.log('>>> valid login >>>');
    this.auth.login();
    console.log('<<< valid login <<<');
  }

}
