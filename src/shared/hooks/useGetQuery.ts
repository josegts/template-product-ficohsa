import { type QueryFunctionContext, useQuery } from '@tanstack/react-query';

import api from '@shared/services';
import { type Data } from '@shared/models/DataApi';

const fetchExample = async (ctx: QueryFunctionContext) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, argExample] = ctx.queryKey;
  const { data } = await api.get<Data[]>(`/example-service/${argExample}`);

  return data;
};

export const useFetchRepositories = (argExample: string) => {
  return useQuery(['example-fetch', argExample], fetchExample);
};
