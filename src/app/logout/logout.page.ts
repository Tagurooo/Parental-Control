import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loader',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private loadingCtrl: LoadingController, private router: Router) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Logging out',
      duration: 1000,
    });

    await loading.present();
  }
  redirectToTargetPage() {
    this.router.navigate(['/login']);
  }
  async ngOnInit() {
    await this.showLoading();
    setTimeout(() => {
      this.redirectToTargetPage();
    }, 1000); // Adjust the delay as needed
  }
}