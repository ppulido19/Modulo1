import { Schedule } from "src/app/schedule/shared/schedule";

export class Route {
    constructor(
      public id: number,
      public code: string,
      public stations: string[],
      public schedule: Schedule
    ) {}
  }
  