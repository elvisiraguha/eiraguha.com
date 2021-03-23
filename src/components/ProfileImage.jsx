import React from 'react';
import { Image, Box } from '@chakra-ui/react';

const ProfileImage = () => {
  return (
    <Box boxSize="sm" width="40%" height="100%" d="flex" alignItems="center">
      <Image
        src="profile.png"
        width={['176px', '220px', '280px', '420px']}
        height={['156px', '200px', '260px', '380px']}
        alt="Elvis Iraguha"
      />
    </Box>
  );
};

export default ProfileImage;
