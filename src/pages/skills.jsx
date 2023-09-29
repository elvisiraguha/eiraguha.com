import { Grid, GridItem, Text, Tag, Icon } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Layout";
import { Helmet } from "react-helmet";
import skills from "../data/skills";

const Skills = () => {
  return (
    <Sidebar>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Skills | Elvis Iraguha</title>

        <meta name="author" content="Elvis Iraguha" />
        <meta
          name="description"
          content="I have working experience over the web development technologies front to back"
        />
        <link rel="canonical" href="https://elvisiraguha.com/skills" />

        <meta
          name="keywords"
          content="Elvis, Iraguha, eiraguha, skills, web developer, full stack, software, Kigali, Rwanda, git, js, html, css, react, node, sass, python, developer"
        />

        <meta property="og:title" content="Skills" />
        <meta property="og:site_name" content="Elvis Iraguha" />
        <meta
          property="og:description"
          content="I have working experience over the web development technologies front to back"
        />
        <meta property="og:url" content="https://elvisiraguha.com/skills" />
        <meta
          property="og:image"
          content="https://elvisiraguha.com/static/a5c3bc4d57a796f746317aaa7f5b6969/691d3/profile.webp"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Skills" />
        <meta
          name="twitter:description"
          content="I have working experience over the web development technologies front to back"
        />
        <meta name="twitter:url" content="https://elvisiraguha.com/skills" />
        <meta
          name="twitter:image"
          content="https://elvisiraguha.com/static/a5c3bc4d57a796f746317aaa7f5b6969/691d3/profile.webp"
        />
      </Helmet>
      <Grid
        py="10"
        gridTemplateColumns="repeat(auto-fit, 200px)"
        gridGap={["10px", "10px", "20px", "20px", "20px"]}
        justifyContent="center"
        pb={["100px", "70px", "70px", null, null]}
        justifyItems="center"
      >
        {skills.map((skill, index) => (
          <GridItem
            key={index}
            height="150px"
            width="120px"
            d="flex"
            flexDirection="column-reverse"
            alignItems="center"
            justifyContent="space-around"
            border={`1px solid ${skill.color}`}
            borderRadius="10px"
          >
            <Tag
              size="md"
              variant="subtle"
              borderRadius="0"
              colorScheme={skill.color}
            >
              {skill.stack}
            </Tag>
            <Text>{skill.title}</Text>
            <Icon h="50px" w="50px" as={skill.icon} />
          </GridItem>
        ))}
      </Grid>
    </Sidebar>
  );
};

export default Skills;
