import PDFMerger from 'pdf-merger-js/browser';
import React, { useEffect, useState } from 'react';

const Merger = ({ ids }) => {
  const [mergedPdfUrl, setMergedPdfUrl] = useState();

  useEffect(() => {
    const fetchPdf = async (id) => {
      const response = await fetch(`https://universe-tau.vercel.app/pdf/${id}`);
      const blob = await response.blob();
      return blob;
    };

    const render = async () => {
      const merger = new PDFMerger();

      const numberOfPDFsToMerge = 20;
      const pdfIdsToMerge = ids.slice(0, numberOfPDFsToMerge);

      for (const id of pdfIdsToMerge) {
        const pdfBlob = await fetchPdf(id);
        await merger.add(pdfBlob);
      }

      const mergedPdf = await merger.saveAsBlob();
      const url = URL.createObjectURL(mergedPdf);
      setMergedPdfUrl(url);
    };

    render().catch((err) => {
      console.error('Error merging PDFs:', err);
    });

    // Cleanup function to revoke the URL when the component unmounts
    return () => URL.revokeObjectURL(mergedPdfUrl);
  }, [ids, setMergedPdfUrl]);

  return !mergedPdfUrl ? (
    <>Loading</>
  ) : (
    <iframe
      height={1000}
      src={mergedPdfUrl}
      title='pdf-viewer'
      width='100%'
    ></iframe>
  );
};

export default Merger;
