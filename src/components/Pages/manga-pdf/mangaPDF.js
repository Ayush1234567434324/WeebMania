import React, { useState, useEffect } from 'react';
import bg from './background.jpg';
import { Document, Page, pdfjs } from 'react-pdf';
import { useLocation } from 'react-router-dom';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import HTMLFlipBook from 'react-pageflip';
import './mangaPDF.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;










function GoogleDrivePDF() {
  const location = useLocation();
  const stateFromLink = location.state.item;
  const pagecover = location.state.pages;
  console.log(pagecover)
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
    <div className="demoPage page-con" key={index+2} >
      <Document file={`https://universe-tau.vercel.app/pdf/${id}`} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} renderAnnotationLayer={false}  renderTextLayer={false} height={700} width={480} />
      </Document>
    </div>
    
  ));


  const pagesfront = <div className="demoPage  page-cover" key={0} >

</div>

const pagesextra = <div className="demoPage page-con" key={1} >
 <div className="page page-cover"  >
        <div className="page-content">
          <h2></h2>
        </div>
      </div>
</div>
 
const pagesback = <div className="demoPage page-cover" key={pages.length+2} >
 
</div>

const pagesextra1 = <div className="demoPage page-con" key={pages.length+3}  >
 <div className="page page-cover"  >
        <div className="page-content">
          <h2></h2>
        </div>
      </div>
</div>
const pagesextra2 = <div className="demoPage page-con" key={pages.length+4} >
<div className="page page-cover"  >
       <div className="page-content">
         <h2></h2>
       </div>
     </div>
</div>


const allpages =[pagesfront,pagesextra,...pages,pagesextra1,pagesextra2,pagesback];
const checkpages = [pagesfront,...pages,pagesextra1,pagesback];

const finalpages = responseData%2?checkpages:allpages;

const mainpages = finalpages.map((page, index) => {
  // Clone the page element and apply styles
  const styledPage = React.cloneElement(page, {
    style: {
      display: 'flex',
      justifyContent:'center',
      ...page.props.style,
    },
  });

  return (
    <div key={index} className="mainpage-container">
    
      {styledPage}
    </div>
  );
});

// ...

// Now you can use the mainpages array in your component.



const [see,setsee] = useState(1);
const mangabook = ()=>
{
     setsee(!see);
}




setTimeout(function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}, 20);

const book =  <div
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
 width={495}
 height={733}

 minWidth={315}
 maxWidth={1000}
 minHeight={400}
 maxHeight={1533}
 maxShadowOpacity={0.8}

 showCover={true}
 mobileScrollSupport={true}
  className="demo-book"
>
  {finalpages}
</HTMLFlipBook>
</div>

const casual =   <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', marginTop: '5rem' }}>
{mainpages}
</div>

  return (
    <div>
     
  <div style={{ position: 'absolute', top: '10rem', right: '2rem' }}>
    <img height="40px" src="fullscreen.svg" onClick={handle.enter} className="hoverable" alt="fullscreen" />
  </div>

  <FullScreen handle={handle}  >
    {handle.active && (
        see?book:casual
    )}

 
  </FullScreen>

 
</div>

    
  );
}

export default GoogleDrivePDF;
