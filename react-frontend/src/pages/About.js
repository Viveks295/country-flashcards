import { Box, Text, Link } from "@chakra-ui/react";
import React from "react";
import NavBar from "../components/NavBar";

function About() {
  return (
    <div>
      <NavBar />
      <Box mt={10} align="center">
        <Text fontSize="5xl" color="lightblue">
          About
        </Text>
        <Text mt={5} maxW={"600px"} align="left">
          This is a simple app to help you learn the capital cities of each
          country. Just go to the learn tab and click the flashcard to reveal
          the city of each country.
        </Text>
        <Text mt={5} maxW={"600px"} align="left">
          This app was built on a React frontend and a Flask API backend. You
          can view the source code{" "}
          <Link
            href="https://github.com/Viveks295/FlaskAndReact"
            color="teal.500"
          >
            here
          </Link>
          .
        </Text>
      </Box>
    </div>
  );
}

export default About;
