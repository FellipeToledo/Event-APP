import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Event } from '../model/event';
import { EventService } from '../service/event.service';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';

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

  constructor(private eventService: EventService, public dialog: MatDialog) {
    //this.eventService = new EventService();
    this.events$ = this.eventService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar eventos');
        return of([]);
      })
    );
  }

  onError(errorMsg: String) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  ngOnInit(): void {}
}
