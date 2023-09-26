import { useQuery } from '@tanstack/react-query';

import fetchExample from '@shared/services/example-service/example-service';

/**
 * Consumo de fetch se hace solo usando este hook en el componente
 * que se requiera
 */
export const useFetchExample = (argExample: string) => {
  return useQuery(['example-fetch', argExample], fetchExample);
};
