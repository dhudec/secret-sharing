import {Controller, Get} from '@nestjs/common';

@Controller('tenants/self/reports/operations')
export class TenantOperationsReportController {
  @Get()
  getReport() {
    return [{
      "entity_type": "token", "operation": "add", "count": 0
    }, {
      "entity_type": "token", "operation": "create", "count": 432
    }, {
      "entity_type": "token", "operation": "not_found", "count": 0
    }, {
      "entity_type": "token", "operation": "proxy", "count": 0
    }, {
      "entity_type": "token", "operation": "react", "count": 0
    }, {
      "entity_type": "token", "operation": "read", "count": 659
    }, {
      "entity_type": "token", "operation": "remove", "count": 234
    }, {
      "entity_type": "token", "operation": "update", "count": 0
    }]
  }
}

