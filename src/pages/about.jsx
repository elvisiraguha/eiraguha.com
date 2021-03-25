import React from 'react';
import { Flex, Text, Box, Image } from '@chakra-ui/react';
import { ProfileImage } from '../components';
import Sidebar from '../components/Layout';

const About = () => {
  return (
    <Sidebar>
      <Box height={'100vh'}>
        <Flex padding="0 60px" height="100%" align="center" justify="space-between">
          <Text
            as="div"
            fontSize={28}
            align="center"
            fontFamily="'Epilogue', sans-serif"
            width="60%"
          >
            <Text>I am a Professional Software Developer</Text>
            <Text>
              Aiming to help Companies and Individuals Build Robust Applications that
              Engage exceptional Users Experience and Drive Business Growth
            </Text>
          </Text>
          <ProfileImage />
        </Flex>
      </Box>
    </Sidebar>
  );
};

export default About;
