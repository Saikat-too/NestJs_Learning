import { Injectable } from '@nestjs/common';
import { CreateStadiumDto, StadiumResponseDto } from '../dto/stadiums.dto';

@Injectable()
export class StadiumsService {
  private readonly stadiums = [
    { id: 1, name: 'Camp Nou', Location: 'Barcelona' },
    { id: 2, name: 'Santiago Barnabeu', Location: 'Madrid' },
  ];

  getStadiums(): any {
    return this.stadiums;
  }

  getStadiumById(id: string): StadiumResponseDto {
    const stadium = this.stadiums.find(
      (stadium) => stadium.id === parseInt(id),
    );
    if (!stadium) {
      throw new Error('Stadium not found');
    }
    return new StadiumResponseDto(stadium.id, stadium.name, stadium.Location);
  }

  createStadium(stadiumData: CreateStadiumDto): StadiumResponseDto {
    const newStadium = {
      id: this.stadiums.length + 1,
      ...stadiumData,
    };
    this.stadiums.push(newStadium);
    return new StadiumResponseDto(
      newStadium.id,
      newStadium.name,
      newStadium.Location,
    );
  }
}
