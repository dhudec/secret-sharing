import {
  Controller,
  Get,
  Query,
  Param,
  Body,
  Put,
  Delete,
  HttpCode,
  Post,
  Headers,
  NotFoundException
} from '@nestjs/common';
import {getData} from './application.data';
import {v4 as uuid} from 'uuid';

@Controller('applications')
export class ApplicationsController {
  @Get()
  getAll(@Query() query: Record<string, unknown>): Record<string, unknown> {

    let filteredData = getData();

    if (query?.owner_id) {
      filteredData = filteredData.filter(datum => datum.owner_id === query.owner_id);
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

  @Get('key')
  getByKey(@Headers('BT-API-KEY') apiKey: string): Record<string, unknown> {
    const app = getData().find((datum) => datum.key === apiKey);

    if(!app) {
      throw new NotFoundException()
    }
    return app;
  }

  @Get(':id')
  getById(@Param() params: Record<string, unknown>): Record<string, unknown> {
    const app = getData().find((datum) => datum.id === params.id);

    if (!app) {
      throw new NotFoundException()
    }

    return app;
  }

  @Put(':id')
  updateById(@Param('id') id: string, @Body() updatedApplicationProperties: Record<string, unknown>) {
    let updatedApplication;

    const updatedData = getData().reduce((acc, datum) => {
      if (datum.id === id) {
        updatedApplication = {
          ...datum,
          ...updatedApplicationProperties
        }
        return acc.concat(updatedApplication);
      }

      return acc.concat(datum);
    }, []);

    return updatedApplication;
  }

  @Delete(':id')
  @HttpCode(204)
  deleteById(@Param('id') id: string) {
    return;
  }

  @Post()
  @HttpCode(201)
  create(@Body() newApplication: Record<string, unknown>) {
    const fullNewApplication = {
      id: uuid(),
      owner_id: (newApplication.owner_id ?? uuid()) as string,
      name: newApplication.name as string,
      type: newApplication.type as string,
      permissions: newApplication.permissions as string[],
      created_at: '2021-03-22T17:11:13.156Z',
      modified_at: '2021-03-22T17:11:13.156Z',
      key: uuid(),
    }

    const applications = getData();
    applications.push(fullNewApplication);

    return fullNewApplication;
  }

  @Post(':id/regenerate')
  @HttpCode(200)
  regenerateApiKey(@Param('id') id: string) {
    let app = undefined;
    getData().map(datum => {
      if (datum.id === id) {
        app = {
          ...datum,
          key: uuid(),
        }
        return app;
      }
      return datum;
    })

    return app;
  }
}
