import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuditLogService } from './audit-log.service';
import { _CreateAuditLogDto } from './dto/create-audit-log.dto';
import { _UpdateAuditLogDto } from './dto/update-audit-log.dto';

@Controller('audit-log')
export class AuditLogController {
  constructor(private readonly auditLogService: AuditLogService) {}

  @Post()
  create(@Body() createAuditLogDto: _CreateAuditLogDto) {
    return this.auditLogService.create(createAuditLogDto);
  }

  @Get()
  findAll() {
    return this.auditLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditLogService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAuditLogDto: _UpdateAuditLogDto,
  ) {
    return this.auditLogService.update(+id, updateAuditLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auditLogService.remove(+id);
  }
}
