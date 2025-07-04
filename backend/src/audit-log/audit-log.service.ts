import { Injectable } from '@nestjs/common';
import { _CreateAuditLogDto } from './dto/create-audit-log.dto';
import { _UpdateAuditLogDto } from './dto/update-audit-log.dto';

@Injectable()
export class AuditLogService {
  create(_createAuditLogDto: _CreateAuditLogDto) {
    return 'This action adds a new auditLog';
  }

  findAll() {
    return `This action returns all auditLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auditLog`;
  }

  update(id: number, _updateAuditLogDto: _UpdateAuditLogDto) {
    return `This action updates a #${id} auditLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditLog`;
  }
}
