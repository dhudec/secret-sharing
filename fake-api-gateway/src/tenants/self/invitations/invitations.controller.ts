import {
  BadRequestException,
  ForbiddenException,
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Query
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { getData, setData } from './invitations.data';
import { getTenantId } from '../../../auth';

@Controller('tenants/self/invitations')
export class TenantInvitationsController {
  deletedInvitationIds: string[] = [];

  @Post()
  create(
    @Body() createTenantInvitation: Record<string, string>,
    @Headers('Authorization') authorizationHeader: string
  ) {
    if (createTenantInvitation.email === 'badrequest') {
      throw new BadRequestException();
    }

    if (createTenantInvitation.email === 'forbid') {
      throw new ForbiddenException();
    }

    const tenantId = getTenantId(authorizationHeader);
    const newTenantInvitationId = uuid();
    const newTenantInvitation = {
      id: newTenantInvitationId,
      tenant_id: tenantId,
      email: createTenantInvitation.email,
      status: 'PENDING',
      expires_at: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString(), // lol
      created_by: uuid(),
      created_at: new Date().toISOString(),
      modified_by: null,
      modified_at: null,
    };

    setData(getData().concat(newTenantInvitation));

    return newTenantInvitation;
  }

  @Post(':id/resend')
  resend(
    @Param() params: Record<string, string>
  ) {
    const invitations = getData();

    const index = invitations.findIndex((datum) => datum.id === params.id);

    if (index < 0)
      throw new NotFoundException();

    invitations[index].expires_at = new Date(new Date().setDate(new Date().getDate() + 3)).toISOString();
    invitations[index].status = 'PENDING'

    setData(invitations);

    return invitations[index];
  }

  @Get()
  getAll(@Query() query: Record<string, string>): Record<string, unknown> {
    let filteredData = getData();

    if (query?.status) {
      filteredData = filteredData.filter((datum) => datum.status.toLowerCase() === query.status.toLowerCase());
    }

    filteredData = filteredData.filter((datum) => !this.deletedInvitationIds.includes(datum.id));

    this.deletedInvitationIds = [];

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

  @Delete(':id')
  @HttpCode(204)
  delete(@Param() params: Record<string, string>): void {
    const invitationId = params.id;

    if (!invitationId || invitationId === 'notFound')
      throw new NotFoundException();

    this.deletedInvitationIds.push(invitationId);
  }
}
