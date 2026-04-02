import { Injectable } from '@nestjs/common';

@Injectable()
export class StadiumsService {
  private readonly stadiums = [
    { id: 1, name: 'Camp Nou', Location: 'Barcelona' },
    { id: 2, name: 'Santiago Barnabeu', Location: 'Madrid' },
  ];

  getStadiums(): any {
    return this.stadiums;
  }
}
