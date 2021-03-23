import React from 'react';
import { Box, Heading, Link, Icon, HStack, Text } from '@chakra-ui/react';
import socialLinks from '../data/socialLinks';

const OnTheInternet = () => {
  return (
    <Box
      width="50%"
      justifyContent="center"
      d="flex"
      align="center"
      flexDirection="column"
      px="4"
    >
      <Heading textAlign="center" mb="10">
        Other Channels
      </Heading>
      <Box alignSelf="center">
        {socialLinks.map((chann, index) => (
          <HStack
            my="2"
            key={index}
            as="a"
            href={chann.link}
            target="_blank"
            color="#fff"
            borderRadius="6px"
            bg="teal.400"
            border="1px solid #fff"
          >
            <Box d="inline" p="3" borderRight="1px solid white">
              <Icon w={6} h={6} as={chann.icon} />
            </Box>
            <Text fontSize="18px" d="inline" paddingRight="2">
              {chann.userName}
            </Text>
          </HStack>
        ))}
      </Box>
    </Box>
  );
};

export default OnTheInternet;
