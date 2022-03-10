import React, { useState, ReactNode } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';

interface Props {
  label: ReactNode;
  value?: string;
  onChange?: TextFieldProps['onChange'];
}

export const HiddenInputTextField = ({ label, value, onChange }: Props) => {
  const [showInput, setShowInput] = useState(false);
  const handleClickShowInput = () => setShowInput(!showInput);

  return (
    <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowInput} size="large">
              {showInput ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
      label={label}
      onChange={onChange}
      required
      type={showInput ? 'text' : 'password'}
      value={value}
      variant="outlined"
    />
  );
};
