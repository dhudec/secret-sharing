import { Controller, Get, Headers } from '@nestjs/common';
import { getTenantId } from 'src/auth';
import { getData } from './usage.data';

@Controller('tenants/self/reports/usage')
export class TenantsReportsController {
  @Get()
  getUsage(@Headers('Authorization') authorizationHeader: string) {
    const tenantId = getTenantId(authorizationHeader);

    return getData(tenantId);
  }
}
