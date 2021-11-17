import React from "react";
import { Link } from "react-router-dom";

function HeaderBookmarks() {
  return (
    <div className="header">
      <nav className="nav nav-pills nav-fill">
        <h1 className="nav-link header-text">My bookmarks</h1>
        {/* eslint-disable-next-line */}
        <hr />
        <Link to="/form">
          <button type="button" className="btn btn-primary">
            <h4> Add new bookmark</h4>
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default HeaderBookmarks;
