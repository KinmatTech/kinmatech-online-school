import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='container-fluid'>
        <div className="row main">
            <div className="col-md-9 left">
                <div className="left-title">LEARN HTML & CSS IN 1 MONTH AND PHP WITH PHPMYADMIN AND MYSQL IN 1 MONTH</div>
                <div className="left-title2">
                    <h1 class="bi bi-plus-lg text-success"></h1> Essential Tech Tools for Startups are Available
                </div>
                <div className="left-body">
                    <p>
                    If you're looking for a program that provides basic programming skills to kickstart your career in the tech industry,
                     Kinmatech School is the best options available.
                    </p><br/>
                    <i>These programs are designed to be beginner-friendly and require no prior programming experience. However, it's important to note that programming is a skill that requires practice and hands-on coding. Therefore, it's recommended to supplement your learning with personal projects and coding 
                        exercises to solidify your skills and gain practical experience.</i>
                </div>
                <Link to="/application">
                    <div className='left-button'><div className="btn btn-success btn-block">ENROL HERE...</div></div>
                </Link>
            </div>
            <div className="col-md-3">
                <div class="card">
                    <h5 class="card-header text-center text-success text-bold">Tutorial Contents on HTML/CSS</h5>
                    <div class="card-body">
                        <ul>
                            <li>Introduction to HTML</li>
                            <li>CSS Basics</li>
                            <li>Visual Studio Code (IDE)</li>
                            <li>Bootstrap</li>
                            <li>Vercel</li>
                            <li>Git/GitHub</li>
                            <li>Replit</li>
                            <li>Hands-on Programming: Practice Section</li>
                        </ul>
                    </div>
                </div><br/>
                
                <div class="card">
                    <h5 class="card-header text-center text-success text-big">Tutorial Contents on PHP/MYSQL</h5>
                    <div class="card-body">
                        <ul>
                            <li>Introduction to PHP</li>
                            <li>PHP Forms and User Input</li>
                            <li>PHP and MySQL Integration</li>
                            <li>PHP and Database Management</li>
                            <li>PHP Sessions and Cookies</li>
                            <li>Error Handling and Debugging</li>
                            <li>Hands-on Programming: Practice Section</li>
                        </ul>
                    </div>
                </div><br/>

                <div class="card">
                    <h5 class="card-header text-center text-bold text-success">Tutorial Features</h5>
                    <div class="card-body">
                        <div className="right">
                            <h6><i class="bi bi-geo-alt-fill text-success"></i>&nbsp; Location: &nbsp;&nbsp;Online</h6>
                            <h6><i class="bi bi-calendar-event text-success"></i>&nbsp; Duration: &nbsp;&nbsp;Four Weeks</h6>
                            <h6><i class="bi bi-alarm text-success"></i>&nbsp; Start Date: &nbsp;&nbsp;July, 2023 - Date</h6>
                            <h6><i class="bi bi-cash text-success"></i>&nbsp; Fee: HTML/CSS= &nbsp;<s>N</s>10,000.00</h6>
                            <h6><i class="bi bi-cash text-success"></i>&nbsp; PHP & MYSQL= &nbsp;<s>N</s>10,000.00</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
  )
}
