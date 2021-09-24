import React from 'react';
import './navbar.css'
import {Link} from 'react-scroll'
import {TiThMenu} from 'react-icons/ti'
const Navbar = () => {
    return ( 
        <div>
          <nav>

              <img className="logo" src={require('./images/Valtech-Logo-black@2x.png').default}></img>
              <button className="mobile-btn"><TiThMenu/></button>
              <ul className="nav-links">
                  <li style={{marginRight:"20px"}}><a> <b>Section One  </b> </a></li>
                  <li style={{marginRight:"20px"}} > <Link to="#section2"  spyThrottle={500} smooth={true} duration={1000}> <b> Section Two  </b> </Link></li>
                  <li style={{marginRight:"20px"}} ><Link to="#section3" smooth={true} duration={1000}>  <b> Section Three </b> </Link></li>
              </ul>
          </nav>
        </div>
     );
}
 
export default Navbar;