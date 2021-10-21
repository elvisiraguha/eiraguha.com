import React from "react";
import { Grid, Box, GridItem, Text, Button } from "@chakra-ui/react";
import Sidebar from "../components/Layout";
import { Helmet } from "react-helmet";

const Work = ({ data }) => {
  const work = [
    {
      title: "Ishuri",
      link: "https://ishuri.surge.sh",
      description: "lorem ipsum lrrr",
      src: "../images/ishuri.png",
    },
    {
      title: "Barefoot Nomad",
      link: "https://script-heroes-bn-frontend-stg.herokuapp.com/",
      description: "dd",
      src: "../images/barefoot.png",
    },
  ];
  return (
    <Sidebar>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Work & Projects | Elvis Iraguha</title>

        <meta name="author" content="Elvis Iraguha" />
        <meta
          name="description"
          content="I have working experience over the web development technologies front to back"
        />
        <link rel="canonical" href="https://eiraguha.com/work" />

        <meta
          name="keywords"
          content="Elvis, Iraguha, eiraguha, skills, web developer, full stack, software, Kigali, Rwanda, git, js, html, css, react, node, sass, python, developer"
        />

        <meta property="og:title" content="Work & Projects" />
        <meta property="og:site_name" content="Elvis Iraguha" />
        <meta
          property="og:description"
          content="I have working experience over the web development technologies front to back"
        />
        <meta property="og:url" content="https://eiraguha.com/work" />
        <meta
          property="og:image"
          content="https://eiraguha.com/static/a5c3bc4d57a796f746317aaa7f5b6969/691d3/profile.webp"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Work & Projects" />
        <meta
          name="twitter:description"
          content="I have working experience over the web development technologies front to back"
        />
        <meta name="twitter:url" content="https://eiraguha.com/work" />
        <meta
          name="twitter:image"
          content="https://eiraguha.com/static/a5c3bc4d57a796f746317aaa7f5b6969/691d3/profile.webp"
        />
      </Helmet>
      <Grid
        height="100vh"
        py="10"
        gridTemplateColumns="repeat(auto-fit, 300px)"
        gridGap="20px"
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
      >
        {work.map((project, index) => {
          return (
            <GridItem
              key={index}
              height="250px"
              width="200px"
              d="grid"
              gridTemplateColumns="1fr"
              gridTemplateRows="1fr 1fr 1fr 1fr"
              borderRadius="10px"
            >
              {/* <img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  gridColumn: '1 / span 1',
                  gridRow: '1 / span 4',
                }}
                src={project.src}
                alt={project.description}
              /> */}
              <Button
                gridColumn="1 / span 1"
                gridRow="3 / span 1"
                as="a"
                href={project.link}
                zIndex="2"
                target="_blank"
                width="100px"
                mx="auto"
                bg="teal.500"
                _hover={{ bg: "teal.400" }}
                color="white"
              >
                VIEW
              </Button>
              <Box
                gridRow="1 / span 4"
                gridColumn="1 / span 1"
                border="1px solid #4fd1c5f4"
                borderRadius="10px"
                zIndex="1"
              />
              <Text
                textAlign="center"
                gridColumn="1 / span 1"
                gridRow="4 / span 1"
                zIndex="2"
                fontSize="24"
                fontWeight="medium"
                color="teal.500"
              >
                {project.title}
              </Text>
            </GridItem>
          );
        })}
      </Grid>
    </Sidebar>
  );
};

// export const query = graphql`
//   query work {
//     fileName: file(relativePath: { eq: "images/ishuri.png" }) {
//       thumbnail {
//         childImageSharp {
//           fluid(maxWidth: 400, maxHeight: 250) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `;

export default Work;
