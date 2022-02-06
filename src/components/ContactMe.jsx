import React, { useState } from "react";
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
} from "@chakra-ui/react";
import app from 'gatsby-plugin-firebase-v9.0'
import { getFirestore, collection, addDoc} from "firebase/firestore";
import { AiFillHeart } from "react-icons/ai";
import { useToast } from '@chakra-ui/react'

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast()

  const isComplete = () => {
    return Boolean(name && email && subject && message)
  }

  const handleSubmit = () => {
    setLoading(true);
    const db = getFirestore(app);
    const messageObject = {
      message, email, subject, name,
      date: new Date().toLocaleString()
    }
    addDoc(collection(db, "visitors_messages"), messageObject)
      .then((res) => {
        setLoading(false);
        (() => toast({
          title: 'I have received your message',
          description: "Thank you for reaching out, this is really appreciated. I will get back to you as soon as I can",
          status: 'success',
          duration: 5000,
          isClosable: true,
        }))()
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <Box
      width={["100%", "100%", "100%", "50%", "50%"]}
      justifyContent="center"
      d="flex"
      align="center"
      flexDirection="column"
      px="4"
      mb={["40px", "40px", "40px", null, null]}
    >
      <Heading textAlign="center" mb="1">
        Contact Me
      </Heading>
      <Text fontWeight="light" color="gray.400" mb="4">
        I will be happy to connect with you <Icon as={AiFillHeart} />
      </Text>
      <Text>
        I am Interested in Software Business Opportunities and the Likes.
      </Text>
      <Text>Or if you have any Question, Request, want to say Hello </Text>
      <Text>Don't hesitate to ping me using the form below</Text>
      <Box as="form" mt="3">
        <HStack my="4">
          <FormControl id="name">
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </FormControl>
          <FormControl id="email">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </FormControl>
        </HStack>
        <FormControl id="subject">
          <Input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={({ target }) => setSubject(target.value)}
          />
        </FormControl>
        <Textarea
          my="4"
          placeholder="Put the message here"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        />
      </Box>
      <Button
        bg="teal.400"
        color="#fff"
        _hover={{ background: "teal.600" }}
        onClick={handleSubmit}
        isLoading={loading}
        colorScheme='teal'
        variant='outline'
        isDisabled={!isComplete()}
      >
        Send
      </Button>
    </Box>
  );
};

export default ContactMe;
