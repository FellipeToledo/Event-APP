export interface Event {

  _id: number;
  source: String;
  eventType: String;
  localDateTime: Date;
  startingDateTime: Date;
  endDateTime: Date;
  location: String;
  description: String;
  blockedRoads: String;
  impactedLines: String;
}

