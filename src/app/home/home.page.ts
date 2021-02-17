import { PopoverPage } from './../popover/popover.page';
import { ModalPage } from './../modal/modal.page';
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public route : Router,public modalController: ModalController,public popocerCtrl: PopoverController) {}


  navegar(){
  // this.route.navigate(['contatos']);

  this.route.navigateByUrl('buttons');
  }

  async presentModal(){
    const  modal = await this.modalController.create({
      component: ModalPage,
      cssClass:'minhaCLasse'
    });

    return await modal.present();
  }
 
  async presentPopover(event: Event){
    const popover = await this.popocerCtrl.create({
      component: PopoverPage,
      event
    })

    await popover.present();
  }



  
  


}


