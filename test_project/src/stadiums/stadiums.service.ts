import { Injectable } from '@nestjs/common';
import { CreateStadiumDto, StadiumResponseDto } from '../dto/stadiums.dto';
import { PrismaService } from '../prisma.service';
import { Stadiums } from '../../generated/prisma/client';

@Injectable()
export class StadiumsService {
  constructor(private prisma: PrismaService) {}

  async createStadium(data: CreateStadiumDto): Promise<StadiumResponseDto> {
    const stadium = await this.prisma.stadiums.create({ data });
    return new StadiumResponseDto(stadium.id, stadium.name, stadium.location);
  }

  async getStadiums(): Promise<StadiumResponseDto[]> {
    const stadiums = await this.prisma.stadiums.findMany();
    return stadiums.map(
      (stadium) =>
        new StadiumResponseDto(stadium.id, stadium.name, stadium.location),
    );
  }

  async getStadium(userWhereUniqueInput: {
    id: number;
  }): Promise<Stadiums | null> {
    const stadium = await this.prisma.stadiums.findUnique({
      where: userWhereUniqueInput,
    });
    if (!stadium) {
      throw new Error(`Player with ID ${userWhereUniqueInput.id} not found`);
    }
    return new StadiumResponseDto(stadium.id, stadium.name, stadium.location);
  }
}
