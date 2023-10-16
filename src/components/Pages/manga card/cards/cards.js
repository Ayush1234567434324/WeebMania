import React from 'react';
import './cards.css';

export default function Cards(props) {
  let statusColor = 'black';

  if (props.status === 'Hot') {
    statusColor = '#e33b3b';
  } else if (props.status === 'Latest') {
    statusColor = 'rgb(255, 168, 0)';
  } else if (props.status === 'Completed') {
    statusColor = '#3c64df';
  }
  else if(props.status === 'Legend')
  {
    statusColor = 'rgb(43, 210, 43)';
  }
  

  return (
    <div className='card-container-top' style={{ width: "175px", borderRadius: "50px", outline: "none", border: "none", height: "238px" }}>
      <div className="position-relative">
        <img className="card-img-top " src={props.artwork} alt="Card image cap" style={{ height: "238px", borderRadius: "20px", width: "175px" }} />
        <span className={`manga-title-badges ${props.status}`} style={{ background: statusColor }}>{props.status}</span>
      </div>
      <div className='title_card my-3' style={{ color: "white", fontSize: "15px", fontWeight: "600", textAlign: "center" }}>{props.title}</div>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div ><i class="icon ion-md-thumbs" style={{background:'red'}}></i></div>
        <div><i class="icon ion-md-eye" style={{background:'red'}}></i></div>
      </div>
    </div>
  );
}
