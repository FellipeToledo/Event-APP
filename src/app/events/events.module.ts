import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class EventsModule { }
