import React from 'react';
import { Flex, Text, Heading } from '@chakra-ui/react';
import { ProfileImage } from '../components';
import Sidebar from '../components/Layout';

const Home = () => {
  return (
    <Sidebar>
      <Flex
        px={['20px', '20px', '30px', '60px', '60px']}
        height="100vh"
        align="center"
        flexDirection={['column', 'column', 'column', 'row', 'row']}
        justify="space-between"
      >
        <Text
          as="div"
          fontSize={[36, 36, 48, 42, 42]}
          align="center"
          width={['80%', '80%', '80%', '50', '50%']}
        >
          <Heading as="h1" size={['md', 'md', 'xl', 'xl', '2xl']} fontWeight="light">
            Hi, I’m Elvis
          </Heading>
          <Heading
            as="h1"
            size={['md', 'md', 'xl', '2xl', '4xl']}
            fontWeight="light"
            letterSpacing="2px"
          >
            I Build Computer Softwares
          </Heading>
        </Text>
        <ProfileImage />
      </Flex>
    </Sidebar>
  );
};

export default Home;
