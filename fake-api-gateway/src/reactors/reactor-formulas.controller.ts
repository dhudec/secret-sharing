import {
  Controller,
  Get, NotFoundException, Param,
  Query,
} from '@nestjs/common';
import {getData} from './reactor-formulas.data';

@Controller('reactor-formulas')
export class ReactorsFormulasController {

  @Get()
  getAll(@Query() query: Record<string, unknown>): Record<string, unknown> {
    let filteredData = getData();

    if (query?.name) {
      filteredData = filteredData.filter(datum => datum.name.toLowerCase().includes((query.name as string).toLowerCase()));
    }

    if (query?.source_token_type) {
      filteredData = filteredData.filter(datum => datum.source_token_type === query.source_token_type as string);
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
    const formula = getData().find((datum) => datum.id === params.id);

    if (!formula) {
      throw new NotFoundException();
    }

    return formula;
  }
}
