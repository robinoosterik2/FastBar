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

    // Load all data once at the beginning
    const [categoryTags, venues] = await Promise.all([
      this.categoryTagRepository.find({ relations: ['categories'] }),
      this.venueRepository.find({ relations: ['categories'] }),
    ]);

    const categories: Category[] = [];
    const batchSize = 100; // Process in batches to avoid memory issues with large datasets

    for (let batch = 0; batch < Math.ceil(amount / batchSize); batch++) {
      const batchStart = batch * batchSize;
      const batchEnd = Math.min(batchStart + batchSize, amount);
      const batchCategories: Category[] = [];

      // Create categories for this batch
      for (let i = batchStart; i < batchEnd; i++) {
        const categoryVenues = faker.helpers.arrayElements(venues, {
          min: 1,
          max: 10,
        });

        const selectedCategoryTags = faker.helpers.arrayElements(categoryTags, {
          min: 1,
          max: 10,
        });

        const category = this.categoryRepository.create({
          name: faker.food.adjective(),
          description: faker.lorem.sentence(),
          isActive: faker.datatype.boolean(),
          venues: categoryVenues,
          categoryTags: selectedCategoryTags,
        });

        batchCategories.push(category);
      }

      // Save the batch of categories
      await this.categoryRepository.save(batchCategories);
      categories.push(...batchCategories);

      console.log(
        `Seeded batch ${batch + 1}/${Math.ceil(amount / batchSize)} (${batchEnd} categories total)`,
      );
    }

    console.log(`Seeded ${categories.length} categories`);
  }
}
