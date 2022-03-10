import { useEffect, useState } from 'react';

export interface Config {
  telemetryKey?: string;
  apiBaseUrl?: string;
  sdkApiBaseUrl?: string;
  elementsBaseUrl?: string;
  supportEmail?: string;
  discordLink?: string;
  testCards?: string[];
  featureToggles?: Record<never, never>;
  billingElementsKey?: string;
  analyticsIntegrity?: string;
}

export const useConfig = (enabled = true): Config => {
  const [config, setConfig] = useState<Config>({});

  useEffect(() => {
    const abortController = new AbortController();
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/configs', {
          signal: abortController.signal,
        });
        const configResponse = await response.json();

        if (!abortController.signal.aborted) {
          setConfig(configResponse);
        }
      } catch {
        // catch and dismiss config fetch request errors
      }
    };

    if (enabled) {
      fetchConfig();
    }

    return () => {
      abortController.abort();
    };
  }, [enabled]);

  return config;
};
