import { Injectable } from '@nestjs/common';
import { CreateStadiumDto, stadium } from '../dto/stadiums.dto';

@Injectable()
export class StadiumsService {
  private readonly stadiums = [
    { id: 1, name: 'Camp Nou', Location: 'Barcelona' },
    { id: 2, name: 'Santiago Barnabeu', Location: 'Madrid' },
  ];

  getStadiums(): any {
    return this.stadiums;
  }

  createStadium(stadiumData: CreateStadiumDto): stadium {
    const newStadium = {
      id: this.stadiums.length + 1,
      ...stadiumData,
    };
    this.stadiums.push(newStadium);
    return newStadium;
  }
}
