import { Body, Controller, Get, Post } from '@nestjs/common';
import { StadiumsService } from './stadiums.service';
import { CreateStadiumDto } from '../dto/stadiums.dto';

@Controller('stadiums')
export class StadiumsController {
  constructor(private readonly stadiumsService: StadiumsService) {}

  @Get()
  getStadiums(): any {
    return this.stadiumsService.getStadiums();
  }

  @Post()
  createStadium(@Body() stadiumData: CreateStadiumDto): CreateStadiumDto {
    return this.stadiumsService.createStadium(stadiumData);
  }
}
