import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Flashcard from "./Flashcard.js";

const FlashcardList = ({ flashcards }) => {
  return (
    <>
      <Center mt={50}>
        <Heading size="3xl">Country Flashcards</Heading>
      </Center>
      <div>
        {typeof flashcards === "undefined" ? (
          <p>Loading...</p>
        ) : (
          <Box mt={8} mx="auto" maxW={"400px"} w="100%">
            <Stack spacing={8}>
              {flashcards.map((flashcard) => (
                <Flashcard flashcard={flashcard} key={flashcard.id} />
              ))}
            </Stack>
          </Box>
        )}
      </div>
    </>
  );
};

export default FlashcardList;
