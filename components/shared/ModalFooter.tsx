import React, { FC } from 'react';
import DialogActions from '@mui/material/DialogActions';

export const ModalFooter: FC = ({ children }) => (
  <DialogActions>{children}</DialogActions>
);
