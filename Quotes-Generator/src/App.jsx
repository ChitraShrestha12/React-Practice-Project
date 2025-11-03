import React, { useEffect, useState } from "react";
import Button from "./Components/Button";

function App() {
  const [randomNumberGenerator, setRandomNumber] = useState(0);
  function randomNumber() {
    let num = Math.floor(Math.random() * 30 + 1);
    setRandomNumber(num);
  }

  const [quoteData, setQuoteData] = useState(null);
  useEffect(() => {
    async function fetchQuotes() {
      console.log(randomNumberGenerator);
      const url = `https://dummyjson.com/quotes/${randomNumberGenerator}`;
      const data = await fetch(url);
      const response = await data.json();
      setQuoteData(response);
    }
    if (randomNumberGenerator) fetchQuotes();
  }, [randomNumberGenerator]);
  return (
    <main>
      <Button onClick={randomNumber} />
      <p>{quoteData ? quoteData.quote : "Click to generate a quote!"}</p>
    </main>
  );
}

export default App;
