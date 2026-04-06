import { IsString, IsNotEmpty } from 'class-validator';

export interface stadium {
  id: number;
  name: string;
  location: string;
}

export class CreateStadiumDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
  }
}

export class StadiumResponseDto {
  id: number;
  name: string;
  location: string;

  constructor(id: number, name: string, location: string) {
    this.id = id;
    this.name = name;
    this.location = location;
  }
}
