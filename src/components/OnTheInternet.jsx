import React from "react";
import { Box, Heading, Icon, Grid, GridItem } from "@chakra-ui/react";
import socialLinks from "../data/socialLinks";

const OnTheInternet = () => {
  return (
    <Box
      width={["100%", "100%", "100%", "50%", "50%"]}
      justifyContent="center"
      d="flex"
      align="center"
      flexDirection="column"
      pb={["100px", "70px", "70px", null, null]}
      px="4"
    >
      <Heading textAlign="center" mb="4">
        More profiles
      </Heading>
      <Grid
        width="80%"
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns="repeat(auto-fit, 70px)"
        gridGap="20px"
        justifyItems="center"
        alignSelf="center"
      >
        {socialLinks.map((chann, index) => (
          <GridItem
            key={index}
            as="a"
            href={chann.link}
            target="_blank"
            color="#fff"
            borderRadius="4px"
            bg="teal.400"
            width="50px"
            height="50px"
            d="flex"
            justifyContent="center"
            alignItems="center"
            title={chann.tittle}
          >
            <Box d="inline" p="2">
              <Icon w={8} h={8} as={chann.icon} />
            </Box>
            {/* <Text fontSize="18px" d="inline" paddingRight="2">
              {chann.userName}
            </Text> */}
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default OnTheInternet;
