import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly API = 'api/events';

  constructor(private httpClient: HttpClient) {}

  list(): any {
    return this.httpClient.get<Event[]>(this.API).pipe(
      first(),
      delay(1000),
      tap((events) => console.log(events))
    );
  }
}
