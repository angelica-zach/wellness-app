import React, { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = 'de43d5ac26mshd8ce4bbe6ee0f4dp109a91jsn667bbbd1a705'; 

  function fetchData() {
    setLoading(true);
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
      <h1>Random Quote</h1>
      <button onClick={fetchData}>Fetch Data</button>
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

export default MyComponent;
