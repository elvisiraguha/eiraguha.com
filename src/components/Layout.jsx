import React from "react";
import { Link as RouterLink } from "gatsby";
import {
  ListItem,
  List,
  Icon,
  Box,
  Text,
  Link,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import "@fontsource/inter";
import routes from "../routes";
import { globalHistory } from "@reach/router";

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
});

const Sidebar = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {/* <Fonts /> */}
      <Box
        h="100%"
        d="flex"
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
          "row",
        ]}
        justifyContent="space-between"
      >
        <Box
          height={[null, null, null, "100%", "100%"]}
          width={["100%", "100%", "100%", "20%", "15%"]}
          borderRight="1px solid #38B2AC"
          d="flex"
          bottom={0}
          justifyContent="center"
          alignItems="center"
          position="fixed"
          bg="white"
          zIndex="3"
        >
          <List
            width="100%"
            display={"flex"}
            flexDirection={["row", "row", "row", "column", "column"]}
            justifyContent={[
              "space-around",
              "space-around",
              "space-around",
              "center",
              "center",
            ]}
          >
            {routes.map((route, index) => (
              <ListItem
                key={index}
                h={["100%", "100%", "100%", "auto", "auto"]}
              >
                <Link
                  width="10vw"
                  height={["100%", "100%", "100%", null, null]}
                  mx="auto"
                  as={RouterLink}
                  to={route.path}
                >
                  <Box
                    py="2"
                    px={["20px", "20px", "20px", null, null]}
                    paddingLeft={[null, null, null, "30px", "30px"]}
                    _hover={{ background: "teal.100" }}
                    bg={
                      globalHistory.location.pathname === route.path ||
                      globalHistory.location.pathname === route.path + "/"
                        ? "#6cddff"
                        : ""
                    }
                    textAlign={[
                      "center",
                      "center",
                      "center",
                      "initial",
                      "initial",
                    ]}
                  >
                    <Icon
                      w={["6", "7", "8", null, null]}
                      h={["6", "7", "8", null, null]}
                      mr={[null, null, null, "2", "2"]}
                      as={route.icon}
                      textAlign="center"
                      color="#696969"
                    />
                    <Text
                      display={["none", "none", "none", "inline", "inline"]}
                      fontSize={20}
                    >
                      {route.title}
                    </Text>
                  </Box>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          height={["100%", "100%", "100%", "90%", "90%"]}
          width={["100%", "100%", "100%", "80%", "85%"]}
          position="absolute"
          left={["0%", "0%", "0%", "20%", "15%"]}
          top="0"
        >
          {children}
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Sidebar;
