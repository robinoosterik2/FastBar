import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryTag } from 'src/category-tag/entities/category-tag.entity';
import { faker } from '@faker-js/faker';
import { Venue } from 'src/venue/entities/venue.entity';

@Injectable()
export class CategoryTagSeeder {
  constructor(
    @InjectRepository(CategoryTag)
    private readonly categoryTagRepository: Repository<CategoryTag>,
    @InjectRepository(Venue)
    private readonly venueRepository: Repository<Venue>,
  ) {}

  async seed(amount: number) {
    console.log(`Seeding ${amount} category tags...`);

    const venues = await this.venueRepository.find({
      relations: ['categoryTags'],
    });

    const categoryTags: CategoryTag[] = [];
    for (let i = 0; i < amount; i++) {
      const venue = faker.helpers.arrayElement(venues);
      const categoryTag = this.categoryTagRepository.create({
        name: faker.food.adjective(),
        isActive: faker.datatype.boolean(),
        venue,
      });
      venue.categoryTags.push(categoryTag);
      await this.venueRepository.save(venue);
      categoryTags.push(categoryTag);
    }
    await this.categoryTagRepository.save(categoryTags);
    console.log(`Seeded ${categoryTags.length} category tags`);
  }
}
