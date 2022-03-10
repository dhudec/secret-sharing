import React from 'react';
import {
  DrawerButton,
  withLayout as withSharedLayout,
} from '@basis-theory/basis-theory-portal-commons/src/components';
import Box from '@mui/material/Box';
import ApplicationIcon from '@/components/icons/ApplicationIcon';
import CodeCircleIcon from '@/components/icons/CodeCircleIcon';
import DashboardIcon from '@/components/icons/DashboardIcon';
import DocsIcon from '@/components/icons/DocsIcon';
import MemberIcon from '@/components/icons/MemberIcon';
import ReactorIcon from '@/components/icons/ReactorIcon';
import RocketIcon from '@/components/icons/RocketIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';
import Token1Icon from '@/components/icons/Token1Icon';
import { TenantMenu } from '@/components/layout/TenantMenu';
import { UserMenu } from '@/components/layout/UserMenu';

const withLayout = withSharedLayout({
  toolbarContent: (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
    >
      <TenantMenu />
      {/* span placeholder to not mess with design */}
      <span />
      <UserMenu />
    </Box>
  ),
  drawerContent: (
    <>
      <DrawerButton
        href="/getting-started"
        icon={<RocketIcon color="primary" />}
        primaryText="Getting Started"
      />
      <DrawerButton
        href="/dashboard"
        icon={<DashboardIcon color="primary" />}
        primaryText="Dashboard"
      />
      <DrawerButton
        href="/applications"
        icon={<ApplicationIcon color="primary" />}
        primaryText="Applications"
      />
      <DrawerButton
        href="/tokens"
        icon={<Token1Icon color="primary" />}
        primaryText="Tokens"
      />
      <DrawerButton
        href="/reactors"
        icon={<ReactorIcon color="primary" />}
        primaryText="Reactors"
      />
      <DrawerButton
        external
        href="/sandbox"
        icon={<CodeCircleIcon color="primary" />}
        primaryText="Sandbox"
      />
      <DrawerButton
        external
        href="https://docs.basistheory.com"
        icon={<DocsIcon color="primary" />}
        primaryText="Docs"
      />
      <DrawerButton
        href="/members"
        icon={<MemberIcon color="primary" />}
        primaryText="Members"
      />
      <DrawerButton
        href="/settings"
        icon={<SettingsIcon color="primary" />}
        primaryText="Settings"
      />
    </>
  ),
});

export { withLayout };
