import React, { useState, useCallback } from "react";
import './App.scss';
import ControlCard from "./components/ControlCard";
import DownloadStatusCard from "./components/DownloadStatusCard";
import { downloadPngRange } from "./services/DownloadPngService";

function App() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");

  const handleJobStartClick = useCallback((baseUrl, documentId, startPage, endPage, opts) => {
    setIsLoading(true);

    downloadPngRange(baseUrl, documentId, startPage, endPage, opts)
      .then(downloadLink => setDownloadLink(downloadLink))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      <header>pd-dl</header>

      <div className="container">
        <textarea
          className="textarea"
          placeholder="URL"
          rows="4"
          onChange={e => setUrl(e.target.value)}
        />

        <ControlCard url={url} onJobStartClick={handleJobStartClick} />

        {downloadLink && <DownloadStatusCard downloadLink={downloadLink} />}
      </div>
    </div>
  );
}

export default App;
