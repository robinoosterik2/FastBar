import { Injectable, ConflictException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Settings } from './entities/settings.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.dataSource.transaction(async (manager) => {
      const userRepo = manager.getRepository(User);
      const settingsRepo = manager.getRepository(Settings);

      const userExists = await userRepo.findOne({
        where: { email: createUserDto.email },
      });

      if (userExists) {
        throw new ConflictException('User already exists');
      }

      const settings = settingsRepo.create();
      const user = userRepo.create(createUserDto);
      // Do not need to save settings, bcs cascade
      user.settings = settings;
      return userRepo.save(user);
    });
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  findById(id: string) {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  findByEmail(email: string) {
    return this.usersRepository.findOne({
      where: { email: email.toLowerCase() },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.usersRepository.delete(id);
  }

  hasRole(user: User, roleString: string): boolean {
    const roles = user.roles;
    for (const role of roles) {
      if (role.name === roleString) {
        return true;
      }
    }
    return false;
  }
}
