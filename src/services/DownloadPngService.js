import JSZip from "jszip";
import { saveAs } from "file-saver";

const CF_WORKER = "https://plain-math-7b9e.peyao.workers.dev/";
const OUTPUT_ZIP_FILENAME = "pd-dl-output.zip";

export const PARAM_KEYS = {
  DOCUMENTID: "DocumentID",
  SCALE: "Scale",
  CONTENTTYPE: "ContentType"
};

function constructPngFilename(currPage, endPage) {
  const totalDigits = (endPage + "").length;
  const currPageDigits = (currPage + "").length;
  let fileName = "";

  for (let i = 0; i < totalDigits - currPageDigits; i++) {
    fileName += "0";
  }
  fileName += currPage;

  return `${fileName}.png`;
}

export function constructDownloadUrl(baseUrl, documentId, pageNum, opts = {}) {
  const { contentType = "png", showCfWorkerPath = false } = opts;
  const cfWorkerPath = showCfWorkerPath ? `${CF_WORKER}?` : ""

  return `${cfWorkerPath}${baseUrl}${pageNum}?${PARAM_KEYS.DOCUMENTID}=${documentId}&${PARAM_KEYS.CONTENTTYPE}=${contentType}`;
}

export async function downloadPng(baseUrl, documentId, pageNum, opts = {}) {
  if (!baseUrl || !documentId) Promise.reject("Failed downloadPng : Missing params");

  const downloadUrl = constructDownloadUrl(baseUrl, documentId, pageNum, { ...opts, showCfWorkerPath: true });

  return fetch(
    downloadUrl,
    { method: "GET", mode: "cors" }
  )
    .then(res => res.blob())
}

export async function downloadPngRange(baseUrl, documentId, startPage = 0, endPage = 1, opts = {}, progressCallback) {
  if (!baseUrl || !documentId) Promise.reject("Failed downloadPngRange : Missing params");

  const zip = new JSZip();
  const imageBlobs = [];

  for (let currPage = startPage; currPage < endPage; currPage++) {
    const blob = await downloadPng(baseUrl, documentId, currPage, opts)
    imageBlobs.push(blob);

    const fileName = constructPngFilename(currPage, endPage);
    zip.file(fileName, blob, { binary: true });
    progressCallback((currPage + 1) / endPage * 100, fileName);
  }

  return zip.generateAsync({ type: "blob" }).then(content => {
    saveAs(content, OUTPUT_ZIP_FILENAME);
  });
}
