import React, { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = 'de43d5ac26mshd8ce4bbe6ee0f4dp109a91jsn667bbbd1a705'; 

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote', {
        params: {
          apiKey: apiKey
        }
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {data && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyComponent;
