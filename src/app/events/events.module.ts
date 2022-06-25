import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';
import { MaterialModule } from './shared/material/material.module';




@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MaterialModule,
  ]
})
export class EventsModule { }
