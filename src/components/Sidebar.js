import React from'react';
import './Sidebar.scss';


function Sidebar(){
    return(
        
    <div className="sidebar active">
        <div className="logo-details">
        <span className="logo_name"><img src="images/logo.png" width="28"/></span>
        </div>
      <ul className="nav-links">
        <li>
          <a href="#" className="active">
            <img src="images/user.svg" alt="user"/>
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/grid.svg" alt="user" class="grd"/>
            <span className="links_name">Product</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/folder.svg" alt="user"/>
            <span className="links_name">Order list</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/info.svg" alt="user"/>
            <span className="links_name">Analytics</span>
          </a>
        </li>
      
      </ul>
         </div>
    );
}

export default Sidebar;