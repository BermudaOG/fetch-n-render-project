import React, { useState, Fragment } from 'react';
import Pagination from './Pagination';
import useDataApi from './useDataApi';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://hn.algolia.com/api/v1/search?query=MIT",
    {
      hits: [],
    }
  );

  const handlePageChange = (e) => {
    setCurrentPage(Number(e.target.textContent));
  };

  let page = data.hits;
  if (page.length >= 1) {
    page = paginate(page, currentPage, pageSize);
    console.log(`currentPage: ${currentPage}`);
  }

  return (
    <Fragment>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul className="list-group">
          {page.map((item) => (
            <li key={item.objectID} className="list-group-item">
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
      <Pagination
        items={data.hits}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      ></Pagination>
    </Fragment>
  );
}

export default App;
