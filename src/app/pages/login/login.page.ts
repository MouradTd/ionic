import { Component } from '@angular/core';
import { AlertController, MenuController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(public nav: NavController, public forgotCtrl: AlertController,  
    public toastCtrl: ToastController, public authService: AuthService) {
  }
  formdata:any = {
    email: '',
    password: ''
  };
  // go to register page
  register() {
    this.nav.navigateRoot('/register');
  }

  // login and go to home page
  async login() {
    try {
      await this.authService.login(this.formdata);
    } catch (error) {
      console.error(error);
      }
  }

  async forgotPass() {
    let forgot = await this.forgotCtrl.create({
      header: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: async data => {
            console.log('Send clicked');
            let toast = await this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              buttons: [
                {
                  text: 'OK',
                  role: 'cancel'
                }
              ],
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

    
     
}
