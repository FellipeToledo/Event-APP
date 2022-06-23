import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';



@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatTableModule,
    MatCardModule,
  ]
})
export class EventsModule { }
