import React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { InitialPageLogoLoader } from '@/components/shared/InitialPageLogoLoader';
import { useStyles } from '@/components/shared/styles/LoadingPage.styles';

interface Props {
  logo?: boolean;
}

export const LoadingPage = ({ logo }: Props) => {
  const classes = useStyles();

  return (
    <Modal open>
      <Fade in>
        <Box className={classes.root}>
          {logo && <InitialPageLogoLoader height={256} width={256} />}
        </Box>
      </Fade>
    </Modal>
  );
};
