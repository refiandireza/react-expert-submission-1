import React from 'react';
import { MdInfo } from 'react-icons/md';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found">
        <MdInfo />
        <h2>404 Error</h2>
        <p>Sorry, page not found</p>
        <Link to="/">Back to home</Link>

      </div>
    </div>
  );
}

export default NotFoundPage;
