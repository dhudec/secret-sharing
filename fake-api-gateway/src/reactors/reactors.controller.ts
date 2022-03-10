import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query
} from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import {getData} from './reactors.data';
import {getData as getFormulaData} from './reactor-formulas.data';

@Controller('reactors')
export class ReactorsController {

  @Get()
  getAll(@Query() query: Record<string, unknown>): Record<string, unknown> {
    let filteredData = getData();

    if (query?.name) {
      filteredData = filteredData.filter(datum => datum.name.toLowerCase().includes((query.name as string).toLowerCase()));
    }

    if (query?.source_token_type) {
      filteredData = filteredData.filter(datum => datum.formula.source_token_type === query.source_token_type as string);
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

  @Post()
  @HttpCode(201)
  create(@Body() newReactor: Record<string, any>) {
    const reactorFormula = getFormulaData()
      .filter(datum => datum.id === newReactor.formula.id)[0];

    return {
      id: uuid(),
      name: newReactor.name,
      created_at: new Date().toISOString(),
      modified_at: new Date().toISOString(),
      formula: reactorFormula,
      configuration: newReactor.configuration,
    }
  }

  @Get(':id')
  getById(@Param() params: Record<string, unknown>): Record<string, unknown> {
    const reactor = getData().find((datum) => datum.id === params.id);

    if (!reactor) {
      throw new NotFoundException();
    }

    return reactor;
  }

  @Put(':id')
  updateById(@Param('id') id: string, @Body() updatedReactorProperties: Record<string, unknown>) {
    let updatedReactor;

    const updatedData = getData().reduce((acc, datum) => {
      if (datum.id === id) {
        updatedReactor = {
          ...datum,
          ...updatedReactorProperties
        }
        return acc.concat(updatedReactor);
      }

      return acc.concat(datum);
    }, []);

    return updatedReactor;
  }

  @Delete(':id')
  @HttpCode(204)
  deleteById(@Param('id') id: string) {
    return;
  }
}
