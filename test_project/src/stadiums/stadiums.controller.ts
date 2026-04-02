import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StadiumsService } from './stadiums.service';
import { CreateStadiumDto } from '../dto/stadiums.dto';

@Controller('stadiums')
export class StadiumsController {
  constructor(private readonly stadiumsService: StadiumsService) {}

  @Get()
  getStadiums(): any {
    return this.stadiumsService.getStadiums();
  }

  @Get(':id')
  getStadiumById(@Param('id') id: string): any {
    return this.stadiumsService.getStadiumById(id);
  }

  @Post()
  createStadium(@Body() stadiumData: CreateStadiumDto): CreateStadiumDto {
    return this.stadiumsService.createStadium(stadiumData);
  }
}
