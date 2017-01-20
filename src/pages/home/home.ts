import { Component } from '@angular/core';

import { NavController, AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadCtrl: LoadingController) {

  }

  ionViewDidEnter() {
    let confirm = this.alertCtrl.create({
      title: 'Delete category?',
      message: 'Are you sure you wish to delete this category?',
      buttons: [
        { text: 'No' },
        {
          text: 'Yes',
          handler: () => {
            confirm.dismiss().then(() => {
              let loading = this.loadCtrl.create({
                content: 'Loading',
                duration: 3000
              });
              loading.present();
            })
          }
        }
      ]
    });

    confirm.present();
  }

}
