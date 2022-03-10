import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications/applications.controller';
import { BanksController } from './atomic/banks/banks.controller';
import { CardsController } from './atomic/cards/cards.controller';
import { HealthzController } from './healthz/healthz.controller';
import { InvitationsController } from './invitations/invitations.controller';
import { LogsController } from './logs/logs.controller';
import { OAuth2TokenController } from './oauth2/token/token.controller';
import { PermissionsController } from './permissions/permissions.controller';
import { ReactorsController } from './reactors/reactors.controller';
import { ReactorsFormulasController } from './reactors/reactor-formulas.controller';
import { TenantInvitationsController } from './tenants/self/invitations/invitations.controller';
import { TenantMembersController } from './tenants/self/members/members.controller';
import { TenantOperationsReportController } from './tenants/self/reports/operations/operations.controller';
import { TenantsController } from './tenants/tenants.controller';
import { TenantsPaymentsMethodController } from './tenants/self/payment-methods/payment-methods.controller';
import { TenantsReportsController } from './tenants/self/reports/usage/usage.controller';
import { TenantsSelfController } from './tenants/self/self.controller';
import { TenantsSettingsController } from './tenants/self/settings/settings.controller';
import { TokensController } from './tokens/tokens.controller';

@Module({
  imports: [],
  controllers: [
    ApplicationsController,
    BanksController,
    CardsController,
    HealthzController,
    InvitationsController,
    LogsController,
    OAuth2TokenController,
    PermissionsController,
    ReactorsController,
    ReactorsFormulasController,
    TenantInvitationsController,
    TenantMembersController,
    TenantOperationsReportController,
    TenantsController,
    TenantsPaymentsMethodController,
    TenantsReportsController,
    TenantsSelfController,
    TenantsSettingsController,
    TokensController
  ],
  providers: [],
})
export class AppModule {}
