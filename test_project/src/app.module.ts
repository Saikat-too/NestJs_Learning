import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { StadiumsModule } from './stadiums/stadiums.module';

@Module({
  imports: [PlayersModule, StadiumsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
