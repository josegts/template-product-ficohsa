import { Typography } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
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

  console.log(data?.data?.data);

  return (
    <div>
      <Typography variant='h1'>
        <Trans i18nKey='featureExample.titleExample' />
      </Typography>
      {data?.data?.data?.map((todo: any) => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </div>
  );
};

export default Home;
