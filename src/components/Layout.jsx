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
import routes from "../routes";
import { globalHistory } from "@reach/router";
import { Helmet } from "react-helmet";
import { Fonts } from "./Fonts";

const theme = extendTheme({
  fonts: {
    heading: "Sans",
    body: "Sans",
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Elvis Iraguha | Personal Portfolio Website</title>

          <meta name="author" content="Elvis Iraguha" />
          <meta
            name="description"
            content="I build computer software. I am a self-taught developer with expertise in HTML5 & CSS3, JavaScript, ReactJs, Nodejs, Version Control Systems, Restful APIs, and Test-Driven Development."
          />
          <link rel="canonical" href="https://eiraguha.com" />

          <meta
            name="keywords"
            content=" Elvis, Iraguha, eiraguha, web developer, full stack, software, cloud, aws, aws certified, portfolio css, html5, js, javascript, nodejs, reactjs, Kigali, Rwanda, student"
          />

          <meta
            property="og:title"
            content="Elvis Iraguha | Personal Portfolio Website"
          />
          <meta property="og:site_name" content="Elvis Iraguha" />
          <meta
            property="og:description"
            content="I build computer software. I am a self-taught developer with expertise in HTML5 & CSS3, JavaScript, ReactJs, Nodejs, Version Control Systems, Restful APIs, and Test-Driven Development."
          />
          <meta property="og:url" content="https://eiraguha.com" />
          <meta
            property="og:image"
            content="https://eiraguha.com/static/a5c3bc4d57a796f746317aaa7f5b6969/691d3/profile.webp"
          />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Elvis Iraguha | Personal Portfolio Website"
          />
          <meta
            name="twitter:description"
            content="I build computer software. I am a self-taught developer with expertise in HTML5 & CSS3, JavaScript, ReactJs, Nodejs, Version Control Systems, Restful APIs, and Test-Driven Development."
          />
          <meta name="twitter:url" content="http://www.eiraguha.com" />
          <meta
            name="twitter:image"
            content="https://eiraguha.com/static/a5c3bc4d57a796f746317aaa7f5b6969/691d3/profile.webp"
          />
        </Helmet>
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
                      globalHistory.location.pathname === route.path
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
