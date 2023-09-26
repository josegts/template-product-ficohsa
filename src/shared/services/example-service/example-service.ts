import { type QueryFunctionContext } from '@tanstack/react-query';

import { type Data } from '@shared/models/DataApi';
import api from '@shared/services';

const fetchExample = async (ctx: QueryFunctionContext) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, argExample] = ctx.queryKey;
  const { data } = await api.get<Data[]>(`/example-service/${argExample}`);

  return data;
};

export default fetchExample;
