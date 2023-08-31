import React from 'react';
import { Button } from 'react-bootstrap';
import './Pagination.css';

function Pagination({ items, pageSize, currentPage, onPageChange }) {
  if (items.length <= 1) return null;

  let num = Math.ceil(items.length / pageSize);
  let pages = range(1, num + 1);
  const list = pages.map((page) => {
    return (
      <Button
        key={page}
        onClick={(e) => onPageChange(e, page)}
        className="page-item"
        style={currentPage === page ? { backgroundColor: '#007bff', color: 'white' } : null}
      >
        {page}
      </Button>
    );
  });

  return (
    <nav>
      <ul className="pagination">{list}</ul>
    </nav>
  );
}

const range = (start, end) => {
  return Array(end - start + 1)
    .fill(0)
    .map((item, i) => start + i);
};

export default Pagination;
