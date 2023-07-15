import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {
  currentDate: Date;
  handlerMessage = '';
  roleMessage = '';


  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.handlerMessage = 'Alert canceled';
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.handlerMessage = 'Alert confirmed';
      },
    },
  ];

  constructor() {
    this.currentDate = new Date();
   }

  ngOnInit() {
    this.startClock();
  }

  startClock() {
    this.currentDate = new Date();
    interval(1000).subscribe(() => {
      this.currentDate = new Date();
    });
  }
}
