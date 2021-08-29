import React from "react";
import { Flex, Text, Box, Image, Button } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { ProfileImage } from "../components";
import Sidebar from "../components/Layout";

const About = () => {
  return (
    <Sidebar>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Elvis Iraguha</title>

        <meta name="author" content="Elvis Iraguha" />
        <meta
          name="description"
          content=" I started writing code back in 2019 and since then I have been building websites and application with a purpose of building a more comfortable web experience."
        />
        <link rel="canonical" href="https://eiraguha.com/about" />

        <meta
          name="keywords"
          content="Elvis, Iraguha, eiraguha, skills, web developer, full stack, software, Kigali, Rwanda, git, js, html, css, react, node, sass, python, developer"
        />

        <meta property="og:title" content="About" />
        <meta property="og:site_name" content="Elvis Iraguha" />
        <meta
          property="og:description"
          content=" I started writing code back in 2019 and since then I have been building websites and application with a purpose of building a more comfortable web experience."
        />
        <meta property="og:url" content="https://eiraguha.com/about" />
        <meta
          property="og:image"
          content="https://eiraguha.com/static/a5c3bc4d57a796f746317aaa7f5b6969/691d3/profile.webp"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About" />
        <meta
          name="twitter:description"
          content="  I started writing code back in 2019 and since then I have been building websites and application with a purpose of building a more comfortable web experience."
        />
        <meta name="twitter:url" content="https://eiraguha.com/about" />
        <meta
          name="twitter:image"
          content="https://eiraguha.com/static/a5c3bc4d57a796f746317aaa7f5b6969/691d3/profile.webp"
        />
      </Helmet>
      <Flex
        px={["18px", "20px", "30px", "60px", "60px"]}
        height="100vh"
        align="center"
        flexDirection={["column", "column", "column", "row", "row"]}
        justify="space-between"
      >
        <Text
          as="div"
          fontSize={[28, 28, 32, 32, 32]}
          align="center"
          width={["80%", "80%", "80%", "50", "50%"]}
        >
          <Text>
            I started writing code back in 2019 and since then I have been
            building websites and application with a purpose of building a more
            comfortable web experience.
          </Text>
          <Button
            mt="4"
            as="a"
            href="https://docs.google.com/document/d/1erpctCnY-WijV_ZXjj7z0e-dFhFCog_A0FdBgM63_NE/preview"
            target="_blank"
            borderRadius="0"
            bg="teal.300"
            _hover={{ bg: "teal.400" }}
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
