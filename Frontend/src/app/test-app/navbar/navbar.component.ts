import { Component } from '@angular/core';

import { ServicesService } from '../services.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent  {
  loggedInUser: string = 'John Doe'; // Replace with the actual name of the logged-in user

  constructor() { }

  ngOnInit(): void {
  }

  logout(): void {
    // Add your logout logic here
    // For example, you can clear the user session or navigate to the logout page
    console.log('Logout clicked');
  }

  register(): void {
    // Add your register logic here
    // For example, you can navigate to the registration page
    console.log('Register clicked');
  }

  login(): void {
    // Add your login logic here
    // For example, you can navigate to the login page
    console.log('Login clicked');
  }
}