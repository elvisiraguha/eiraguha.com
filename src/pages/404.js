import * as React from 'react';
import { Link } from 'gatsby';
import Sidebar from '../components/Layout';
import { Text, Button, Box } from '@chakra-ui/react';

const NotFoundPage = () => {
  return (
    <Sidebar>
      <Box
        height="100%"
        d="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Text as="h3">Not Found</Text>
        <Link to="/">
          <Button bg="teal.100">Back to Home</Button>
        </Link>
      </Box>
    </Sidebar>
  );
};

export default NotFoundPage;
