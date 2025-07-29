import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ProductSeeder {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async seed(amount: number) {
    console.log(`Seeding ${amount} products...`);

    const categories = await this.categoryRepository.find();

    const products: Product[] = [];
    for (let i = 0; i < amount; i++) {
      const product = this.productRepository.create({
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        ageRestriction: faker.helpers.arrayElement([18, 21]),
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
        isActive: faker.datatype.boolean(),
        alcoholContent: faker.number.float({
          min: 0,
          max: 0.5,
          fractionDigits: 2,
        }),
        category: faker.helpers.arrayElements(categories, { min: 1, max: 3 }),
      });
      products.push(product);
    }
    await this.productRepository.save(products);
    console.log(`Seeded ${products.length} products`);
  }
}
