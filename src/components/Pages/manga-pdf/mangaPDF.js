import React, { useState,useEffect} from 'react';
import { Document, Page, pdfjs,Thumbnail } from "react-pdf";
import HTMLFlipBook from 'react-pageflip';
import bg from './background.jpg'
import { useLocation } from 'react-router-dom';
import './mangaPDF.css'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Merger from './merge/merger';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function GoogleDrivePDF() {
  const location = useLocation();
  const stateFromLink = location.state;


  const divStyle = {
  
    width:'960px',
    marginBottom:'8rem'
   
   
    
    
    
  };
  



  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://universe-tau.vercel.app/api/check");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log(responseData);
  
        // Extracting the 'id' property from each element in data.files
        const extractedIds = responseData.files.map(file => file.id);
  
        // Updating the state with the extracted ids
        setdata(extractedIds);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const handle = useFullScreenHandle();


            setTimeout(function () {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }, 20);
   



          

  return (

//http://localhost:8000
   //1_EFbSpVRrZAovuQ7lPf87vNUjZeW-o72
   //https://universe-tau.vercel.app/pdf/${pageData}
    <div>

         <div style={{position:'absolute',top:'10rem',right:'2rem'}}>
          <img height='40px' src='fullscreen.svg' onClick={handle.enter} class="hoverable"/>
      
      </div>
      <FullScreen handle={handle}>
       
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'800px',marginTop:'8%', background:handle.active?`url(${bg})`:'transparent'}}>
    <div style={divStyle}>
    
      <Merger ids={data}/>
      </div>
      </div>
      </FullScreen>
      </div>
  );
}

export default GoogleDrivePDF;