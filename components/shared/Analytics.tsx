import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import Head from 'next/head';
import { useConfig } from '@/components/hooks';

export const Analytics = (): JSX.Element | null => {
  const [dataDomain, setDataDomain] = useState<string>();
  const { analyticsIntegrity } = useConfig();
  const [session] = useSession();

  useEffect(() => {
    setDataDomain(window.location.hostname);
  }, []);

  if (!dataDomain || !analyticsIntegrity) {
    // eslint-disable-next-line unicorn/no-null
    return null;
  }

  return (
    <>
      <Head>
        <script
          async
          crossOrigin=""
          data-api="https://analytics.basistheory.com/api/event"
          data-domain={dataDomain}
          defer
          integrity={analyticsIntegrity}
          src="https://cdn.basistheory.com/javascript/analytics.js"
        />
      </Head>
      <div hidden id="ga-user-email">
        {session?.user?.email}
      </div>
    </>
  );
};
