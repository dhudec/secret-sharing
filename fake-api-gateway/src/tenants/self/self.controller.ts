import {Body, Controller, Get, Put, Headers, NotFoundException} from '@nestjs/common';
import {getData} from '../tenants.data';
import * as jwt from 'jsonwebtoken';

@Controller('tenants/self')
export class TenantsSelfController {
  @Get()
  getSelf(@Headers('Authorization') authHeader: string) {
    const tenantId = this.parseTenantIdFromAuthorizationHeader(authHeader);

    const tenant = getData().find(tenant => tenant.id === tenantId);

    if (!tenant)
      throw new NotFoundException();

    return tenant;
  }

  @Put()
  updateById(
    @Body() updatedTenantProperties: Record<string, unknown>,
    @Headers('Authorization') authHeader: string) {
    const tenantId = this.parseTenantIdFromAuthorizationHeader(authHeader);
    const tenantToUpdate = getData().find(tenant => tenant.id === tenantId);

    if (!tenantToUpdate)
      throw new NotFoundException();

    tenantToUpdate.name = updatedTenantProperties.name as string;

    return tenantToUpdate;
  }

  private parseTenantIdFromAuthorizationHeader(authHeader: string): string {
    const accessToken = authHeader.replace('Bearer ', '');

    const decodedAccessToken = jwt.decode(accessToken);

    return decodedAccessToken['tenant_id'];
  }
}

