import React from 'react';
import { useStyles } from './styles/TabIndicatorChildren.styles';

export const TabIndicatorChildren = () => {
  const classes = useStyles();

  return <span className={classes.root} />;
};
