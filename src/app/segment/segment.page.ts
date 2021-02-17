import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  exibe:any;

  constructor() { }

  ngOnInit() {
    this.exibe = 'dia';
  }

  segmentChanged(ev: any){
    console.log(ev.detail.value);

    if(ev.detail.value=='dia'){
      
      this.exibe = 'dia';
    }else{
     
      this.exibe = 'mes';
    }
  }
}
