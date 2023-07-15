import { Component} from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username!: string;
  password!: string;

  constructor(private router: Router) {}
  login() {
    if (this.username && this.password) {
      // Perform authentication logic here
      // For simplicity, use a hard-coded username and password
      if (this.username === 'admin' && this.password === 'password') {
        this.router.navigate(['/loader']); // Redirect to dashboard page
      } else {
        alert('Invalid username or password!');
        // Show error message or handle invalid login
      }
    } else {
      alert('Please enter both username and password!');
      // Show error message or handle empty credentials
    }
  }
}
