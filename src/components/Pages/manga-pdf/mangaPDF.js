import React, { useState,useCallback } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from 'react-pageflip';
import bg from './background.jpg'
import { useLocation } from 'react-router-dom';
import './mangaPDF.css'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function GoogleDrivePDF(props) {
  const location = useLocation();
  const stateFromLink = location.state;


console.log(stateFromLink)
  const divStyle = {
  
    width:'960px',
    marginBottom:'8rem'
   
   
    
    
    
  };
  



  const handle = useFullScreenHandle();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const pages = Array.from({ length: numPages }, (_, index) => (
    
    <div className="demoPage" key={index} >
      
      <Page 
           
         
             pageNumber={pageNumber + index}  renderAnnotationLayer={0}   height={700} />

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


    <div>

         <div style={{position:'absolute',top:'10rem',right:'2rem'}}>
          <img height='40px' src='fullscreen.svg' onClick={handle.enter} class="hoverable"/>
      
      </div>
      <FullScreen handle={handle}>
       
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'800px',marginTop:'8%', background:handle.active?`url(${bg})`:'transparent'}}>
    <div style={divStyle}>
      
      <Document file={`https://universe-tau.vercel.app/pdf/${stateFromLink}`} onLoadSuccess={onDocumentLoadSuccess}>
     
        <HTMLFlipBook 
     width={550}
     height={733}
     size="stretch"
     minWidth={315}
     maxWidth={1000}
     minHeight={400}
     maxHeight={1533}
         
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            
            
            
        className='demo-book'
            >
              
        {pages}
        </HTMLFlipBook>
      </Document>
      </div>
      </div>
      </FullScreen>
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