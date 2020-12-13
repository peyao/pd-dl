import React, { useState, useCallback } from "react";
import './App.scss';
import ControlCard from "./components/ControlCard";
import { downloadPngRange } from "./services/DownloadPngService";

function App() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");
  const [progress, setProgress] = useState({ value: 0, fileName: "" });

  const handleProgress = useCallback((value, fileName) => {
    setProgress({ value, fileName });
  }, []);

  const handleJobStartClick = useCallback((baseUrl, documentId, startPage, endPage, opts) => {
    setIsLoading(true);

    downloadPngRange(baseUrl, documentId, startPage, endPage, opts, handleProgress)
      .then(downloadLink => setDownloadLink(downloadLink))
      .finally(() => setIsLoading(false));
  }, [handleProgress]);

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

        <ControlCard url={url} onJobStartClick={handleJobStartClick} progress={progress.value} progressFileName={progress.fileName} />
      </div>
    </div>
  );
}

export default App;
