import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Welcome from "./Welcome";
import HeaderBookmarks from "./HeaderBookmarks";
import Bookmarks from "./Bookmarks";
import FormUrls from "./FormUrls";

function Main() {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Welcome />
            </>
          }
        />
        <Route
          exact
          path="/bookmarks"
          element={
            <>
              <Header />
              <HeaderBookmarks />
              <Bookmarks />
            </>
          }
        />
        <Route exact path="/form" element={<FormUrls />} />
      </Routes>
    </div>
  );
}

export default Main;
