import React from "react";
import search from './search.svg';
import './Navigation.css';
import {Helmet} from "react-helmet";

const Navigation = () =>{
    return(
        <nav>
        <div className="sidebar-button">
            <i className='bx bx-menu sidebarBtn'></i>
            <span className="dashboard">Hi John</span>
        </div>
        <div className="search-box margin-right">
            <form className="nosubmit">
                <input className="nosubmit" type="search" placeholder="Search for products, brands and more......"/>
            </form>
        </div>
        <div class="profile-details">
            <img src="images/heart.svg" class="margin-right"/>
            <span className="shopping margin-right">
                <img src="images/shopping.svg" class="margin-right"/>
                <span className="notify-badge"></span>
            </span>
            <img src="images/profile.png" alt=""/>
            <span className="admin_name">John Paul</span>
            <i className='bx bx-chevron-down' ></i>
        </div>
        <Helmet>
              <script src="assets/js/nav.js" type="text/javascript" />
        </Helmet>
        </nav>
    );

}
export default Navigation;