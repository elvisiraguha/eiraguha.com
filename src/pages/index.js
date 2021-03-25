import React from 'react';
import { Flex, Image, Text, Box, Heading } from '@chakra-ui/react';
import { ProfileImage } from '../components';
import Sidebar from '../components/Layout';

const Home = () => {
  return (
    <Sidebar>
      <Box height={'100vh'}>
        <Flex padding="0 60px" height="100%" align="center" justify="space-between">
          <Text
            as="div"
            fontSize={42}
            align="center"
            fontFamily="'Epilogue', sans-serif"
            width="50%"
          >
            <Heading as="h1" size="2xl" fontWeight="light">
              Hi, I’m Elvis
            </Heading>
            <Heading as="h1" size="4xl" fontWeight="light" letterSpacing="2px">
              I Build Softwares
            </Heading>
          </Text>
          <ProfileImage />
        </Flex>
      </Box>
    </Sidebar>
  );
};

export default Home;
