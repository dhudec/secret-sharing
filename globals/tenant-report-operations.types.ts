interface TenantOperationReportItem {
  operation: string;
  count: number;
  entityType: string;
}

type TenantOperationReport = TenantOperationReportItem[];

export type { TenantOperationReportItem, TenantOperationReport };
