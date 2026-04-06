import { Injectable } from '@nestjs/common';
import { CreatePlayerDto, PlayerResponseDto } from '../dto/players.dto';
import { PrismaService } from '../prisma.service';
import { Players } from '../../generated/prisma/client';

@Injectable()
export class PlayersService {
  constructor(private prisma: PrismaService) {}

  async createPlayer(data: CreatePlayerDto): Promise<PlayerResponseDto> {
    const player = await this.prisma.players.create({ data });
    return new PlayerResponseDto(player.id, player.name, player.age);
  }

  async getPlayers(): Promise<PlayerResponseDto[]> {
    const players = await this.prisma.players.findMany();
    return players.map(
      (player) => new PlayerResponseDto(player.id, player.name, player.age),
    );
  }

  async getPlayer(userWhereUniqueInput: {
    id: number;
  }): Promise<Players | null> {
    const player = await this.prisma.players.findUnique({
      where: userWhereUniqueInput,
    });
    if (!player) {
      throw new Error(`Player with ID ${userWhereUniqueInput.id} not found`);
    }
    return new PlayerResponseDto(player.id, player.name, player.age);
  }
}
