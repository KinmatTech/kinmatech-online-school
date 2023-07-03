import React, { useRef }  from 'react'
import './application.css'
//import { BsTelephoneFill, BsHouseFill, BsEnvelopeFill, BsWhatsapp, BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import emailjs from '@emailjs/browser';

export default function Application() {
    //EmailJS Config
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tkwrs96', 'template_h4xxynk', e.target, 'HIj1SmhDu2N20_kJy')
        .then((result) => {
            console.log(result.text);
            console.log("message received")            
            document.getElementById("alert").innerHTML = ('E-Mail sent successfully, we will get back to you soon')
            }, 
            (error) => {
                console.log(error.text);
                document.getElementById("alert").innerHTML = ('Message failed! try again...')
            }
        );
        e.target.reset()
    };
    
  return (
    <div className="container justify-content-center">  
        <div className="myapp">
          
            <form className='form-group text-center' id="contactForm" ref={form} onSubmit={sendEmail}>
                <br/><br/>    
                <h5>Start Your Application</h5>                     
                <div id='alert' className='message'></div>
                <div className="row mt-4">                        
                    <div className="col-lg-12 form-item">
                        <div className="form-group">
                            <input name="user_name" id="name" type="text" className="form-int form_setup" placeholder="Enter Name:" required/>
                        </div>
                    </div>
                    <div className="col-lg-12 form-item">
                        <div className="form-group">
                            <input name="user_email" id="email" type="email" className="form-int form_setup" placeholder="Enter Email..." required/>
                        </div>
                    </div>  
                    <div className="col-lg-12 form-item">
                        <div className="form-group">
                            <input name="user_subject" id="subject" type="subject" className="form-int form_setup" placeholder="Enter Subject..." required/>
                        </div>
                    </div>                                      

                
                    <div className="col-lg-12 form-item">
                        <div className="form-group">
                            
                        <textarea
							// className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							className="form-int form_setup" placeholder="Your Message Here...*"
                            id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
                            required ></textarea>          
                            {/* <input name="user_phone" id="phone" type="phone" className="form-int form_setup" placeholder="Your Whatsapp No*" required/> */}
                        </div>
                    </div>    




                  
                 


                    <div className="col-12 btn-form-item">
                        <button className='form-int-button send-btn bg-light text-danger' type="submit" id="send" >            
                             Register
                        </button>                                                                            
                    </div>  
                                
                </div>
            </form>
            
        </div>
    </div>
  )
}