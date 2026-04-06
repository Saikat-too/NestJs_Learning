import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StadiumsService } from './stadiums.service';
import { CreateStadiumDto, StadiumResponseDto } from '../dto/stadiums.dto';

@Controller('stadiums')
export class StadiumsController {
  constructor(private readonly stadiumsService: StadiumsService) {}

  @Get()
  async getStadiums(): Promise<StadiumResponseDto[]> {
    return this.stadiumsService.getStadiums();
  }

  @Get(':id')
  async getStadiumById(
    @Param('id') id: string,
  ): Promise<StadiumResponseDto | null> {
    return this.stadiumsService.getStadium({ id: parseInt(id) });
  }

  @Post()
  async createStadium(
    @Body() stadiumData: CreateStadiumDto,
  ): Promise<StadiumResponseDto> {
    return this.stadiumsService.createStadium(stadiumData);
  }
}
