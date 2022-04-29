import React from "react";
import './FilterHeader.css';
import {Helmet} from "react-helmet";


const FilterHeader = () =>{
    return(
        <div class="filter-container">
          <div class="filters">
              <p class="p-text">Filters based on your profile</p>
              <ul class="inline-pills inline-block">
                <li><a class="">Size
                    <span class="icon"></span>
                </a></li>
                <li><a class="">Color <span class="icon"></span></a></li>
                <li><a class="">Nike <span class="icon"></span></a></li>
                <li><a class="">Casual <span class="icon"></span></a></li>
                <li><a class="">Foottwear <span class="icon"></span></a></li>
              </ul>
          </div>
          <div class="right-filter">
            <ul class="inline-block">
                <li><a>Clear all</a></li>
                <li><a class="button-filer" a href="#" data-drawer-trigger aria-controls="drawer-name" aria-expanded="false">Filters</a></li>
            </ul>
            <section class="drawer" id="drawer-name" data-drawer-target>
                <div class="drawer__overlay" data-drawer-close tabindex="-1"></div>
                <div class="drawer__wrapper">
                
                   <span class="close"><button class="drawer__close" data-drawer-close aria-label="Close Drawer"></button></span> 
                  
                  <div class="drawer__content">
                    <h2>Filters</h2>
                    <div class="gender">
                        <ul class="unstyled gender-boxes">
                            <li class="mb-1"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="vehicle"/>
                                <label for="vehicle1">Men</label></li>
                            <li class="mb-1"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1">Women</label></li>
                            <li class="mb-1"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1">Boys</label></li>
                            <li class="mb-1"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1">Girls</label></li>
                        </ul>
                        <p>Price</p>
                        <ul class="unstyled price-boxes mb-1">
                            <li class="mb-1">
                                <input type="checkbox" id="pc1" name="pcr1" value=""/>
                                <label for="vehicle1">Rs. 1997 to Rs. 6172 (106)</label>
                            </li>
                            <li class="mb-1">
                                <input type="checkbox" id="pc1" name="pcr1" value=""/>
                                <label for="vehicle1">Rs. 6172 to Rs. 10347(16)</label>
                            </li>
                            <li class="mb-1">
                                <input type="checkbox" id="pc1" name="pcr1" value=""/>
                                <label for="vehicle1">Rs. 10347 to Rs. 14522(14)</label>
                            </li>
                            <li class="mb-1">
                                <input type="checkbox" id="pc1" name="pcr1" value=""/>
                                <label for="vehicle1">Rs. 167 to Rs. 67388 (106)</label>
                            </li>
                            <li class="mb-1">
                                <input type="checkbox" id="pc1" name="pcr1" value=""/>
                                <label for="vehicle1">Rs. 5267 to Rs. 77278 (6)</label>
                            </li>
                            <li class="mb-1">
                                <input type="checkbox" id="pc1" name="pcr1" value=""/>
                                <label for="vehicle1">Rs. 1566 to Rs. 28882 (26)</label>
                            </li>
                        </ul>
                        <p>Categories</p>
                        <ul class="unstyled price-boxes mb-1">
                            <li class="mb-1">
                                <input type="checkbox" id="pc1" name="pcr1" value=""/>
                                <label for="vehicle1">Tshirts(106)</label>
                            </li>
                            <li class="mb-1">
                                <input type="checkbox" id="pc1" name="pcr1" value=""/>
                                <label for="vehicle1">Tights(16)</label>
                            </li>
                            <li class="mb-1">
                                <input type="checkbox" id="pc1" name="pcr1" value=""/>
                                <label for="vehicle1">Pants(14)</label>
                            </li>
                            <li class="mb-1">
                                <input type="checkbox" id="pc1" name="pcr1" value=""/>
                                <label for="vehicle1">Shoes(106)</label>
                            </li>
                            <li class="mb-1">
                                <input type="checkbox" id="pc1" name="pcr1" value=""/>
                                <label for="vehicle1">shoes(6)</label>
                            </li>
                            <li class="mb-1">
                                <input type="checkbox" id="pc1" name="pcr1" value=""/>
                                <label for="vehicle1">dress(26)</label>
                            </li>
                            <li class="mb-1">
                                <input type="checkbox" id="pc1" name="pcr1" value=""/>
                                <label for="vehicle1">shoes(6)</label>
                            </li>
                            <li class="mb-1">
                                <input type="checkbox" id="pc1" name="pcr1" value=""/>
                                <label for="vehicle1">dress(26)</label>
                            </li>
                        </ul>
                        <p>Color</p>
                        <ul class="unstyled color">
                            <li class="mb-1"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" class="vehicle"/>
                                <span class="circle_content red"></span> <label for="vehicle1"> Black</label></li>
                            <li class="mb-1"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <span class="circle_content blue"></span> <label for="vehicle1 blue">Blue</label></li>
                            <li class="mb-1"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <span class="circle_content Yellow"></span> <label for="vehicle1 ">Blue</label></li>
                            <li class="mb-1"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <span class="circle_content Green"></span>  <label for="vehicle1 ">Pink</label></li>
                        </ul>
                    </div>
                  </div>
                  <div class="col-2">
                      <button class="clr-all">clear All</button>
                      <button class="apply">Apply</button>
                  </div>
                </div>
              </section>
            <Helmet>
              <script src="assets/js/filter.js" type="text/javascript" />
            </Helmet>
        </div>

      </div>
    );
}
export default FilterHeader;