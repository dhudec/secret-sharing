import React from 'react';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import CloseIcon from '@/components/icons/CloseIcon';
import { useStyles } from './styles/ModalHeader.styles';

interface Props {
  title: React.ReactNode;
  close?: () => void;
}

export const ModalHeader = ({ title, close }: Props) => {
  const classes = useStyles();

  return (
    <DialogTitle>
      <Box alignItems="center" display="flex" justifyContent="space-between">
        {typeof title === 'string' ? (
          <Typography id="modal-title" variant="h6">
            {title}
          </Typography>
        ) : (
          title
        )}
        {close && (
          <Box alignItems="center" display="flex" ml={2}>
            <CloseIcon className={classes.close} onClick={close} />
          </Box>
        )}
      </Box>
    </DialogTitle>
  );
};
