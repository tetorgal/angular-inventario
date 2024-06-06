import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSmallScreen = false;
  sidebarOpen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([`(max-width: 992px)`])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
        if (!this.isSmallScreen) {
          this.sidebarOpen = false;
        }
      });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}