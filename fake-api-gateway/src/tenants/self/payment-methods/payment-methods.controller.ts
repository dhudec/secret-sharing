import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { getTenantId } from 'src/auth';
import { v4 as uuid } from 'uuid';
import {
  setData as setTenantSettingsData,
  getData as getTenantSettingsData,
} from '../settings/settings.data';
import { getData, setData } from './payment-methods.data';

@Controller('tenants/self/payment-methods')
export class TenantsPaymentsMethodController {
  @Get()
  getAllPaymentMethods(): any[] {
    return getData();
  }

  @Post()
  create(
    @Body() info: Record<string, unknown>,
    @Headers('Authorization') authorizationHeader: string
  ) {
    const tenantId = getTenantId(authorizationHeader);
    const newPaymentMethod = {
      id: uuid(),
      payment_method_type: info.paymentMethodType,
      card: {
        number: 'xxxx-xxxx-xxxx-4242',
        expiration_month: 10,
        expiration_year: 2022,
      },
      metadata: {
        brand: 'visa',
      },
      created_date: new Date().toISOString(),
    };

    setData([newPaymentMethod]);
    setTenantSettingsData(
      tenantId,
      getTenantSettingsData(tenantId).reduce((acc, tenantSetting) => {
        if (tenantSetting.key === 'has_payment_method') {
          tenantSetting.value = 'true';
        }

        return acc.concat(tenantSetting);
      }, [])
    );

    return newPaymentMethod;
  }
}
