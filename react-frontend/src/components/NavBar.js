import React from "react";
import { Link as ReachLink } from "react-router-dom";
import { Flex, Link, Text, Box, Heading } from "@chakra-ui/react";

function NavBar() {
  return (
    <Flex
      zIndex={1}
      position="sticky"
      top={0}
      bg="teal.500"
      p={4}
      align="center"
    >
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <Link as={ReachLink} to="/">
          <Heading>Flashcards</Heading>
        </Link>
        <Box ml={"auto"}>
          <Flex align="center">
            <Box mr={2}>
              <Link as={ReachLink} to="/">
                <Text>home</Text>
              </Link>
            </Box>
            <Box mr={2}>
              <Link as={ReachLink} to="/about">
                <Text>about</Text>
              </Link>
            </Box>
            <Link as={ReachLink} to="/learn">
              <Text>learn</Text>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Flex>
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default NavBar;
