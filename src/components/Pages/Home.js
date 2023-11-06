import React, { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";


import { Mangapage } from "./manga card/manga-page";
import GoogleDrivePDF from "./manga-pdf/mangaPDF";
import { Videorender } from "./video/videorender";


export const Home = () => {
  

  return (
    
     
    <>
     <NavBar/>
     <Videorender video={'tanjiro.mp4'}/>
    
     <Mangapage/>
   
     
    
     </>
   
     
    
   
  );
};
