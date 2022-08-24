import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
  return (
    <>
      <Flex
        className={`card ${flip ? "flip" : ""}`}
        key={flashcard.id}
        p={5}
        shadow="md"
        borderWidth="1px"
        onClick={() => setFlip(!flip)}
        h={200}
      >
        <Box className="front">
          <Heading>{flashcard.country}</Heading>
          <Text>country</Text>
        </Box>
        <Box className="back">
          <Heading>{flashcard.city}</Heading>
          <Text>city</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Flashcard;
