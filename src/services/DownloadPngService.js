import pako from "pako";

export const PARAM_KEYS = {
  DOCUMENTID: "DocumentID",
  SCALE: "Scale",
  CONTENTTYPE: "ContentType"
};

export function constructDownloadUrl(baseUrl, documentId, pageNum, opts = {}) {
  const { contentType = "png" } = opts;
  return `${baseUrl}${pageNum}?${PARAM_KEYS.DOCUMENTID}=${documentId}&${PARAM_KEYS.CONTENTTYPE}=${contentType}`;
}

export async function downloadPng(baseUrl, documentId, pageNum, opts = {}) {
  if (!baseUrl || !documentId) Promise.reject("Failed downloadPng : Missing params");

  const downloadUrl = constructDownloadUrl(baseUrl, documentId, pageNum, opts);

  console.log("downloadPng url: ", downloadUrl);

  return fetch(
    downloadUrl,
    { method: "GET", mode: "cors" }
  )
    .then(res => res.blob())
    .then(blob => {
      console.log("blob: ", blob);
      return URL.createObjectURL(blob)
    });
}

export async function downloadPngRange(baseUrl, documentId, startPage = 0, endPage = 1, opts = {}) {
  if (!baseUrl || !documentId) Promise.reject("Failed downloadPngRange : Missing params");

  const imageBlobs = [];

  for (let currPage = 0; currPage < endPage; currPage++) {
    imageBlobs[currPage] = await downloadPng(baseUrl, documentId, currPage, opts)
  }

  console.log("imageBlobs: ", imageBlobs);

  // TODO: Run URL.revokeObjectURL() for each of the imageBlobs
  // imageBlobs.forEach(blobUrl => URL.revokeObjectURL(blobUrl));

  return imageBlobs[0];
}
