import { ReactElement, useState } from 'react';
import { useTranslation } from 'next-i18next';

export interface ConfirmModalHooksProps {
  onConfirm: () => unknown;
  onCancel?: () => unknown;
  /**
   * @default translation of common.confirm
   */
  confirmLabel?: ReactElement;
  /**
   * @default translation of common.cancel
   */
  cancelLabel?: ReactElement;
  confirmDisabled?: boolean;
  cancelDisabled?: boolean;
}

export const useConfirmModal = ({
  onConfirm,
  onCancel = () => undefined,
  confirmLabel: _confirmLabel,
  cancelLabel: _cancelLabel,
  confirmDisabled: _confirmDisabled,
  cancelDisabled: _cancelDisabled,
}: ConfirmModalHooksProps) => {
  const [awaiting, setAwaiting] = useState(false);
  const { t } = useTranslation('common');

  const confirmLabel = _confirmLabel || t('confirm');
  const cancelLabel = _cancelLabel || t('cancel');

  const handleCancel = async () => {
    setAwaiting(true);

    try {
      await onCancel();
    } finally {
      setAwaiting(false);
    }
  };
  const handleConfirm = async () => {
    setAwaiting(true);

    try {
      await onConfirm();
    } finally {
      setAwaiting(false);
    }
  };

  const cancelDisabled = _cancelDisabled || awaiting;
  const confirmDisabled = _confirmDisabled || awaiting;

  return {
    awaiting,
    handleConfirm,
    handleCancel,
    confirmLabel,
    cancelLabel,
    confirmDisabled,
    cancelDisabled,
  };
};
