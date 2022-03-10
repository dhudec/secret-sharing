import {Controller, Get, Query} from '@nestjs/common';
import {getData} from './logs.data';

@Controller('logs')
export class LogsController {
  @Get()
  getAll(@Query() query: Record<string, string>): Record<string, unknown> {

    let data = getData();

    if (query.entity_type) {
      data = data.filter(d => d.entity_type === query.entity_type);
    }
    if (query.entity_id) {
      data = data.filter(d => d.entity_id === query.entity_id);
    }
    if (query.start_date) {
      data = data.filter(d => new Date(query.start_date) <= new Date(d.created_at));
    }
    if (query.end_date) {
      data = data.filter(d => new Date(query.end_date) >= new Date(d.created_at));
    }

    return {
      pagination: {
        total_items: data.length,
        page_number: Number(query?.page) || 1,
        page_size: 20,
        total_pages: 10,
      },
      data,
    };
  }

  @Get('entity-types')
  getAllEntityTypes() {
    return [
      { display_name: 'Application', value: 'application' },
      {
        display_name: 'Bank',
        value: 'bank',
      },
      { display_name: 'Card', value: 'card' },
      {
        display_name: 'Proxy',
        value: 'proxy',
      },
      { display_name: 'Reactor', value: 'reactor' },
      {
        display_name: 'ReactorFormula',
        value: 'reactorformula',
      },
      { display_name: 'Tenant', value: 'tenant' },
      {
        display_name: 'TenantPaymentMethod',
        value: 'tenantpaymentmethod',
      },
      { display_name: 'Token', value: 'token' },
    ];
  }
}
