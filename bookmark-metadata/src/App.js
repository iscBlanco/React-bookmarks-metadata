import React from "react";
import Header from "./components/ui-presentation/Header";
import Welcome from "./components/ui-presentation/Welcome";
import CardBookmark from "./components/ui-presentation/CardBookmark";
import urlList from "./components/container/urlList";
import Bookmarks from "./components/ui-presentation/Bookmarks";
function App() {
  return (
    <div>
      <Header />
      <Welcome></Welcome>
      <br />
      <CardBookmark
        image={urlList[0].image}
        title={urlList[0].title}
        url={urlList[0].url}
        description={urlList[0].description}
      />
      <br />
      <br />
      <Bookmarks />
    </div>
  );
}

export default App;
