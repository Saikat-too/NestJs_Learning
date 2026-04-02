import { Injectable } from '@nestjs/common';
import { CreatePlayerDto, PlayerResponseDto } from '../dto/players.dto';

@Injectable()
export class PlayersService {
  private readonly players = [
    { id: 1, name: 'Saikat', age: 24 },
    { id: 2, name: 'Ashini', age: 32 },
  ];

  getPlayers(): any {
    return this.players;
  }
  getPlayerById(id: string): PlayerResponseDto {
    const player = this.players.find((player) => player.id === parseInt(id));
    if (!player) {
      throw new Error('Player not found');
    }
    return new PlayerResponseDto(player.id, player.name, player.age);
  }
  createPlayer(playerData: CreatePlayerDto): PlayerResponseDto {
    const newPlayer = {
      id: this.players.length + 1,
      ...playerData,
    };
    this.players.push(newPlayer);
    return new PlayerResponseDto(newPlayer.id, newPlayer.name, newPlayer.age);
  }
}
