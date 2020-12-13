import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public route : Router) {}


  navegar(){
  // this.route.navigate(['contatos']);

  this.route.navigateByUrl('buttons');
  }


}


