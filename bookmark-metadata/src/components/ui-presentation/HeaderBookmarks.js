import React from "react";

function HeaderBookmarks() {
  return (
    <div className="header">
      <nav className="nav nav-pills nav-fill">
        <h1 className="nav-link header-text">My bookmarks</h1>
        {/* eslint-disable-next-line */}
        <hr />
        <button type="button" className="btn btn-primary">
          <h3> Add new bookmark</h3>
        </button>
      </nav>
    </div>
  );
}

export default HeaderBookmarks;
