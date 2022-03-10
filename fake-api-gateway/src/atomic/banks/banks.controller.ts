import {Controller, Get, HttpCode, Post, Query, Param, NotFoundException} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { getData } from './banks.data';

@Controller('atomic/banks')
export class BanksController {
  @Post()
  @HttpCode(201)
  create() {
    return {
      id: uuid(),
      tenant_id: uuid(),
      type: "bank",
      created_by: uuid(),
      created_at: new Date().toISOString(),
    };
  }

  @Get()
  getAll(@Query() query: Record<string, unknown>): Record<string, unknown> {
    const data = getData();

    return {
      pagination: {
        total_items: data.length,
        page_number: Number(query?.page) || 1,
        page_size: 20,
        total_pages: 10,
      },
      data: data,
    };
  }

  @Get(':id')
  getById(@Param() params: Record<string, unknown>): Record<string, unknown> {
    const token = getData().find((datum) => datum.id === params.id);

    if (!token) {
      throw new NotFoundException();
    }

    return token;
  }
}
