import { Controller, Get, Param } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Body, Post } from '@nestjs/common';
import type { CreatePlayerDto, PlayerResponseDto } from '../dto/players.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playerService: PlayersService) {}

  @Get()
  getPlayers(): any {
    return this.playerService.getPlayers();
  }

  @Get(':id')
  getPlayerById(@Param('id') id: string): PlayerResponseDto {
    return this.playerService.getPlayerById(id);
  }

  @Post()
  createPlayer(@Body() playerData: CreatePlayerDto): PlayerResponseDto {
    return this.playerService.createPlayer(playerData);
  }
}
