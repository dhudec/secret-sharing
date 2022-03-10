import { Controller, Get } from '@nestjs/common';

@Controller('healthz')
export class HealthzController {
  @Get()
  getHealthz(): { status: string } {
    return {
      status: 'ok'
    };
  }
}
