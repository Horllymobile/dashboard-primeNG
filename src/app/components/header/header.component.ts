import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeNGConfig, PrimeIcons} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  constructor(private primengCongif: PrimeNGConfig) {
    
  }

  ngOnInit(): void {
    this.primengCongif.ripple = true;
    this.items = [
      {
        label:'Dashboard',
        icon:'pi pi-fw pi-user',
        routerLink: '/'
      },
      {
          label:'Events',
          icon:PrimeIcons.CALENDAR,
          routerLink: '/dashboard/events'
      },
      {
        label:'Logout',
        icon:PrimeIcons.POWER_OFF,
        command: this.logout()
    },
    ];
  }

  logout(){
    return true 
  }

}