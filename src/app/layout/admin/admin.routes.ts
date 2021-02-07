import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { EventsComponent } from './../../events/events.component';
export const AdminRoutes : Routes = [
  {path: '', component: DashboardComponent},
  {path: 'events', component: EventsComponent}
]
