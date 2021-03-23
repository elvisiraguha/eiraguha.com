import React from 'react';
import { Link as RouterLink } from 'gatsby';
import { ListItem, List, Icon, Box, Text, Link } from '@chakra-ui/react';
import routes from '../routes';
import { globalHistory } from '@reach/router';
import { Helmet } from 'react-helmet';

const Sidebar = ({ children }) => {
  return (
    <Box
      h="100%"
      d="flex"
      flexDirection={['column-reverse', 'column-reverse', 'row', 'row']}
      justifyContent="space-between"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Elvis Iraguha</title>
        <link rel="canonical" href="https://eiraguha.com" />
      </Helmet>
      <Box
        height="100vh"
        width="10%"
        borderRight="1px solid #38B2AC"
        d="flex"
        justifyContent="center"
        alignItems="center"
      >
        <List width="100%">
          {routes.map((route, index) => (
            <ListItem key={index}>
              <Link width="10vw" mx="auto" as={RouterLink} to={route.path}>
                <Box
                  py="2"
                  paddingLeft="30px"
                  _hover={{ background: 'teal.100' }}
                  bg={globalHistory.location.pathname === route.path ? 'teal.300' : ''}
                >
                  <Icon mr="2" as={route.icon} />
                  <Text d="inline">{route.title}</Text>
                </Box>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box width="90%">{children}</Box>
    </Box>
  );
};

export default Sidebar;
