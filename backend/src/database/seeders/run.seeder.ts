import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { SeederService } from './seeder.service';

async function bootstrap(
  users: number,
  venueTags: number,
  venues: number,
  categories: number,
  categoryTags: number,
  addresses: number,
) {
  const app = await NestFactory.createApplicationContext(AppModule);
  const seederService: SeederService = app.get(SeederService);

  try {
    await seederService.seed(
      users,
      venueTags,
      venues,
      categories,
      categoryTags,
      addresses,
    );
    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await app.close();
  }
}

bootstrap(100, 100, 10, 10, 10, 10);
