import React from 'react';
import './Section2.css'
const Section2 = () => {
    return(
   

       
        <div className="container" id="#section2">
        <div className="container-title container-fluid"><h2 style={{fontSize:"40px", fontWeight: "bold"}}>Section Two</h2></div>
        <main className="grid">
          <article>
            <img src={require('./images/f1.png').default} alt="Sample photo"/>
            <div className="text">
              <h1>Seamlessly visualize quality</h1>
              <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
              <button className="btn" style={{marginBottom:"30px"}}>Read More</button>
            </div>
          </article>
          <article>
            <img src={require('./images/f2.png').default} alt="Sample photo"/>
            <div className="text">
              <h3>Completely Synergize</h3>
              <p>Dramatically engage seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.</p>
              <button className="btn">Read More </button>
            </div>
          </article>
          <article>
            <img src={require('./images/f3.png').default} alt="Sample photo"/>
            <div className="text">
              <h3>Dynamically Procrastinate</h3>
              <p>Completely synergize resource taxing relationships via premier niche markets.</p>
              <button className="btn">Read More </button>
            </div>
          </article>
              <article>
            <img src={require('./images/f4.png').default} alt="Sample photo"/>
            <div className="text">
              <h3>Dynamically Procrastinate</h3>
              <p>Completely synergize resource taxing relationships via premier niche markets.</p>
             
              <button className="btn" style={{marginBottom:"30px"}}>Read More </button>
            </div>
          </article>
      
        </main>
      </div>
     
      );
}
 
export default Section2;