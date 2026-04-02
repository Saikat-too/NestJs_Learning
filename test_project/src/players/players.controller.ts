import { Controller, Get } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Body, Post } from '@nestjs/common';
import type { CreatePlayerDto } from '../dto/players.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playerService: PlayersService) {}

  @Get()
  getPlayers(): any {
    return this.playerService.getPlayers();
  }

  @Post()
  createPlayer(@Body() playerData: CreatePlayerDto): CreatePlayerDto {
    return this.playerService.createPlayer(playerData);
  }
}
