import React, { useState, useEffect } from "react";


import { Mangapage } from "./manga card/manga-page";
import Videorender from "./video/videorender";

export const Home = () => {
  

  return (
     <>
     
     <Videorender video={'tanjiro.mp4'}/>
     
     <Mangapage/>
   
     
    
     </>
  );
};
