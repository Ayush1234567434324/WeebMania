import React, { useState, useEffect } from 'react';
import bg from './background.jpg';
import { Document, Page, pdfjs } from 'react-pdf';
import { useLocation } from 'react-router-dom';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import HTMLFlipBook from 'react-pageflip';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function GoogleDrivePDF() {
  const location = useLocation();
  const stateFromLink = location.state;
  const handle = useFullScreenHandle();

  const [numPages, setNumPages] = useState(null);
  const [folderId, setFolderId] = useState('');
  const [responseData, setResponseData] = useState([]);

  const fetchData = async (id) => {
    try {
      const response = await fetch(`https://universe-tau.vercel.app/api/check?folderId=${stateFromLink.key}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const extractedIds = data.files.map((file) => file.id);
      setResponseData(extractedIds);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(folderId);
  }, [folderId, stateFromLink.key]);

  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const pages = responseData.map((id, index) => (
    <div className="demoPage" key={index}>
      <Document file={`https://universe-tau.vercel.app/pdf/${id}`} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} renderAnnotationLayer={false} height={700} />
      </Document>
    </div>
  ));

  return (
    <div>
      <div style={{ position: 'absolute', top: '10rem', right: '2rem' }}>
        <img height="40px" src="fullscreen.svg" onClick={handle.enter} className="hoverable" alt="fullscreen" />
      </div>
      <FullScreen handle={handle}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '800px',
            marginTop: '5%',
            background: handle.active ? `url(${bg})` : 'transparent',
          }}
        >
          <HTMLFlipBook
            width={500}
            height={733}
            minWidth={315}
            maxWidth={500}
            minHeight={1000}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
          >
            {pages}
          </HTMLFlipBook>
        </div>
      </FullScreen>
    </div>
  );
}

export default GoogleDrivePDF;
