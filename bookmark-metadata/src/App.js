import React from "react";
import Header from "./components/ui-presentation/Header";
import Welcome from "./components/ui-presentation/Welcome";
/* import CardBookmark from "./components/ui-presentation/CardBookmark";
import urlList from "./components/container/urlList"; */
import Bookmarks from "./components/ui-presentation/Bookmarks";
import FormUrls from "./components/ui-presentation/FormUrls";
function App() {
  return (
    <div>
      <Header />
      <Welcome></Welcome>
      <br />
      <br />
      <br />
      <Bookmarks />
      <FormUrls></FormUrls>
    </div>
  );
}

export default App;
