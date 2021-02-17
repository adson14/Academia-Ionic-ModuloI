import { Component, OnInit } from '@angular/core';

@Component({
  template:`
  <ion-list>
    <ion-item>
      <ion-label>Configurações</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Ajuda</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Sair</ion-label>
    </ion-item>
  </ion-list>
  `
})

export class PopoverPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

}
