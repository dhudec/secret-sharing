import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { TokenType, tokenTypes } from '@/globals';
import { useStyles } from './styles/Badge.styles';

interface Props {
  type:
    | TokenType
    | 'default'
    | 'yellow_badge_color'
    | 'green_badge_color'
    | 'red_badge_color'
    | 'blue_badge_color';
  content?: string;
}

export const Badge = ({ type, content }: Props) => {
  const { t: tc } = useTranslation('common');
  const classes = useStyles();

  let badgeContent = content ?? tc(`badges.${type}`);

  if ((tokenTypes as ReadonlyArray<string>).includes(type)) {
    badgeContent = tc(`tokenTypes.${type}`);
  }

  return (
    <Box className={clsx(classes.root, classes[type])}>
      <Typography variant="overline">{badgeContent}</Typography>
    </Box>
  );
};
