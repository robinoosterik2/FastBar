import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductToBar } from 'src/product-to-bar/entities/productToBar.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Product } from 'src/product/entities/product.entity';
import { Bar } from 'src/bar/entities/bar.entity';

@Injectable()
export class ProductToBarSeeder {
  constructor(
    @InjectRepository(ProductToBar)
    private readonly productToBarRepository: Repository<ProductToBar>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Bar)
    private readonly barRepository: Repository<Bar>,
  ) {}

  async seed(amount: number) {
    console.log(`Seeding ${amount} product to bars...`);

    const products = await this.productRepository.find();
    const bars = await this.barRepository.find();

    const productToBars: ProductToBar[] = [];
    for (let i = 0; i < amount; i++) {
      const productToBar = this.productToBarRepository.create({
        product: faker.helpers.arrayElement(products),
        bar: faker.helpers.arrayElement(bars),
        currentStock: faker.number.int({ min: 0, max: 100 }),
        minimumStock: faker.number.int({ min: 0, max: 10 }),
        maximumStock: faker.number.int({ min: 50, max: 200 }),
        isAvailable: faker.datatype.boolean(),
        lastRestocked: faker.date.recent(),
      });
      productToBars.push(productToBar);
    }
    await this.productToBarRepository.save(productToBars);
    console.log(`Seeded ${productToBars.length} product to bars`);
  }
}
