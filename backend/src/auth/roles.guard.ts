import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../roles/roles.decorator';
import { User } from 'src/users/entities/user.entity';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';

interface AuthRequest extends Request {
  user: User;
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles || requiredRoles.length === 0) {
      return true; // no roles required
    }

    const { user } = context.switchToHttp().getRequest<AuthRequest>();
    const roles = await user.roles;
    if (!user || !roles) {
      throw new ForbiddenException('No user or roles found');
    }
    for (const role of roles) {
      if (role.name !== requiredRoles[0]) {
        throw new ForbiddenException('Insufficient role');
      }
    }

    return true;
  }
}
