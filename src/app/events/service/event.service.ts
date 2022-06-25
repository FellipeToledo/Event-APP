import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly API = '/assets/events.json';

constructor(private httpClient: HttpClient) { }

list(): any{
  return this.httpClient.get<Event[]>(this.API)
  .pipe(
    first(),
    tap(events =>console.log(events))
  );
}

}
