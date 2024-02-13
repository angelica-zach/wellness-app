import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteDisplay = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Set loading to true initially

  const apiKey = 'de43d5ac26mshd8ce4bbe6ee0f4dp109a91jsn667bbbd1a705'; 

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []); // Empty dependency array ensures the effect runs only once

  function fetchData() {
    axios
      .get('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote', {
        headers: {
          'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com',
          'x-rapidapi-key': apiKey,
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{data && data.text}</p>
          <p>{data && data.author}</p>
        </div>
      )}
    </div>
  );
};
export default QuoteDisplay;

