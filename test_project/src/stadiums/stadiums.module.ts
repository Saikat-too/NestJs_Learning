import { Module } from '@nestjs/common';
import { StadiumsService } from './stadiums.service';
import { StadiumsController } from './stadiums.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [StadiumsController],
  providers: [StadiumsService, PrismaService],
})
export class StadiumsModule {}
