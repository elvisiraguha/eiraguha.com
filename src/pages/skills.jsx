import { Grid, GridItem, Box, Text, Tag, Icon } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../components/Layout';
import skills from '../data/skills';

const Skills = () => {
  return (
    <Sidebar>
      <Grid
        py="10"
        gridTemplateColumns="repeat(auto-fit, 200px)"
        gridGap={['10px', '10px', '20px', '20px', '20px']}
        justifyContent="center"
        pb={['100px', '70px', '70px', null, null]}
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
            <Tag size="md" variant="subtle" borderRadius="0" colorScheme={skill.color}>
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
