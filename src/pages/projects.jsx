import React from 'react';
import { Grid, Box, GridItem, Text, Image, Button } from '@chakra-ui/react';
import Sidebar from '../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Projects = ({ data }) => {
  const projects = [
    {
      title: 'Ishuri',
      link: 'ishuri.surge.sh',
      description: 'lorem ipsum lrrr',
      src: '../images/ishuri.png',
    },
    {
      title: 'Barefoot Nomad',
      link: 'http://script-heroes-bn-frontend-stg.herokuapp.com/',
      description: 'dd',
      src: '../images/barefoot.png',
    },
  ];
  return (
    <Sidebar>
      <Grid
        height="100vh"
        py="10"
        gridTemplateColumns="repeat(auto-fit, 300px)"
        gridGap="20px"
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
      >
        {projects.map((project, index) => {
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
                _hover={{ bg: 'teal.400' }}
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
//   query projects {
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

export default Projects;
