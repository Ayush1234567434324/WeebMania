import React from 'react'
import './cards.css'

export default function Cards(props) {
  return (
    <>
   
    <div className='card-container-top'  style={{ width: "175px" ,borderRadius:"50px",outline:"none",border:"none",height:"238px"}}>
    <div className="position-relative">
      <img className="card-img-top" src={props.artwork} alt="Card image cap" style={{ height: "238px",borderRadius:"20px",width:"175px" }} />
      <span class="manga-title-badges hot">HOT</span>
    </div>
    <div className='title_card' style={{color:"white" , fontSize:"15px",fontWeight:"600",textAlign:"center"}}>{props.title}</div>
  </div>

        </>
  

  )
}
