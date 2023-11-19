import { Button, Typography } from '@josegts/ds-components';
import { Toolbar } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { Trans } from 'react-i18next';

const NavbarMf = dynamic(async () => await import('navbar/NavbarMf' as any), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

/* const NavbarMf = dynamic(async () => await import('navbar/NavbarMf'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
  webpack: (config, options) => {
    config.experiments = { topLevelAwait: true };
    // if failer show message
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };
    return config;
  },
}); */

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
      <NavbarMf />
      <div>
        <Toolbar sx={{ height: { xs: '80px', lg: '145px' } }} />
        <Button variant='elevated'>Elevated</Button>
        <Typography variant='h1'>
          <Trans i18nKey='featureExample.titleExample' />
        </Typography>
        <Typography variant='h2'>
          <Trans i18nKey='featureExample.subtitleExample' />
        </Typography>
        <Typography>Fetch with tanstack query</Typography>
        {data?.data?.data?.map((todo: any) => (
          <Typography key={todo.id}>{todo.name}</Typography>
        ))}
      </div>
    </div>
  );
};

export default Home;
