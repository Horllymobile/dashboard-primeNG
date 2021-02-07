import { Component, OnInit } from '@angular/core';
// import { PrimeNGConfig } from 'primeng/api';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  items: MenuItem[];

  constructor(
    //private messageService: MessageService,
    private primengConfig: PrimeNGConfig) {}
    visibleSidebar1
    ngOnInit() {
        this.primengConfig.ripple = true;
    }

}
