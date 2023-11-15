import React, { useState, useEffect } from 'react';
import bg from './background.jpg';
import { Document, Page, pdfjs } from 'react-pdf';
import { useLocation } from 'react-router-dom';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import HTMLFlipBook from 'react-pageflip';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// ... other imports and code

function GoogleDrivePDF() {
  const location = useLocation();
  const stateFromLink = location.state;
  const handle = useFullScreenHandle();
  const [ids, setIds] = useState([]);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://universe-tau.vercel.app/api/check');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log(responseData);

        const extractedIds = responseData.files.map((file) => file.id);
        setIds(extractedIds);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const pages = Array.from({ length: numPages }, (_, index) => (
    <Page key={index} pageNumber={pageNumber + index} renderAnnotationLayer={0} height={700} />
  ));



  return (
    <div>
      <div style={{ position: 'absolute', top: '10rem', right: '2rem' }}>
        <img height="40px" src="fullscreen.svg" onClick={handle.enter} className="hoverable" />
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
        <HTMLFlipBook width={500} height={733} minWidth={315} maxWidth={500} minHeight={1000} maxHeight={1533} maxShadowOpacity={0.5} showCover={true} mobileScrollSupport={true}>
  {ids.slice(0, 50).map((id, index) => (
    <div className="demoPage" key={index}>
      <Document file={`https://universe-tau.vercel.app/pdf/${id}`} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} renderAnnotationLayer={false} height={700} />
      </Document>
    </div>
  ))}
</HTMLFlipBook>

        </div>
      </FullScreen>
    </div>
  );
}

export default GoogleDrivePDF;
