import React from "react";
import { Flex, Text, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { ProfileImage } from "../components";
import Sidebar from "../components/Layout";

const Home = () => {
  return (
    <Sidebar>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
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
          content=" Elvis, Iraguha, eiraguha, web developer, full stack, software, cloud, aws, aws certified, portfolio, css, html5, js, javascript, nodejs, reactjs, Kigali, Rwanda, student"
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
          content="https://firebasestorage.googleapis.com/v0/b/my-brand-96113.appspot.com/o/profile.png?alt=media&token=ccfd784b-b3f1-413a-9fac-27fee80d144f"
        />

        <meta name="twitter:card" content="summary_large_image" />
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
          name="twitter:image:src"
          content="https://firebasestorage.googleapis.com/v0/b/my-brand-96113.appspot.com/o/profile.png?alt=media&token=ccfd784b-b3f1-413a-9fac-27fee80d144f"
        />
      </Helmet>
      <Flex
        px={["20px", "20px", "30px", "60px", "60px"]}
        height="100vh"
        align="center"
        flexDirection={["column", "column", "column", "row", "row"]}
        justify="space-between"
      >
        <Text
          as="div"
          fontSize={[36, 36, 48, 42, 42]}
          align="center"
          width={["80%", "80%", "80%", "50", "50%"]}
        >
          <Heading
            as="h1"
            size={["md", "md", "xl", "xl", "2xl"]}
            fontWeight="light"
          >
            Hi, I’m Elvis
          </Heading>
          <Heading
            as="h1"
            size={["md", "md", "xl", "2xl", "4xl"]}
            fontWeight="light"
            letterSpacing="2px"
          >
            I Build Computer Software
          </Heading>
        </Text>
        <ProfileImage />
      </Flex>
    </Sidebar>
  );
};

export default Home;
