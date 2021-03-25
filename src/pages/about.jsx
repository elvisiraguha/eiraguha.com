import React from 'react';
import { Flex, Text, Box, Image, Button } from '@chakra-ui/react';
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
            <Button
              mt="4"
              as="a"
              href="https://docs.google.com/document/d/10LHJmI1cibvP8B4vOIhpmWf8zJGxjZtbtdi9Y_fRkwU/preview"
              target="_blank"
              borderRadius="0"
              bg="teal.300"
              _hover={{ bg: 'teal.400' }}
            >
              Resume
            </Button>
          </Text>
          <ProfileImage />
        </Flex>
      </Box>
    </Sidebar>
  );
};

export default About;
