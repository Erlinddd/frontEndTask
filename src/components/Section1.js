import React from 'react';
import './Section1.css'
const Section1 = () => {


  const  href="mailto:mk.contact@valtech.com"
 
    return (  
        <section className='showcase'>
            <div className='showcase-container'>
            <div className="showcase-title container-fluid">
            <h2 style={{fontSize:"40px" }}> <b>Section one </b> </h2>
            </div>
            <div className="showcase-overlay">
               
                <div className="showcase-form">
                <button className="button" ><span><a href={href}>Contact</a></span></button>
                <p>Lorem ipsum de fuento os de ortigato por favor</p>
                </div>
            </div>
            </div>
        </section>
    );
}
 
export default Section1;
