import React from 'react';
import './cards.css';

export default function Cards(props) {
  let statusColor = 'black';

  if (props.status === 'Hot') {
    statusColor = '#e33b3b';
  } else if (props.status === 'Latest') {
    statusColor = 'rgb(255, 168, 0)';
  } 
  else if(props.status === 'Legend')
  {
    statusColor = 'rgb(43, 210, 43)';
  }
  

  return (
    <div className='card-container-top' style={{ width: "175px", borderRadius: "50px", outline: "none", border: "none", height: "238px" }}>
      <div className="position-relative">
        <img className="card-img-top " src={props.artwork} alt="Card image cap" style={{ height: "238px", borderRadius: "20px", width: "175px" }} />
        
        <span className={`manga-title-badges ${props.status}`} style={{ background: statusColor,display:statusColor==='black'?"none":"block" }}>{props.status}</span>
      </div>
      <div className='title_card my-3' style={{ color: "white", fontSize: "15px", fontWeight: "600", textAlign: "center" }}>{props.title}</div>

      <div className='star-eye-check' style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'15px'}}>
        <div style={{display:'flex',gap:'4px',flexDirection:'row',lineHeight:'19px'}}>
        <i style={{color:'#c1344b'}} className="fa fa-star"></i>
      <span style={{fontSize:'0.85em',fontWeight:'600',color:'#888'}}>5</span>
        </div>
      <div  style={{display:'flex',gap:'4px',flexDirection:'row',lineHeight:'19px'}}>
      <i style={{color:'#c1344b'}} className="fa fa-eye"></i>
      <span style={{fontSize:'0.85em',fontWeight:'600',color:'#888'}}>3.5 M</span>
      </div>
     
      </div>
      <div className="list-chapter">
      <div className="chapter-item" style={{ backgroundColor: 'rgb(15, 33, 51)', borderRadius: '8px', padding: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span className="chapter font-meta">
          Chapter 97
        </span>
        <span className="post-on font-meta" style={{ fontSize: '11px' ,color:"#999" }}>
          Oct 11, 23
        </span>
      </div>
      <div className="chapter-item" style={{ backgroundColor: 'rgb(15, 33, 51)', borderRadius: '8px', padding: '8px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span className="chapter font-meta">
        Chapter 96.5
        </span>
        <span className="post-on font-meta" style={{ fontSize: '11px',color:"#999" }}>
          Sep 28, 23
        </span>
      </div>
    </div>
    </div>
  );
}
