import React, { FC, forwardRef, useMemo } from 'react';
import Dialog from '@mui/material/Dialog';
import type { DialogProps } from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import type { SlideProps } from '@mui/material/Slide';
import type { TransitionProps } from '@mui/material/transitions';
import clsx from 'clsx';
import { useStyles } from './styles/Modal.styles';

const transitionFactory = (direction: SlideProps['direction']) => {
  const Transition = forwardRef(
    (
      props: TransitionProps & {
        children: React.ReactElement<unknown, string>;
      },
      ref: React.Ref<unknown>
    ) => <Slide direction={direction} ref={ref} {...props} />
  );

  Transition.displayName = 'Transition';

  return Transition;
};

export interface ModalProps extends DialogProps {
  className?: string;
  direction?: SlideProps['direction'];
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  direction = 'up',
  ...props
}) => {
  const classes = useStyles();

  const Transition = useMemo(() => transitionFactory(direction), [direction]);

  return (
    <Dialog
      TransitionComponent={Transition}
      aria-describedby="modal-description"
      aria-labelledby="modal-title"
      className={clsx(classes.main, className)}
      closeAfterTransition
      scroll="paper"
      {...props}
    >
      {children}
    </Dialog>
  );
};
