import React, { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import Loading from "../loading";
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Blog = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedFile, setSelectedFile] = useState(null);
  const handle = useFullScreenHandle();


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const getValueBasedOnWidth = (width) => {
    if (width > 1000) {
      return 100;
    } else if (width > 900) {
      return 50;
    } else if (width > 800) {
      return 20;
    } else if (width > 700) {
      return 10;
    } else {
      return 0;
    }
  };






  

  return (
    <div className="your-container">
      {/* File input for PDF upload */}

      <div style={{ position: 'absolute', top: '10rem', right: '2rem' }}>
    <img height="40px" src="fullscreen.svg" onClick={handle.enter} className="hoverable" alt="fullscreen" />
  </div>

      <label htmlFor="pdfUpload">Upload PDF:</label>
      <input
        type="file"
        id="pdfUpload"
        accept=".pdf"
        onChange={handleFileChange}
      />

<FullScreen handle={handle}  >

<div style={{display:'flex',justifyContent:'center'}}>
<Document
        file={selectedFile}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<Loading />}
       
      >
        <div  style={{
      display: 'flex',

      justifyContent:'center',
      background:'transparent',
      boxShadow:'none',
      flexDirection: 'column', justifyContent: 'center', alignContent: 'center', marginTop: '8rem',gap:'10px' 
    }}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            height={window.innerHeight} 
            width={window.innerWidth-getValueBasedOnWidth(window.innerWidth)}
          />
        ))}
        </div>
      </Document>

</div>


 
</FullScreen>

    </div>
  );
};
