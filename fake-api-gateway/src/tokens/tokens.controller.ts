import {
  Controller,
  HttpCode,
  Post,
  Get,
  Query,
  Param,
  Body,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { addEncryption, getData } from './tokens.data';

@Controller('tokens')
export class TokensController {
  @Post()
  @HttpCode(201)
  create(@Body() payload: any) {
    const token = getData()[0];

    const created = {
      id: token.id,
      tenant_id: token.tenant_id,
      type: token.type,
      created_by: token.created_by,
      created_at: new Date().toISOString(),
    };

    if (payload.encryption) {
      const encrypted = addEncryption(
        token.id,
        payload.data,
        payload.encryption
      );
      return encrypted;
    }

    return created;
  }

  @Get()
  getAll(@Query() query: Record<string, unknown>): Record<string, unknown> {
    let filteredData = getData();

    if (query?.type) {
      filteredData = filteredData.filter((datum) => datum.type === query.type);
    }

    return {
      pagination: {
        total_items: filteredData.length,
        page_number: Number(query?.page) || 1,
        page_size: 20,
        total_pages: 10,
      },
      data: filteredData,
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

  @Get(':id/decrypt')
  getDecryptedById(
    @Param() params: Record<string, unknown>
  ): Record<string, unknown> {
    const token = getData().find((datum) => datum.id === params.id);

    if (!token) {
      throw new NotFoundException();
    }

    return token;
  }

  @Post('search')
  @HttpCode(200)
  search(@Body() payload: any) {
    // this is a dumbed-down version of token search to enable some light UI testing
    let tokens = getData();

    if (payload.query) {
      if (payload.query.includes('error')) throw new BadRequestException();

      tokens = tokens.filter(
        (token) =>
          token.data?.includes(payload.query) || token?.type == payload.query
      );
    }

    return {
      data: tokens,
      pagination: {
        total_items: tokens.length,
        page_number: Number(payload?.page) || 1,
        page_size: payload?.size || 20,
        total_pages: 10,
      },
    };
  }
}
