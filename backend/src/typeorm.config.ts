// import { DataSource, DataSourceOptions } from 'typeorm';
// import { ConfigService } from '@nestjs/config';
// import { config } from 'dotenv';

// // eslint-disable-next-line @typescript-eslint/no-unsafe-call
// config();

// const configService = new ConfigService();

// export const typeOrmConfig: DataSourceOptions = {
//   type: 'postgres',
//   host: configService.get('DB_HOST') || 'db',
//   port: configService.get<number>('DB_PORT') || 5432,
//   username: configService.get('DB_USERNAME') || 'postgres',
//   password: configService.get('DB_PASSWORD') || 'postgres',
//   database: configService.get('DB_NAME') || 'postgres',
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   migrations: [__dirname + '/migrations/*{.ts,.js}'],
//   migrationsTableName: 'migrations',
//   //   synchronize: configService.get('NODE_ENV') === 'development',
//   logging: configService.get('NODE_ENV') === 'development',
// };

// const dataSource = new DataSource(typeOrmConfig);
// export default dataSource;
