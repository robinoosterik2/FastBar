import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth';
import { RolesModule } from './roles/roles.module';
import { VenueModule } from './venue/venue.module';
import { ProductModule } from './product/product.module';
import { BarModule } from './bar/bar.module';
import { ProductToBarModule } from './product-to-bar/product-to-bar.module';
import { OrderProductModule } from './order-product/order-product.module';
import { OrderModule } from './order/order.module';
import { AddressModule } from './address/address.module';
import { CategoryModule } from './category/category.module';
import { PaymentModule } from './payment/payment.module';
import { AuditLogModule } from './audit-log/audit-log.module';
import { CategoryTagModule } from './category-tag/category-tag.module';
import { VenueTagModule } from './venue-tag/venue-tag.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    RolesModule,
    VenueModule,
    ProductModule,
    BarModule,
    ProductToBarModule,
    OrderModule,
    OrderProductModule,
    AddressModule,
    CategoryModule,
    PaymentModule,
    AuditLogModule,
    CategoryTagModule,
    VenueTagModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
