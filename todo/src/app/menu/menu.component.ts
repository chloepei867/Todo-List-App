import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isUserLoggedIn: boolean = false;

  constructor(public hardcodedAuthenticationService
    : HardcodedAuthenticationService) { }

  ngOnInit() {
    //   this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }
}
