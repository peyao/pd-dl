import React, { useEffect, useState, useCallback } from "react";
import { PARAM_KEYS, constructDownloadUrl } from "../services/DownloadPngService";

import "./ControlCard.scss";

const stripPageNumRegex = /(.*)\/[0-9]+$/;

function ControlCard({ url, onJobStartClick }) {

  const [baseUrl, setBaseUrl] = useState();
  const [documentId, setDocumentId] = useState();
  const [scale, setScale] = useState("1");
  const [contentType, setContentType] = useState("png");
  const [hasError, setHasError] = useState(false);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(1);
  const [lastPageLink, setLastPageLink] = useState("");

  useEffect(() => {
    try {
      const urlObject = new URL(url);
      const searchParams = new URLSearchParams(urlObject.search);
      const pathnameWithoutPagenum = stripPageNumRegex.exec(urlObject.pathname)[1];

      setBaseUrl(`${urlObject.origin}${pathnameWithoutPagenum}/`);
      setDocumentId(searchParams.get(PARAM_KEYS.DOCUMENTID));

      if (searchParams.has(PARAM_KEYS.SCALE)) {
        setScale(searchParams.get(PARAM_KEYS.SCALE));
      }

      setHasError(false);
    } catch {
      if (!url) return;

      console.log("Couldn't extract details from URL: ", url);
      setHasError(true);
    }
  }, [url]);

  useEffect(() => {
    if (baseUrl) {
      setLastPageLink(
        constructDownloadUrl(baseUrl, documentId, endPage - 1, { scale, contentType })
      );
    }
  }, [baseUrl, endPage, documentId, contentType]);

  const handleJobStartClick = useCallback(() => {
    onJobStartClick(baseUrl, documentId, startPage, endPage, { scale, contentType });
  }, [baseUrl, documentId, contentType, startPage, endPage]);

  return (
    <div className="control-card card">
      <header className="card-header">
        <div className="card-header-title">Job Info</div>
      </header>
      <div className="card-content">
        {hasError && <div className="notification is-danger">Unable to extract info from URL</div>}

        <table className="table">
          <tbody>
            <tr>
              <td>DocumentId</td>
              <td>{documentId}</td>
            </tr>
            <tr>
              <td>ContentType</td>
              <td>{contentType}</td>
            </tr>
            <tr>
              <td>BaseUrl</td>
              <td>{baseUrl}</td>
            </tr>
            <tr>
              <td>StartPage</td>
              <td>
                <input className="input is-small" type="text" value={startPage} onChange={e => setStartPage(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>EndPage</td>
              <td>
                <input className="input is-small" type="text" value={endPage} onChange={e => setEndPage(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>Final Page Test</td>
              <td>
                <a href={lastPageLink} target="_blank" rel="noreferrer noopener">{lastPageLink}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item" onClick={handleJobStartClick}>Start Job</a>
      </footer>
    </div>
  );
}

export default ControlCard;
