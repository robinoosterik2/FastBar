import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order, OrderStatus } from 'src/order/entities/order.entity';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { User } from 'src/users/entities/user.entity';
import { Bar } from 'src/bar/entities/bar.entity';
import { OrderProduct } from 'src/order-product/entities/order-product.entity';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class OrderSeeder {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Bar)
    private readonly barRepository: Repository<Bar>,
    @InjectRepository(OrderProduct)
    private readonly orderProductRepository: Repository<OrderProduct>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async seed(amount: number) {
    console.log(`Seeding ${amount} orders...`);

    const users = await this.userRepository.find();
    const bars = await this.barRepository.find();
    const products = await this.productRepository.find();

    const orders: Order[] = [];
    const orderProducts: OrderProduct[] = [];

    for (let i = 0; i < amount; i++) {
      const subtotal = parseFloat(faker.commerce.price());
      const taxAmount = subtotal * 0.05;
      const tipAmount = subtotal * 0.15;
      const discountAmount = subtotal * 0.1;
      const total = subtotal + taxAmount + tipAmount - discountAmount;

      const order = this.orderRepository.create({
        orderNumber: faker.string.uuid(),
        subtotal,
        taxAmount,
        tipAmount,
        discountAmount,
        total,
        status: faker.helpers.arrayElement(Object.values(OrderStatus)),
        estimatedReadyTime: faker.date.future(),
        completedAt: faker.date.recent(),
        user: faker.helpers.arrayElement(users),
        bar: faker.helpers.arrayElement(bars),
      });
      orders.push(order);

      // Create order products for each order
      const numProducts = faker.number.int({ min: 1, max: 5 });
      for (let j = 0; j < numProducts; j++) {
        const product = faker.helpers.arrayElement(products);
        const quantity = faker.number.int({ min: 1, max: 3 });
        const price = product.price; // Assuming product has a price
        const orderProduct = this.orderProductRepository.create({
          order,
          product,
          quantity,
          unitPrice: price,
          lineTotal: quantity * price,
        });
        orderProducts.push(orderProduct);
      }
    }
    await this.orderRepository.save(orders);
    await this.orderProductRepository.save(orderProducts);
    console.log(
      `Seeded ${orders.length} orders and ${orderProducts.length} order products`,
    );
  }
}
