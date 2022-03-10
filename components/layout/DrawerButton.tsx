import React, { FC, ReactNode } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';
import { DrawerItem } from './DrawerItem';
import { useStyles } from './styles/DrawerButton.styles';

interface Props {
  href: string;
  external?: boolean;
  icon: ReactNode;
  primaryText: string;
  secondaryText?: string;
}

export const DrawerButton: FC<Props> = ({
  href,
  external,
  icon,
  primaryText,
  secondaryText,
}) => {
  const classes = useStyles();
  const router = useRouter();
  const selected = router.route.startsWith(href);

  const handleClick = () => {
    if (external) {
      return window.open(href, '_blank');
    }

    return router.push(href);
  };

  return (
    <DrawerItem onClick={handleClick} title={primaryText}>
      <ListItem button className={classes.item} selected={selected}>
        <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>

        <ListItemText
          classes={{
            root: classes.itemText,
            primary: classes.itemText,
          }}
          primary={primaryText}
          secondary={secondaryText}
        />
      </ListItem>
    </DrawerItem>
  );
};
