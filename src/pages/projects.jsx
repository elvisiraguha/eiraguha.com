import React from 'react';
import { Grid, Box, GridItem, Text } from '@chakra-ui/react';
import Sidebar from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const Projects = () => {
  const projects = [
    {
      title: 'Ishuri',
      link: 'ishuri.surge.sh',
      description: 'lorem ipsum lrrr',
      thumbnail: '../images/ishuri.png',
    },
    {
      title: 'Barefoot Nomad',
      link: 'http://script-heroes-bn-frontend-stg.herokuapp.com/',
      description: 'dd',
      thumbnail: '../images/barefoot.png',
    },
    {
      title: 'tt',
      link: 'll',
      description: 'dd',
      thumbnail: 'tt',
    },
    {
      title: 'tt',
      link: 'll',
      description: 'dd',
      thumbnail: 'tt',
    },
    {
      title: 'tt',
      link: 'll',
      description: 'dd',
      thumbnail: 'tt',
    },
    {
      title: 'tt',
      link: 'll',
      description: 'dd',
      thumbnail: 'tt',
    },
    {
      title: 'tt',
      link: 'll',
      description: 'dd',
      thumbnail: 'tt',
    },
    {
      title: 'tt',
      link: 'll',
      description: 'dd',
      thumbnail: 'tt',
    },
  ];
  return (
    <Sidebar>
      <Box height="100%">
        {/* <Grid gridTemplateColumns="1fr 1fr 1fr" gridGap="20px">
          {projects.map((project, index) => (
            <GridItem key={index}>
              <Box>
                <StaticImage src={'../images/ishuri.png'} alt={project.description} />
                <Text>{project.title}</Text>
              </Box>
            </GridItem>
          ))}
        </Grid> */}
      </Box>
    </Sidebar>
  );
};

export default Projects;
