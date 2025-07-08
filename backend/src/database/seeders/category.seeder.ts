import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Venue } from 'src/venue/entities/venue.entity';
import { CategoryTag } from 'src/category-tag/entities/category-tag.entity';

@Injectable()
export class CategorySeeder {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Venue)
    private readonly venueRepository: Repository<Venue>,
    @InjectRepository(CategoryTag)
    private readonly categoryTagRepository: Repository<CategoryTag>,
  ) {}

  async seed(amount: number) {
    console.log(`Seeding ${amount} categories...`);
    const categories: Category[] = [];
    const categoryTags = await this.categoryTagRepository.find({
      relations: ['categories'],
    });
    const venues = await this.venueRepository.find({
      relations: ['categories'],
    });

    for (let i = 0; i < amount; i++) {
      const categoryVenues = faker.helpers.arrayElements(venues, {
        min: 1,
        max: 10,
      });

      const ct = faker.helpers.arrayElements(categoryTags, {
        min: 1,
        max: 10,
      });

      const category = this.categoryRepository.create({
        name: faker.food.adjective(),
        description: faker.lorem.sentence(),
        isActive: faker.datatype.boolean(),
        venues: categoryVenues,
        categoryTags: ct,
      });

      categoryVenues.forEach((venue) => {
        venue.categories.push(category);
      });

      ct.forEach((ct) => {
        ct.categories.push(category);
      });

      await this.venueRepository.save(categoryVenues);
      await this.categoryTagRepository.save(ct);
      categories.push(category);
    }
    await this.categoryRepository.save(categories);
    console.log(`Seeded ${categories.length} categories`);
  }
}
