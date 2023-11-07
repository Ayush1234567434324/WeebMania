import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from 'react-pageflip';
import bg from './background.jpg'
import { useLocation } from 'react-router-dom';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function GoogleDrivePDF() {
  const location = useLocation();
  const stateFromLink = location.state;


console.log(stateFromLink)
  const divStyle = {
    backgroundImage: `url(${bg})`,
    minWidth: '315px',
    minHeight: '400px',
    width: '100%',
    maxWidth: '2000px',
    display: 'block',
  };
  




  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const pages = Array.from({ length: numPages }, (_, index) => (
    <div className="demoPage" key={index}>
      <Page  width={500}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={500}
            minHeight={400}
            maxHeight={1533}  pageNumber={pageNumber + index}  renderAnnotationLayer={0}/>
    </div>
  ));

/* width={550}
            height={733}
            size=&quot;stretch&quot;
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true} */

  return (
    <div style={divStyle}>
      <Document file={`https://universe-tau.vercel.app/pdf/${stateFromLink}`} onLoadSuccess={onDocumentLoadSuccess}>
     
        <HTMLFlipBook width={500}
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
      </Document>
    </div>
  );
}
/*width={550}
            height={733}
            size=&quot;stretch&quot;
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true} */
export default GoogleDrivePDF;