import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
  private readonly players = [
    { id: 1, name: 'Saikat', age: 24 },
    { id: 2, name: 'Ashini', age: 32 },
  ];

  getPlayers(): any {
    return this.players;
  }
}
