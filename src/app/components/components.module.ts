import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third party modules
import {SidebarModule} from 'primeng/sidebar';

import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SidebarModule
  ]
})
export class ComponentsModule { }
