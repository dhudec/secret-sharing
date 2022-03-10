import {Controller, Get, Query} from '@nestjs/common';
import {getData} from "./permissions.data";

@Controller('permissions')
export class PermissionsController {

  @Get()
  getAll(@Query() query: Record<string, unknown>) {
    return getData().filter(datum => {
      if (query?.application_type) {
        return datum.application_types.includes(query.application_type as string);
      }
      return true;
    });
  }

}
