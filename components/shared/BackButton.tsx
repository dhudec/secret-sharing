import React, { ReactElement } from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import ChevronLeftIcon from '@/components/icons/ChevronLeftIcon';

interface Props {
  route: string;
  text: ReactElement;
}

export const BackButton = ({ route, text }: Props) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(route)}
      startIcon={<ChevronLeftIcon />}
      sx={{
        color: (theme) => theme.palette.action.active,
      }}
    >
      {text}
    </Button>
  );
};
