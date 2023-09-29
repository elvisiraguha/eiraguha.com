import React from "react";
import { Stack } from "@chakra-ui/react";
import { ContactMe, OnTheInternet } from "../components";
import Sidebar from "../components/Layout";
import { Helmet } from "react-helmet";

const Connect = () => {
  return (
    <Sidebar>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Connect | Elvis Iraguha</title>

        <meta name="author" content="Elvis Iraguha" />
        <meta
          name="description"
          content="I will be happy to connect with you, don't hesitate to reach out: +250783984662"
        />
        <link rel="canonical" href="https://elvisiraguha.com/connect" />

        <meta
          name="keywords"
          content=" Elvis, Iraguha, eiraguha, web developer, full stack, software, Kigali, Rwanda, student, contacts, email, phone number, github, linkedin"
        />

        <meta property="og:title" content="Connect" />
        <meta property="og:site_name" content="Elvis Iraguha" />
        <meta
          property="og:description"
          content="I will be happy to connect with you, don't hesitate to reach out: +250783984662"
        />
        <meta property="og:url" content="https://elvisiraguha.com/connect" />
        <meta
          property="og:image"
          content="https://elvisiraguha.com/static/a5c3bc4d57a796f746317aaa7f5b6969/691d3/profile.webp"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Connect" />
        <meta
          name="twitter:description"
          content="I will be happy to connect with you, don't hesitate to reach out: +250783984662"
        />
        <meta name="twitter:url" content="https://www.elvisiraguha.com/connect" />
        <meta
          name="twitter:image"
          content="https://elvisiraguha.com/static/a5c3bc4d57a796f746317aaa7f5b6969/691d3/profile.webp"
        />
      </Helmet>
      <Stack
        height="100vh"
        direction={["column", "column", "column", "row", "row"]}
        justify="space-between"
      >
        <ContactMe />
        <OnTheInternet />
      </Stack>
    </Sidebar>
  );
};

export default Connect;
