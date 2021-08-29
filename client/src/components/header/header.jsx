import React from 'react'
import  './header.css'
function Header() {
  
     return (
          // <!-- /Menu-->
          <div id="header-nav">
            <div className="container">
          {/* <!-- H1 for SEO --> */}
            <div className="brand">
              <a href="/"><h1>Ghostlab</h1></a>
            </div>
            {/* <!-- Small screen menu button --> */}
            <a href="#menu" className="menu-link">
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
             </a>
            {/* <!-- /Small screen menu button --> */}
            
            {/* <!-- Menu Items --> */}
            <nav id="menu" role="navigation">
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
            {/* <!-- /Menu Items --> */}
              </div>
          </div>         
     )
}

export default Header
