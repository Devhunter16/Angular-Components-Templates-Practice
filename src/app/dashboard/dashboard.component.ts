import { Component } from '@angular/core';

import { DashboardItemComponent } from './dashboard-items/dashboard-item/dashboard-item.component';
import { ServerStatusComponent } from './dashboard-items/server-status/server-status.component';
import { TrafficComponent } from './dashboard-items/traffic/traffic.component';
import { SupportTicketsComponent } from './dashboard-items/support-tickets/support-tickets.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashboardItemComponent,
    ServerStatusComponent,
    TrafficComponent,
    SupportTicketsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent { };