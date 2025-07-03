import { Module } from '@nestjs/common';
import { BarService } from './bar.service';
import { BarController } from './bar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bar } from './entities/bar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bar])],
  controllers: [BarController],
  providers: [BarService],
})
export class BarModule {}
