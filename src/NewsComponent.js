import React, { useState } from 'react';
import './NewsComponent.css';

function NewsComponent({ articles }) {
  const articlesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [visitedLinks, setVisitedLinks] = useState(new Set());

  const markLinkAsVisited = (url) => {
    setVisitedLinks((prevLinks) => new Set([...prevLinks, url]));
  };

  const isLinkVisited = (url) => {
    return visitedLinks.has(url);
  };

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h2>Latest News</h2>
      <ul className="news-list">
        {currentArticles.map((article) => (
          <li key={article.url} className="news-item">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={isLinkVisited(article.url) ? 'visited' : ''}
              onClick={() => markLinkAsVisited(article.url)}
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="custom-button"
        >
          Previous Page
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="custom-button"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default NewsComponent;