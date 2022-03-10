import React from 'react';
import Box from '@mui/material/Box';
import MuiPagination from '@mui/material/Pagination';
import type { PaginationProps } from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { Trans, useTranslation } from 'next-i18next';
import type { PaginatedList } from '@/globals';

interface Props {
  /**
   * Count of items being displayed currently
   */
  itemsCount: number;
  pagination: PaginatedList<unknown>['pagination'];
  onChange: PaginationProps['onChange'];
  itemName?: string;
}

export const Pagination = ({
  pagination,
  itemsCount,
  itemName,
  onChange,
}: Props) => {
  const { t } = useTranslation('components');

  return (
    <Box alignItems="center" display="flex">
      <Box mr={3}>
        <Typography variant="body2">
          <Trans i18nKey="shared.Pagination.caption" t={t}>
            {{
              itemsCount,
            }}
            {{
              totalItems: pagination.totalItems,
            }}
            {{
              itemName,
            }}
          </Trans>
        </Typography>
      </Box>
      <MuiPagination
        color="primary"
        count={pagination.totalPages}
        onChange={onChange}
        page={pagination.pageNumber}
        shape="rounded"
      />
    </Box>
  );
};
