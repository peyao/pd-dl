import React from "react";

function DownloadStatusCard({ progress, downloadLink }) {
  return (
    <div className="control-card card">
      <header className="card-header">
        <div className="card-header-title">Download Status</div>
      </header>
      <div className="card-content">
      </div>
      <footer className="card-footer">
        <a disabled={!downloadLink} href={downloadLink} className="card-footer-item">Download Zip</a>
      </footer>
    </div>
  );
}


export default DownloadStatusCard;
