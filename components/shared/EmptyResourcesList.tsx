import React, { FC } from 'react';
import ListItem from '@mui/material/ListItem';
import {
  EmptyResources,
  Props as EmptyResourcesProps,
} from '@/components/shared/EmptyResources';

export const EmptyResourcesList: FC<EmptyResourcesProps> = (props) => (
  <ListItem>
    <EmptyResources {...props} />
  </ListItem>
);
