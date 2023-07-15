import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(private loadingCtrl: LoadingController, private router: Router) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Logging in',
      duration: 1000,
    });

    await loading.present();
  }
  redirectToTargetPage() {
    this.router.navigate(['/home']);
  }
  async ngOnInit() {
    await this.showLoading();
    setTimeout(() => {
      this.redirectToTargetPage();
    }, 1000); // Adjust the delay as needed
  }
}