import React from 'react';
import { Grid, Box, GridItem } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';

const Projects = () => {
  const projects = [
    {
      title: 'tt',
      link: 'll',
      description: 'dd',
      thumbnail: 'tt',
    },
    {
      title: 'Barefoot Nomad',
      link: 'http://script-heroes-bn-frontend-stg.herokuapp.com/',
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
            <GridItem key={index}>project</GridItem>
          ))}
        </Grid> */}
      </Box>
    </Sidebar>
  );
};

export default Projects;
