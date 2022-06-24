import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventService {

constructor(private httpClient: HttpClient) { }

list(){
  return [
    {_id: 10, source: 'COR', localDateTime: new Date(), startingDateTime: new Date(2022, 6, 26, 13, 42), endDateTime: new Date(2022, 6, 26, 15, 50),  location: 'Avenida Presidente Vargas', description: 'Queda de poste', blockedRoads: 'Vargas', impactedLines: '774'},
    {_id: 20, source: 'COR', localDateTime: new Date(), startingDateTime: new Date(2022, 6, 26, 13, 42), endDateTime: new Date(2022, 6, 26, 16, 50), location: 'Avenida Presidente Vargas', description: 'Queda de poste', blockedRoads: 'Vargas', impactedLines: '774'},
    {_id: 30, source: 'COR', localDateTime: new Date(), startingDateTime: new Date(2022, 6, 26, 13, 42), endDateTime: new Date(2022, 6, 26, 16, 50), location: 'Avenida Presidente Vargas', description: 'Queda de poste', blockedRoads: 'Vargas', impactedLines: '774'},
    {_id: 40, source: 'COR', localDateTime: new Date(), startingDateTime: new Date(2022, 6, 26, 13, 42), endDateTime: new Date(2022, 6, 26, 16, 50), location: 'Avenida Presidente Vargas', description: 'Queda de poste', blockedRoads: 'Vargas', impactedLines: '774'},
    ];
}

}
