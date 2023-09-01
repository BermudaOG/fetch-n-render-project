import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsComponent from './NewsComponent';

const API_KEY = '07e119c88edb4281b4a0bc8400661ba8';
const API_ENDPOINT = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  axios.get(API_ENDPOINT)
    .then((response) => {
      setArticles(response.data.articles);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('API Error:', error);
      setIsLoading(false);
    });
}, []);

return (
  <div className="container">
    <div className="left-column">
    </div>
    <div className="content">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <NewsComponent articles={articles} />
      )}
    </div>
    <div className="right-column">
    </div>
  </div>
);
}

export default App;
