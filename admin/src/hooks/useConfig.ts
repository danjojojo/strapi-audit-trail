import { useState, useEffect } from 'react';
import { services } from '../services';
import type { GetConfigResponse } from '../types/service.types';

export function useConfig() {
  const [config, setConfig] = useState<GetConfigResponse | undefined>(undefined);
  const [isConfigLoading, setIsConfigLoading] = useState<boolean>(true);

  const { getConfig } = services();

  const fetchConfig = async () => {
    try {
      const config = await getConfig();
      if (config) setConfig(config);
    } catch (error) {
      console.error(error);
    } finally {
      setIsConfigLoading(false);
    }
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  return {
    config,
    isConfigLoading,
    fetchConfig,
  };
}
