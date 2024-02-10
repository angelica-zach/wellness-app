import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function QuoteDisplay() {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://quotes.rest/qod.json?api_key=6p0pz6n6AEbBsGciMFAruFEXV2LEKLDOcnox2tV0"
      )
      .then((response) => {
        console.log(response.data.contents);
        setQuote(response.data.contents.quotes[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  return <div>{quote ? <h1> {quote.quote}</h1> : <h1>Loading...</h1>}</div>;
}
export default QuoteDisplay;
