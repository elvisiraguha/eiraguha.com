import React from 'react';
import { Stack, Box } from '@chakra-ui/react';
import { ContactMe, OnTheInternet } from '../components';
import Sidebar from '../components/Layout';

const Connect = () => {
  return (
    <Sidebar>
      <Stack height="100vh" direction="row" justify="space-between">
        <ContactMe />
        <OnTheInternet />
      </Stack>
    </Sidebar>
  );
};

export default Connect;
