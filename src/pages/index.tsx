import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Trans } from 'react-i18next';

const Home = () => {
  /* const mutation = useMutation<any, any, any, any>({
    mutationFn: async newTodo => {
      return await axios.post('/api/todos', newTodo);
    },
    onSuccess: ({ data }) => {
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });

  useEffect(() => {
    mutation.mutate({ title: 'default load' });
  }, []); */

  const { data } = useQuery(
    ['todos'],
    async () => await axios.get('/api/todos')
  );
  return (
    <div>
      <Typography variant='h1'>
        <Trans i18nKey='featureExample.titleExample' />
      </Typography>
      <Typography variant='h2'>
        <Trans i18nKey='featureExample.subtitleExample' />
      </Typography>
      <Typography>Fetch with tanstack query</Typography>
      {data?.data?.data?.map((todo: any) => (
        <Typography variant='h4' key={todo.id}>
          {todo.name}
        </Typography>
      ))}
    </div>
  );
};

export default Home;
