import { Controller, Get } from '@nestjs/common';
import { StadiumsService } from './stadiums.service';

@Controller('stadiums')
export class StadiumsController {
  constructor(private readonly stadiumsService: StadiumsService) {}

  @Get()
  getStadiums(): any {
    return this.stadiumsService.getStadiums();
  }
}
