import { IsString, IsNotEmpty } from 'class-validator';

export interface stadium {
  id: number;
  name: string;
  Location: string;
}

export class CreateStadiumDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  Location: string;

  constructor(name: string, Location: string) {
    this.name = name;
    this.Location = Location;
  }
}
