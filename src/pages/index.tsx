import { Typography } from '@mui/material';
import React from 'react';
import { Trans } from 'react-i18next';

const Home = () => {
  return (
    <div>
      <Typography variant='h1'>
        <Trans i18nKey='featureExample.titleExample' />
      </Typography>
    </div>
  );
};

export default Home;
