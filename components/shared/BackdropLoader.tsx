import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { InitialPageLogoLoader } from '@/components/shared';
import { useStyles } from './styles/BackdropLoader.styles';

interface Props {
  open: boolean;
}

/**
 * Adds an overlay with logo loader that takes proportions of parent,
 * which must have `position: relative`.
 * @param open whether the loader is visible
 * @constructor
 */
export const BackdropLoader = ({ open }: Props) => {
  const classes = useStyles();

  return (
    <Backdrop
      classes={{
        root: classes.backdropRoot,
      }}
      open={open}
    >
      <InitialPageLogoLoader />
    </Backdrop>
  );
};
