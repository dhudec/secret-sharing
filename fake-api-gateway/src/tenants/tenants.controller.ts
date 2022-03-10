import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Query
} from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import {getData} from './tenants.data';

@Controller('tenants')
export class TenantsController {
  @Get()
  getAll(@Query() query: Record<string, unknown>): Record<string, unknown> {
    const tenants = getData();

    return {
      pagination: {
        total_items: tenants.length,
        page_number: Number(query?.page) || 1,
        page_size: 20,
        total_pages: 10,
      },
      data: tenants,
    };
  }

  @Delete(':id')
  @HttpCode(204)
  deleteSelf() {
    return;
  }

  @Post()
  @HttpCode(201)
  create(@Body() newTenant: Record<string, unknown>) {
    const tenants = getData();
    const createdTenant = {
      id: uuid(),
      owner_id: uuid(),
      name: newTenant.name as string,
      created_at: '2021-03-22T17:11:13.156Z',
      modified_at: '2021-03-22T17:11:13.156Z',
    };

    tenants.push(createdTenant);

    return createdTenant;
  }
}
