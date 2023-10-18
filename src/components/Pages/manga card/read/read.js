import React from 'react'
import { useLocation } from 'react-router-dom';
import './read.css'

export default function Read() {

  const location = useLocation();
  const data = location.state.info;


  return (
    <div>
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
              </table>
            </div>


            <div className="status">
              <table>
                <tr>
                  <td>Published By</td>
                  <td>Updating</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>OnGoing</td>
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
    </div>

  </div>
  )
}
/* <div className="btn">
          
         
       </div> */