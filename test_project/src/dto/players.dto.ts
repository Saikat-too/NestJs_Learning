import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export interface player {
  id: number;
  name: string;
  age: number;
}
export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @Min(1)
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export class PlayerResponseDto {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
