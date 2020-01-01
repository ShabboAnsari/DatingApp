import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  Model: any = {};
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.Model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log('logged in failed');
    });
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }

  loggedOut(){
    localStorage.removeItem('token');
    console.log('Logged out');
  }
}
