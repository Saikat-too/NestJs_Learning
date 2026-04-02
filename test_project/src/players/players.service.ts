import { Injectable } from '@nestjs/common';
import { CreatePlayerDto, player } from '../dto/players.dto';

@Injectable()
export class PlayersService {
  private readonly players = [
    { id: 1, name: 'Saikat', age: 24 },
    { id: 2, name: 'Ashini', age: 32 },
  ];

  getPlayers(): any {
    return this.players;
  }

  createPlayer(playerData: CreatePlayerDto): player {
    const newPlayer = {
      id: this.players.length + 1,
      ...playerData,
    };
    this.players.push(newPlayer);
    return newPlayer;
  }
}
