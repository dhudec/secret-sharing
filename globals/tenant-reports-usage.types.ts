interface TenantReportUsage {
  tokenReport: {
    metricsByType: Record<string, TokenTypeMetrics>;
    monthlyActiveTokens: number;
    includedMonthlyActiveTokens: number;
  };
}

interface TokenTypeMetrics {
  count: number;
  lastCreatedAt?: string;
}
export type { TenantReportUsage, TokenTypeMetrics };
