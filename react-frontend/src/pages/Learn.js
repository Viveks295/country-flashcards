import React, { useState, useEffect } from "react";
import FlashcardList from "../components/FlashcardList";
import NavBar from "../components/NavBar";

function Learn() {
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
      <FlashcardList flashcards={data} />
    </div>
  );
}

export default Learn;
