import React from 'react';
import './Section3.css'

const Section3 = () => {
return (  
<div className="wrapper" id="#section3">
<div className="wrapper-title container-fluid">
<h2 style={{fontSize:"40px",fontWeight:"bold",color:"white"}}>Section three</h2>
</div>
<div className="box container-fluid">
<h2>Contact Us</h2>
<form>
<div className="dbl-field">
<div className="field">
    <label>FirstName</label>
<input type="text" name="name" placeholder="Enter your name"/>
<i className='fas fa-user'></i>
</div>
<div className="field">
<label>LastName </label>
<input type="text" name="email" placeholder="Enter your email"/>
<i className='fas fa-envelope'></i>
</div>
</div>
<div className="dbl-field">
<div className="field">
<label>Email Address</label>
<input type="text" name="phone" placeholder="Enter your phone"/>

</div>
<div className="field">
<label>Phone</label>
<input  classame="fieldInside" type="text" name="website" placeholder="Enter your website"/>
<i className='fas fa-globe'></i>
</div>
</div>
<div className="dbl-field">
<div className="field">
<label>Message</label>
<div className="message">
<textarea name="message"></textarea>

</div>
</div>
<div className="button-area">
<button type="submit">Send Message</button>
<span></span>
</div>
</div>
</form>
</div>
</div>

);
}

export default Section3;

