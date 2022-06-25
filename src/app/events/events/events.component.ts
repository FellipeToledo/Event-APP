import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Event } from '../model/event';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events$: Observable<Event[]>;
  displayedColumns = [
    '_id',
    'source',
    /*'localDateTime',*/ 'startingDateTime',
    'endDateTime',
    'location',
    'description',
    'blockedRoads',
    'impactedLines',
  ];

  //eventService: EventService;

  constructor(private eventService: EventService) {
    //this.eventService = new EventService();
    this.events$ = this.eventService.list();
  }

  ngOnInit(): void {}
}
