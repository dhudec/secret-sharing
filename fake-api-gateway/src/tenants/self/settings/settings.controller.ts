import { Controller, Get, Headers, Param } from '@nestjs/common';
import { getTenantId } from '../../../auth';
import { getData } from './settings.data';

@Controller('tenants/self/settings')
export class TenantsSettingsController {
  @Get(':key')
  getTenantSettingById(
    @Param() params: Record<string, unknown>,
    @Headers('Authorization') authorizationHeader: string
  ) {
    const tenantId = getTenantId(authorizationHeader);

    return getData(tenantId).find((datum) => datum.key === params.key);
  }
}
