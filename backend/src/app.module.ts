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
import { InventoryTransactionModule } from './inventory-transaction/inventory-transaction.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { SeederModule } from './database/seeders/seeder.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST') || 'db',
        port: Number(configService.get('DB_PORT')) || 5432,
        username: configService.get('DB_USERNAME') || 'postgres',
        password: configService.get('DB_PASSWORD') || 'postgres',
        database: configService.get('DB_NAME') || 'postgres',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        migrationsTableName: 'migrations',
        synchronize: configService.get('NODE_ENV') === 'development',
        logging: false,
        ssl:
          configService.get('NODE_ENV') === 'production'
            ? {
                rejectUnauthorized: false,
              }
            : false,
      }),
      inject: [ConfigService],
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
    InventoryTransactionModule,
    SeederModule,
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
