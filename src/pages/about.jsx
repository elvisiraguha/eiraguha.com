import React from 'react';
import { Flex, Text, Box, Image, Button } from '@chakra-ui/react';
import { ProfileImage } from '../components';
import Sidebar from '../components/Layout';

const About = () => {
  return (
    <Sidebar>
      <Flex
        px={['18px', '20px', '30px', '60px', '60px']}
        height="100vh"
        align="center"
        flexDirection={['column', 'column', 'column', 'row', 'row']}
        justify="space-between"
      >
        <Text
          as="div"
          fontSize={[28, 28, 48, 42, 42]}
          align="center"
          width={['80%', '80%', '80%', '50', '50%']}
        >
          <Text>I am a Professional Software Developer</Text>
          <Text>
            Aiming to help Companies and Individuals Build Robust Applications that Engage
            exceptional Users Experience and Drive Business Growth
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
    </Sidebar>
  );
};

export default About;
