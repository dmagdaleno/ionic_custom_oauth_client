import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OauthCordova } from 'ionic-cordova-oauth';



@Injectable()
export class ValidAuthProvider {


  constructor(public http: HttpClient,
    private oauthCordova: OauthCordova) {
      
      console.log('Hello ValidAuthProvider Provider');
      
  }

}
