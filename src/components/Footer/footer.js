
import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    

   <footer>
   <div class="footerContainer">
      <div class="SocialIcons">
          <a href=""><i class="fa fa-facebook"></i></a>
          <a href=""><i class="fa fa-instagram"></i></a>
          <a href=""><i class="fa fa-twitter"></i></a>
          <a href=""><i class="fa fa-youtube"></i></a>
      </div>
      <div class="footerNav">
          <ul>
          <li><a className='foot' href="">Home</a></li>
          <li><a className='foot' href="">Privacy policy</a></li>
          <li><a className='foot mx-3' href="">Terms of Service</a></li>
          <li><a className='foot' href="">Contact</a></li>
          </ul>
      </div>
      <div class="footerButtom" style={{color:'#888',fontSize:'14px',lineHeight:'1.5',fontWeight:'550'}}>
          <p>&copy;&nbsp;2021-2024<span class="designer">&nbsp;&nbsp;Weebmania </span></p>
      </div>
  </div>
 </footer>
  )
}
