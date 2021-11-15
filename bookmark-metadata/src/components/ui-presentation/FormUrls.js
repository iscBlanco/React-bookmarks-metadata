import React, { useState } from "react";
import axios from "axios";

function FormUrls() {
  const [url, setUrl] = useState("");
  const [bookmarkList, setBookmarkList] = useState([]);

  const addNewBookmark = async (url) => {
    console.log(typeof url);
    try {
      let response = await axios.post("http://localhost:3002/", {
        url,
      });
      console.log(response.data);
      await response.data.then((r) => setBookmarkList(r));

      console.log(bookmarkList);
    } catch (e) {
      console.error(e);
    }
  };
  const sendUrl = (event) => {
    event.preventDefault();
    console.log("enviando datos...", url);
    setBookmarkList(addNewBookmark(url));
  };
  return (
    <div className="md">
      <form className="row" onSubmit={sendUrl}>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Url"
            className="form-control"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            name="url"
          />
        </div>

        <button type="primary" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}

export default FormUrls;
