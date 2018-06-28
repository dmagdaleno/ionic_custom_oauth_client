import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { OauthCordova } from 'ionic-cordova-oauth';

declare var window: any;

@Injectable()
export class AuthService {
    private oauth: OauthCordova = new OauthCordova();

    constructor(private platform: Platform) { }

    login(): Promise<any> {
		return this.platform.ready().then(() => {
			this.loginValid().then(success => {
				alert(success.access_token);
				return success;
			}, (error) => {
				alert(error);
				return error;
			});
		});
	}
	
    loginValid(): Promise<any> {

		return new Promise(function(resolve, reject) {
			var browserRef = window.cordova.InAppBrowser
				.open("http://oauth.dev.valididcloud.com/connect/authorize?client_id=" 
					+ "7ee3908a-4f4d-490b-8e08-faab0eae8d38" 
					+ "&redirect_uri=http://localhost/callback&response_type=token&scope=abis", 
					"_blank", 
					"location=no,clearsessioncache=yes,clearcache=yes");
					
			browserRef.addEventListener("loadstart", (event) => {
				if ((event.url).indexOf("http://localhost/callback") === 0) {
					browserRef.removeEventListener("exit", (event) => {});
					browserRef.close();
					var responseParameters = ((event.url).split("#")[1]).split("&");
					var parsedResponse = {};
					for (var i = 0; i < responseParameters.length; i++) {
						parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
					}
					if (parsedResponse["access_token"] !== undefined && parsedResponse["access_token"] !== null) {
						resolve(parsedResponse);
					} else {
						reject("Problem authenticating with Facebook");
					}
				}
			});
			browserRef.addEventListener("exit", function(event) {
				reject("The Facebook sign in flow was canceled");
			});
		});
	}
}