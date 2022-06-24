import { Component, OnInit } from '@angular/core';

import { Event } from '../model/event';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Event[] = [
  {_id: 10, source: 'COR', localDateTime: new Date(), startingDateTime: new Date(2022, 6, 26, 13, 42), endDateTime: new Date(2022, 6, 26, 15, 50),  location: 'Avenida Presidente Vargas', description: 'Queda de poste', blockedRoads: 'Vargas', impactedLines: '774'},
  {_id: 20, source: 'COR', localDateTime: new Date(), startingDateTime: new Date(2022, 6, 26, 13, 42), endDateTime: new Date(2022, 6, 26, 16, 50), location: 'Avenida Presidente Vargas', description: 'Queda de poste', blockedRoads: 'Vargas', impactedLines: '774'},
  {_id: 30, source: 'COR', localDateTime: new Date(), startingDateTime: new Date(2022, 6, 26, 13, 42), endDateTime: new Date(2022, 6, 26, 16, 50), location: 'Avenida Presidente Vargas', description: 'Queda de poste', blockedRoads: 'Vargas', impactedLines: '774'},
  {_id: 40, source: 'COR', localDateTime: new Date(), startingDateTime: new Date(2022, 6, 26, 13, 42), endDateTime: new Date(2022, 6, 26, 16, 50), location: 'Avenida Presidente Vargas', description: 'Queda de poste', blockedRoads: 'Vargas', impactedLines: '774'},
  ];
  displayedColumns = ['_id', 'source', /*'localDateTime',*/ 'startingDateTime', 'endDateTime' , 'location', 'description', 'blockedRoads', 'impactedLines'];

   //eventService: EventService;

  constructor(private eventService: EventService) {
      //this.eventService = new EventService();
      this.events = this.eventService.list();
   }

  ngOnInit(): void {
  }

}
