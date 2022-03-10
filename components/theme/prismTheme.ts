import { useTheme } from '@basis-theory/basis-theory-portal-commons/src/theme';
import type { Theme } from '@mui/material/styles';
import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const createPrismTheme = (portalTheme: Theme) =>
  merge(cloneDeep(dracula), {
    'code[class*="language-"]': {
      fontFamily:
        "Source Code Pro, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
      fontWeight: 500,
    },
    'pre[class*="language-"]': {
      background: portalTheme.palette.grey['1000'],
      fontFamily:
        "Source Code Pro, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
      fontWeight: 500,
      fontSize: '12px',
      padding: portalTheme.spacing(1),
    },
    function: {
      color: portalTheme.palette.primary.main,
    },
  });

export const usePrismTheme = () => {
  const theme = useTheme('bliss');

  return createPrismTheme(theme);
};
