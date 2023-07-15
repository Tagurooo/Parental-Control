import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parental-control',
  templateUrl: './parental-control.page.html',
  styleUrls: ['./parental-control.page.scss'],
})
export class ParentalControlPage implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
