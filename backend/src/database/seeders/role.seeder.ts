import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
import { Role } from 'src/roles/entities/role.entity';

@Injectable()
export class RoleSeeder {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async seed() {
    console.log(`Seeding roles...`);
    const roleTypes = ['Admin', 'Barowner', 'Barkeeper', 'User'];

    const roles: Role[] = [];
    for (let i = 0; i < 4; i++) {
      const name = roleTypes[i];
      const description = faker.lorem.sentence();

      const role = this.roleRepository.create({
        name,
        description,
      });
      roles.push(role);
    }
    await this.roleRepository.save(roles);
    console.log(`Seeded ${roles.length} roles.`);
  }
}
