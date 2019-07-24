import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/Acceuil', title: 'Acceuil',  icon: 'dashboard', class: '' },
    { path: '/profile', title: 'Profile',  icon: 'person', class: '' },
    { path: '/liste-employè', title: 'liste employé',  icon: 'contacts', class: '' },
    { path: '/liste-congè', title: 'liste-congé',  icon: 'date_range', class: '' },
    { path: '/liste-avance', title: 'liste avance',  icon: 'euro_symbol', class: '' },
  
    
   
 


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
