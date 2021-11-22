import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Welcome from "./Welcome";
import HeaderBookmarks from "./HeaderBookmarks";
import Bookmarks from "./Bookmarks";
import FormUrls from "./FormUrls";
import { ConsumerObject } from "../container/stateContext";

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
              <ConsumerObject>
                {(context) => <Bookmarks list={context.objectList} />}
              </ConsumerObject>
            </>
          }
        />
        <Route
          exact
          path="/form"
          element={
            <ConsumerObject>
              {(context) => (
                <FormUrls
                  list={context.objectList}
                  functionList={context.setObjectList}
                />
              )}
            </ConsumerObject>
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
