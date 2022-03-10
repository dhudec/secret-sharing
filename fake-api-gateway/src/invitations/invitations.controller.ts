import { ConflictException, Controller, HttpCode, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { getData } from './invitations.data';

@Controller('invitations')
export class InvitationsController {

  @Post(':id/accept')
  @HttpCode(200)
  acceptInvitation(@Param() params: Record<string, unknown>, @Query() query: Record<string, unknown>) {
    if (query?.token !== "valid")
      throw new NotFoundException();

    const invitationId = params.id;

    if (invitationId === 'conflict'){
      throw new ConflictException({
        tenant_id: 'F8BB783A-0D6E-4CD0-845B-E3061BE9BCB2',
        tenant_name: 'Tenant B',
        role: 'ADMIN',
      });
    }

    const invitation = getData().find((datum) => datum.id === invitationId);

    if (!invitation) {
      throw new NotFoundException();
    }

    return {
      ...invitation,
      id: undefined,
    };
  }

}
