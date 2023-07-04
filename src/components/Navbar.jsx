import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" class="navbar-brand" id="branded">
                <div className="mylogo"><img src='kinmat-logo.png' alt='logo' /></div>
                <div className="mybrand text-success txt-bold">Kinmatech School WorldWide</div>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active" >
                        <Link to="/application" class="nav-link" id='apply-btn'>Register Now</Link>
                    </li>                                    
                </ul>
            </div>
        </nav>
    </div>
  )
}
