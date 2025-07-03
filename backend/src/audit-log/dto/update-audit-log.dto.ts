import { PartialType } from '@nestjs/swagger';
import { _CreateAuditLogDto } from './create-audit-log.dto';

export class _UpdateAuditLogDto extends PartialType(_CreateAuditLogDto) {}
