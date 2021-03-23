import React from 'react';
import {
  Box,
  Heading,
  Text,
  HStack,
  FormControl,
  Button,
  Icon,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';

const ContactMe = () => {
  return (
    <Box
      width="50%"
      justifyContent="center"
      d="flex"
      align="center"
      flexDirection="column"
      px="4"
    >
      <Heading textAlign="center" mb="1">
        Contact Me
      </Heading>
      <Text fontWeight="light" color="gray.400" mb="4">
        I will be happy to connect with you <Icon as={AiFillHeart} />
      </Text>
      <Text>I am Interested in Software Business Opportunities and the Likes.</Text>
      <Text>Or if you have any Question, Request, want to say Hello </Text>
      <Text>Don't hesitate to ping me using the form below</Text>
      <Box as="form" mt="3">
        <HStack my="4">
          <FormControl id="name">
            <Input type="text" placeholder="Full Name" />
          </FormControl>
          <FormControl id="email">
            <Input type="email" placeholder="Email" />
          </FormControl>
        </HStack>
        <FormControl id="subject">
          <Input type="text" placeholder="Subject" />
        </FormControl>
        <Textarea my="4" placeholder="Put the message here" />
      </Box>
      <Button bg="teal.400" color="#fff" _hover={{ background: 'teal.600' }}>
        Send
      </Button>
    </Box>
  );
};

export default ContactMe;
