import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { User } from 'src/users/entities/user.entity';
import { Status } from 'src/users/entities/user.entity';
import { Settings } from 'src/users/entities/settings.entity';
import { Role } from 'src/roles/entities/role.entity';

@Injectable()
export class UserSeeder {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Settings)
    private readonly settingsRepository: Repository<Settings>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async seed(amount: number) {
    console.log(`Seeding ${amount} users...`);

    const settings = this.settingsRepository.create({});
    const status = faker.helpers.arrayElement([
      Status.ACTIVE,
      Status.BANNED,
      Status.INACTIVE,
      Status.PENDING,
    ]);

    const roles = await this.roleRepository.find();

    if (roles.length === 0) {
      throw new Error('No roles found');
    }

    const users: User[] = [];
    for (let i = 0; i < amount; i++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const email = faker.internet.email({ firstName, lastName }).toLowerCase();
      const dob = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
      const hashedPassword = faker.internet.password();

      const user = this.userRepository.create({
        firstName,
        lastName,
        email,
        hashedPassword,
        status,
        settings,
        emailVerified: faker.datatype.boolean(),
        lastLoginAt: faker.date.recent({ days: 30 }),
        dateOfBirth: dob,
      });
      users.push(user);
    }
    await this.userRepository.save(users);
    console.log(`Seeded ${users.length} users.`);
  }
}
