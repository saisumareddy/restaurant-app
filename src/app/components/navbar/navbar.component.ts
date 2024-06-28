import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSmallScreen: boolean = false;
  sidenavOpened: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
        if (this.isSmallScreen) {
          this.sidenavOpened = false;
        } else {
          this.sidenavOpened = true;
        }
      });
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
