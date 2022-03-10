import React from 'react';
import type { InputAdornmentProps } from '@mui/material/InputAdornment';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@/components/icons/CloseIcon';
import SearchIcon from '@/components/icons/SearchIcon';

interface Props {
  position?: InputAdornmentProps['position'];
  active: boolean;
  onClear: () => unknown;
}

export const SearchInputAdornment = ({
  position = 'end',
  active,
  onClear,
}: Props) => (
  <InputAdornment position={position}>
    {active ? (
      <CloseIcon onClick={() => onClear()} style={{ cursor: 'pointer' }} />
    ) : (
      <SearchIcon />
    )}
  </InputAdornment>
);
