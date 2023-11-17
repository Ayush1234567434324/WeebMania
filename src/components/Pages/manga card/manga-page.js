import React, { useState, useEffect } from "react";
import Loading from "../../loading";
import Cards from "./cards/cards";
import './manga-page.css'

export const Mangapage = () => {
  const [mangaData, setMangaData] = useState([]);

  useEffect(() => {
    // Define the URL of the API endpoint
    const apiUrl = "https://universe-tau.vercel.app/api/manga";

    // Fetch manga data from the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        // Set the fetched manga data in the state
        setMangaData(data);
        
      })
      .catch((error) => {
        // Handle any errors during the fetch
        console.error("Fetch error:", error);
      });
  }, []);




  

  return (
    
    mangaData!==null? <>
      <div className="manga-cards container " >
      <div class="font-heading">
<h1 class="h4">LATEST RELEASES</h1>
</div>
        <div className="row" style={{display:"flex",justifyContent:"center"}}>
          {mangaData.map((manga) => (
            <div key={manga.id} className=" manga-card col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2   badge-pos-3  manga-check-card" style={{marginTop:'12rem'}}>
              <Cards
                title={manga.title}
                artwork={manga.artwork}
                artist={manga.artist}
                description={manga.description}
                status={manga.status}
                data = {manga}

              />
            </div>
            
          ))}
        </div>
      </div>
      </>:<Loading></Loading>
  );
};
