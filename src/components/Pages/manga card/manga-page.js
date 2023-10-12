import React, { useState, useEffect } from "react";
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
    
        
      <div className="manga-cards container " >
        <div className="row" style={{display:"flex",justifyContent:"center"}}>
          {mangaData.map((manga) => (
            <div key={manga.id} className=" manga-card col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2   badge-pos-3 my-5 manga-check-card">
              <Cards
                title={manga.title}
                artwork={manga.artwork}
                artist={manga.artist}
                description={manga.description}
                status={manga.status}

              />
            </div>
            
          ))}
        </div>
      </div>
    
  );
};
