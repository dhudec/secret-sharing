import { Controller, Get, Query } from '@nestjs/common';
import { getData } from './members.data';

@Controller('tenants/self/members')
export class TenantMembersController {
  @Get()
  getAll(@Query() query: Record<string, string>): Record<string, unknown> {
    return {
      pagination: {
        total_items: getData().length,
        page_number: Number(query?.page) || 1,
        page_size: 20,
        total_pages: 10,
      },
      data: getData(),
    };
  }
}
