import React,{useEffect,useState } from 'react'
import { NavLink, useLocation} from 'react-router-dom';

import './read.css'

export default function Read() {
 
  const location = useLocation();
   
  const pathParts =   window.location.href;
 
  const Part = pathParts.split('/')
  const firstPartOfPath = location.pathname.split('/')[1]
  .replace(/%20/g, '') // Replace space (URL-encoded as %20)
  .replace(/-/g, '')   // Replace hyphens
  .replace(/_/g, ''); 
 
  const existingData = location.state ? location.state.info : null;
  const [data, setData] = useState(existingData);
  
  const apiUrl = `https://universe-tau.vercel.app/api/${firstPartOfPath}/manga`;
  useEffect(() => {
    if (data === null || data === undefined) {
      // Data is null or undefined, so fetch it from the API
    
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((newData) => {
          // Update the state with the fetched data
          setData(newData);
        })
        .catch((error) => {
          // Handle errors
          console.error('Error:', error);
        });
    }
  
 



  }, [data]); // Add data as a dependency to prevent multiple API requests

  // The rest of your component logic
 














  setTimeout(function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 20);
   
  

   
 
  return (
    <>
   {data? 
    <div className="bg">
      <div className="box">

        <div className="box2">
          <img src={data.artwork} alt="My Image" class="anime-image-container" />
        </div>
        <div className="box1">
          <h1 className='op my-3' style={{color:'white',fontSize:'20px',marginLeft:'25px',fontWeight:600}}>{data.title}</h1>
          <div className='star-eye-check' style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'15px',width:'150px',marginLeft:'25px',borderColor:'white'}}>
        <div style={{display:'flex',gap:'4px',flexDirection:'row'}}>
        <i style={{color:'rgb(236,54,73)' ,fontSize:'1.3em'}} className="fa fa-star"></i>
      <span style={{fontSize:'1em',fontWeight:'300',color:'#888'}}>5</span>
        </div>
      <div  style={{display:'flex',gap:'4px',flexDirection:'row'}}>
      <i style={{color:'rgb(236,54,73)' ,fontSize:'1.3em'}} className="fa fa-eye" ></i>
      <span style={{fontSize:'1em',fontWeight:'300',color:'#888'}}>3.5 M</span>
      </div></div>

          <div className="details">

          <div className="author">
  <table>
    <tbody>
      <tr>
        <td>Name</td>
        <td>{data.title}</td>
      </tr>
      <tr>
        <td>Author</td>
        <td>{data.artist}</td>
      </tr>
      <tr>
        <td>Status</td>
        <td>{data.status}</td>
      </tr>
      <tr>
        <td>Genre(s)</td>
        <td>
          {data.genre.map((genre, index) => (
            <span key={index}>
              {genre}
              {index !== data.genre.length - 1 && " "} {/* Add space if not the last element */}
            </span>
          ))}
        </td>
      </tr>
    </tbody>
  </table>
</div>



            <div className="status">
              <table className='status-flex'>
                <tr className='status-gap gap-c'>
                  <td className='pb follow'>Follow</td>
                  <td className='pb pb-c'>@Weebmania</td>
                </tr>
              </table>
              <div className='bookmark mx-3' style={{ display: 'flex', flexDirection: 'row', gap: '40px' }}>
  <div>
    <i style={{ color: 'rgb(236, 54, 73)', fontSize: '2.5em', borderRight: '1px solid white', paddingRight: '30px' }} className="fa fa-star"></i>
    <p style={{marginLeft:'-10px'}}>Rate this</p>
    <button className="btn-text">Read Me</button>
  </div>
  <div>
    <i style={{ color: 'rgb(236, 54, 73)', fontSize: '2.5em' }} className="fa fa-bookmark"></i>
    <p style={{marginLeft:'-20px'}}>Bookmark</p>
    <button className="btn-text">Read Last</button>
  </div>
</div>

            </div>



          </div>

      


        </div>
      </div>
      <div className='summary-content'>

        <div className='h4 summary' style={{width:'115px'}}>Summary</div>
        <div style={{color:'#fff'}}>{data.description}</div>
        </div>
        <div className='tag-content'>

        <div className='h4 summary' style={{width:'60px'}}>Tags</div>
        <div style={{ color: '#fff' }}>
  {data.genre.map((genre, index) => (
    <span key={index}>
      #{genre}&nbsp;&nbsp;&nbsp;&nbsp;
      {index < data.genre.length - 1 && ' '}
    </span>
  ))}
</div>
        </div>
        <div className='chapter-content'>
<div className='h4 summary' style={{width:'100px'}}>Chapter</div>
<table className="fixed_header" style={{ background: "rgb(8 17 29)", borderRadius: '10px', boxShadow: '0 2px 5px rgb(0 0 0 / 50%)' }}>
      <tbody style={{display:'flex' , gap:'10px',flexDirection:'column'}}>
      {data.url.map((item, index) => (
  <tr key={index} className="hoverable">
 <NavLink to='/test' state={{ item: item, pages: data.page,info:data._id,manganame:firstPartOfPath }} style={{outline:'none',textDecoration:'none' , color:'white'}}>
  Chapter {index + 1}
</NavLink>

  </tr>
))}
      </tbody>
    </table>

</div>

    </div>:null}
    
   </>
  )
}
/* <div className="btn">
          
         
       </div> */