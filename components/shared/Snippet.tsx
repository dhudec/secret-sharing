import React from 'react';
import Box from '@mui/material/Box';
import { CopyButton } from '@/components/shared/CopyButton';
import { useStyles } from './styles/Snippet.styles';

interface Props {
  /**
   * Content to display
   */
  content: string;
  /**
   * Content to be copied,
   * @default content param
   */
  copyContent?: string;
}

export const Snippet = ({ content, copyContent = content }: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
        {content}
      </Box>
      <Box ml={1}>
        <CopyButton classes={classes} content={copyContent} />
      </Box>
    </Box>
  );
};
