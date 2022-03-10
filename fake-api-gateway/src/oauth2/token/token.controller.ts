import { Controller, HttpCode, Body, Post } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Controller('oauth2/token')
export class OAuth2TokenController {
  @Post()
  @HttpCode(200)
  create(@Body() tokenRequestParams: Record<string, unknown>) {
    const access_token = jwt.sign({
      tenant_id: tokenRequestParams.tenant_id
    }, 'secret');

    return {
      access_token,
      expires_in: 9999999999999
    };
  }
}
