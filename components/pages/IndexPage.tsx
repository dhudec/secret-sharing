import React from 'react';
import { CreateSecret } from '@/components/pages/CreateSecret';
import { useIndexPage } from '@/components/pages/IndexPage.hooks';
import { ShareSecret } from '@/components/pages/ShareSecret';

const IndexPageC = () => {
  const { isSharePage, secretId, ...hookResponse } = useIndexPage();

  return isSharePage ? (
    <ShareSecret secretId={secretId} />
  ) : (
    <CreateSecret {...hookResponse} />
  );
};

export const IndexPage = IndexPageC;
