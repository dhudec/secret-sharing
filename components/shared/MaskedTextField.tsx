import React from 'react';
import TextField from '@mui/material/TextField';
import type { TextFieldProps } from '@mui/material/TextField';
import MaskedInput from 'react-text-mask';
import type { MaskedInputProps } from 'react-text-mask';

interface MaskedInputWrapperProps extends Pick<MaskedInputProps, 'mask'> {
  inputRef: (ref: HTMLInputElement | null) => void;
}

// eslint-disable-next-line react/display-name
const MaskedInputWrapper = React.forwardRef<
  MaskedInput,
  MaskedInputWrapperProps
>(({ mask, ...rest }, ref) => {
  const setRef: React.LegacyRef<MaskedInput> = (refArg) => {
    if (refArg && ref && typeof ref === 'function') {
      ref(refArg.inputElement as unknown as MaskedInput);
    }

    if (ref && typeof ref === 'function') {
      // refs are supposed to be null
      // eslint-disable-next-line unicorn/no-null
      ref(null);
    }
  };

  return <MaskedInput {...rest} mask={mask} ref={setRef} />;
});

type MaskedTextFieldProps = TextFieldProps &
  Pick<
    MaskedInputProps,
    'guide' | 'placeholderChar' | 'keepCharPositions' | 'pipe' | 'showMask'
  > &
  Required<Pick<MaskedInputProps, 'mask'>>;

const MaskedTextField = ({
  mask,
  pipe,
  guide,
  showMask,
  placeholderChar,
  keepCharPositions,
  ...rest
}: MaskedTextFieldProps) => (
  <TextField
    InputProps={{
      inputComponent: MaskedInputWrapper,
      inputProps: {
        mask,
        pipe,
        guide,
        showMask,
        placeholderChar,
        keepCharPositions,
      },
    }}
    {...rest}
  />
);

const phoneNumberMask = [
  '(',
  /[1-9]/u,
  /\d/u,
  /\d/u,
  ')',
  ' ',
  /\d/u,
  /\d/u,
  /\d/u,
  '-',
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
];

const unmaskDigitsOnly = (value: string) => value.replace(/\D+/gu, '');

const routingNumberMask = [
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
];

const accountNumberMask = [
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
  /\d/u,
];

export {
  MaskedTextField,
  phoneNumberMask,
  unmaskDigitsOnly,
  routingNumberMask,
  accountNumberMask,
};

export type { MaskedTextFieldProps };
