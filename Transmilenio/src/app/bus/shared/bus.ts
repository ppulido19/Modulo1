import { Route } from "src/app/route/shared/route";

export class Bus 
{
    constructor(
      public id: number,
      public plate: string,
      public model: string,
      public routes: Route []
    ) {}
  }
  