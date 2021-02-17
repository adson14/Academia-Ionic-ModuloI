import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(public loadingController:LoadingController) { }

  ngOnInit() {
    this.presentLoading();
  }

  /**
   * Tipos de Spinner:
   * -bubbles
   * -circles
   * -circular
   * -crescent
   * -dots
   * -lines
   * -lines-small
   */

  async presentLoading(){
    const loading = await this.loadingController.create({
      cssClass:'qualquer',
      spinner:'dots',
      message:'Carregando..',
      duration:5000,
      backdropDismiss:false
    });

    await loading.present();
  }

}
