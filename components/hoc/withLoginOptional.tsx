import React, { useEffect, useState } from 'react';
import type { NextComponentType } from 'next';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { CreateFirstTenant } from '@/components/onboarding';
import { LoadingPage } from '@/components/shared';
import Error from '@/pages/_error';
import { withLayout } from './withLayout';

export const withLoginOptional = (
  WrappedComponent,
  withLayoutEnabled = true
): NextComponentType => {
  let WrappedComponentWithHocs = WrappedComponent;

  if (withLayoutEnabled) {
    WrappedComponentWithHocs = withLayout(WrappedComponent);
  }

  const WithLoginOptional = (props) => {
    const [session, isSessionLoading] = useSession();
    const [oldUserId, setOldUserId] = useState<string>();
    const router = useRouter();
    const isTenantIdNotOnSession =
      !isSessionLoading && session && !session.tenantId;

    const userId = (session?.user as { id: string })?.id as string;

    useEffect(() => {
      if (userId) {
        if (oldUserId && userId !== oldUserId) {
          // if we detect user session change, we need to refresh the page to reload with their own data
          // this is necessary for edge cases, where an user can have multiple login tabs open,
          // and they login with different accounts simultaneously
          router.reload();
        }

        setOldUserId(userId);
      }
    }, [oldUserId, router, userId]);

    if (isSessionLoading) {
      return <LoadingPage />;
    }

    if (session?.error) {
      // if there is a session error (e.g. refresh token error)

      return <Error statusCode={401} />;
    }

    if (isTenantIdNotOnSession) {
      return <CreateFirstTenant />;
    }

    return <WrappedComponentWithHocs {...props} />;
  };

  WithLoginOptional.displayName = `WithLoginOptional(${WrappedComponent.name})`;

  return WithLoginOptional;
};
