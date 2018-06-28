import { OAuthProvider, IOAuthOptions } from 'ionic-cordova-oauth/dist/provider';

export interface IValidOptions extends IOAuthOptions {
  authType?: string;
}

export declare class ValidAuthProvider extends OAuthProvider {
  options: IValidOptions;
  protected authUrl: string;
  protected defaults: Object;

  constructor(options?: IValidOptions);
  
  protected optionsToDialogUrl(options: any): string;
}
