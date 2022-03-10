import { useState } from 'react';

export const useOpenState = (defaultOpen = false) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, setIsOpen, open, close, toggle] as const;
};
