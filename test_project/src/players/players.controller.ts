import { Controller, Get, Param, Req } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Body, Post } from '@nestjs/common';
import type { CreatePlayerDto, PlayerResponseDto } from '../dto/players.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playerService: PlayersService) {}

  @Get()
  async getPlayers(): Promise<PlayerResponseDto[]> {
    return this.playerService.getPlayers();
  }

  @Get(':id')
  async getPlayerById(
    @Param('id') id: string,
  ): Promise<PlayerResponseDto | null> {
    const playerId = parseInt(id);
    return this.playerService.getPlayer({ id: playerId });
  }

  @Post()
  async createPlayer(
    @Body() playerData: CreatePlayerDto,
  ): Promise<PlayerResponseDto> {
    return this.playerService.createPlayer(playerData);
  }
  @Get()
  getRequestInfo(@Req() request: Request): string {
    return `Request method: ${request.method}, Request URL: ${request.url}`;
  }
}
