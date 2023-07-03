import React from 'react'
import './style.css'

export default function Footer() {
  return (
    <div className='container-fluid'>
      <div className="row my-footer">
        <div className="foot-left">
          <a href="https://wa.me/+2348060850958" target="_blank" rel="noopener npreferrer"><div className="foot-icon text-success"><i class="bi bi-whatsapp"></i></div></a>         
          <div className="foot-icon text-primary"><i class="bi bi-facebook"></i></div>          
          <div className="foot-icon text-info"><i class="bi bi-telegram"></i></div>
          <div className="foot-icon text-primary"><i class="bi bi-twitter"></i></div>
        </div>
        <div className="foot-right">@2023 powered by <span className='text-primary'><a href="https://www.kinmatech.com.ng" target="_blank">Kinmatech Ltd.</a></span></div>
      </div>
    </div>
  )
}
