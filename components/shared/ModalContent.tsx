import React, { FC } from 'react';
import DialogContent from '@mui/material/DialogContent';

export const ModalContent: FC = ({ children }) => (
  <DialogContent dividers>{children}</DialogContent>
);
