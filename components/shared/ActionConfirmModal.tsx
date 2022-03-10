import React, { ReactElement, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { ConfirmModal } from '@/components/shared';
import type { ConfirmModalProps } from '@/components/shared';

export interface Props extends ConfirmModalProps {
  nameToConfirm: string;
  message: ReactElement;
  messageCaption?: ReactElement;
  confirmCaption?: ReactElement;
  confirmTextfieldLabel: ReactElement;
  confirmTextfieldHelperText?: ReactElement;
}

export const ActionConfirmModal = ({
  nameToConfirm,
  message,
  messageCaption,
  confirmCaption,
  confirmDisabled,
  confirmTextfieldLabel,
  confirmTextfieldHelperText,
  onCancel,
  onConfirm,
  ...confirmProps
}: Props) => {
  const [confirmName, setConfirmName] = useState<string>('');
  const [isAwaiting, setIsAwaiting] = useState<boolean>(false);

  const namesMatch = confirmName === nameToConfirm;
  const isConfirmButtonDisabled = confirmDisabled || isAwaiting || !namesMatch;

  const resetConfirmName = (f: () => unknown) => async () => {
    try {
      setIsAwaiting(true);
      await f();
      setConfirmName('');
    } finally {
      setIsAwaiting(false);
    }
  };

  const handleEnter = async (event) => {
    if (event.key === 'Enter' && !isConfirmButtonDisabled) {
      await resetConfirmName(onConfirm)();

      event.stopPropagation();
    }
  };

  return (
    <ConfirmModal
      {...confirmProps}
      confirmDisabled={isConfirmButtonDisabled}
      onCancel={resetConfirmName(onCancel)}
      onConfirm={resetConfirmName(onConfirm)}
    >
      <Box>{message}</Box>
      {messageCaption && <Box>{messageCaption}</Box>}
      {confirmCaption && <Box mt={4}>{confirmCaption}</Box>}
      <Box mt={2}>
        <Divider light />
      </Box>
      <Box mt={4}>
        <TextField
          fullWidth
          helperText={confirmTextfieldHelperText}
          label={confirmTextfieldLabel}
          onChange={(e) => setConfirmName(e.target.value)}
          onKeyDown={handleEnter}
          required
          size="small"
          value={confirmName}
          variant="outlined"
        />
      </Box>
    </ConfirmModal>
  );
};
