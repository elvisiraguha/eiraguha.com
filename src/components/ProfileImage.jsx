import React from 'react';
import { Image, Box } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const ProfileImage = () => {
  return (
    <Box
      boxSize="sm"
      width={['70%', '70%', '60%', '40%', '40%']}
      height="100%"
      d="flex"
      alignItems="center"
    >
      <StaticImage src="../images/profile.png" alt="Elvis Iraguha" />
    </Box>
  );
};

export default ProfileImage;
