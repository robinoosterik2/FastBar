import { Module } from '@nestjs/common';
import { RolesGuard } from './roles.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RolesGuard],
  exports: [RolesGuard],
})
export class RolesModule {}
