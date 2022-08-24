import { Text, Box, Button, Link } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Link as ReachLink } from "react-router-dom";

function Home() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/cards")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <Box mt={10} align="center">
        <Text fontSize="6xl" color="lightblue">
          Welcome to Flashcards!
        </Text>
        <Text>
          An app designed to help you learn the countries and their capitals
        </Text>
        <Link as={ReachLink} to="/learn">
          <Button mt={10}>start learning</Button>
        </Link>
      </Box>
    </div>
  );
}

export default Home;
