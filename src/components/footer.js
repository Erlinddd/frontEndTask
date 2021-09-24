import React from 'react';
import './footer.css'

const Footer = () => {
    return (  
        <footer className="footer">
        <div className="footer__addr">
          <img  className="image-footer" src={require('./images/Valtech-Logo-black.png').default}></img>
              
          
            
          
        </div>
        
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Footer Section Title</h2>
      
            <ul className="nav__ul">
              <li>
                <a href="#">Footer Link</a>
              </li>
      
              <li>
                <a href="#">Footer Link</a>
              </li>
                  
              <li>
                <a href="#">Footer Link </a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Footer Section Title</h2>
      
            <ul className="nav__ul">
              <li>
                <a href="#">Footer Link</a>
              </li>
      
              <li>
                <a href="#">Footer Link</a>
              </li>
                  
              <li>
                <a href="#">Footer Link </a>
              </li>
            </ul>
          </li>


          <li className="nav__item">
            <h2 className="nav__title">Footer Section Title</h2>
      
            <ul className="nav__ul">
              <li>
                <a href="#">Footer Link</a>
              </li>
      
              <li>
                <a href="#">Footer Link</a>
              </li>
                  
              <li>
                <a href="#">Footer Link </a>
              </li>
            </ul>
          </li>


          


          </ul>
          
       
        
    
      </footer>
        
    );
}
 
export default Footer;