import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

  constructor(public alertControlle : AlertController) { }

  ngOnInit() {
  }


  async alerta(){
    const alert = await this.alertControlle.create({
      cssClass:'classeCutom',
      header: 'Alerta',
      subHeader:'Subtitulo',
      message:'Mensagem do alerta.',
      buttons: [
        {
          text:'Cancelar',
          role:'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log("Cancelou");
          }
        },
        {
          text:'Ok',
          handler: () => {
            console.log("Deu ok!");
          }
        }
      ]
    })

    await alert.present();
  }



}
