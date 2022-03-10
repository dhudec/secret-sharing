import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import { useConfirmModal } from './ConfirmModal.hooks';
import type { ConfirmModalHooksProps } from './ConfirmModal.hooks';
import { Modal } from './Modal';
import { ModalContent } from './ModalContent';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import { useStyles } from './styles/ConfirmModal.styles';

export interface ConfirmModalProps extends ConfirmModalHooksProps {
  title: string;
  open: boolean;
  /**
   * @default true
   */
  cancellable?: boolean;
  className?: string;
  /**
   * @default false
   */
  isDangerAction?: boolean;
  fullWidth?: boolean;
}

export const ConfirmModal: FC<ConfirmModalProps> = ({
  title,
  open,
  cancellable = true,
  className,
  isDangerAction = false,
  children,
  fullWidth = false,
  ...hookProps
}) => {
  const {
    handleConfirm,
    handleCancel,
    cancelLabel,
    confirmLabel,
    cancelDisabled,
    confirmDisabled,
  } = useConfirmModal(hookProps);
  const classes = useStyles();

  return (
    <Modal
      className={className}
      fullWidth={fullWidth}
      onClose={cancellable ? handleCancel : undefined}
      open={open}
    >
      <ModalHeader title={title} />
      <ModalContent>{children}</ModalContent>
      <ModalFooter>
        {cancellable && (
          <Box mr={2}>
            <Button
              color="primary"
              disabled={cancelDisabled}
              onClick={handleCancel}
              variant="outlined"
            >
              {cancelLabel}
            </Button>
          </Box>
        )}
        <Button
          className={clsx({ [classes.dangerAction]: isDangerAction })}
          color="primary"
          disabled={confirmDisabled}
          onClick={handleConfirm}
          variant="contained"
        >
          {confirmLabel}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
