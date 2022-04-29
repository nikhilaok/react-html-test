import React from "react";
import FilterHeader from "./FilterHeader";
import Navigation from "./Navigation";
import './FilterHeader.css';
import './Masonry.css';
import Masonry from "./Masonry";

const Home = () =>{
  const products = [
    {
      id: 'e1',
      title: 'Bond Street By Red Tape Remixa Sneakers',
      amount: 5467,
      des: 'Men Crater Remixa Sneakers',
    },
    { id: 'e2', title: 'Puma', amount: 799.49, des: 'Men Crater Remixa Sneakers',},
    {
      id: 'e3',
      title: 'Vero Moda',
      amount: 6499,
      des:'Women Crater Remixa Sneakers',
    },
    {
      id: 'e4',
      title: 'Carnatia W Running Shoes For Women',
      amount: 2767,
      des:'Women Crater Remixa Sneakers',
    },
    {
        id: 'e5',
        title: 'Vero Moda',
        amount: 3734,
        des:'Women Crater Remixa Sneakers',
    },
    {
        id: 'e6',
        title: 'WROGN',
        amount: 3734,
        des: 'Men Crater Remixa Sneakers',
    },
    {
        id: 'e7',
        title: 'ADIDAS',
        amount: 2767,
        des: 'Men Crater Remixa Sneakers',
    },
    {
        id: 'e8',
        title: 'Mast &Harbour',
        amount: 6499,
        des: 'Men Crater Remixa Sneakers',
    },
  ];
  
    return(
    <section className="home-section">
        <Navigation/>
        <div className="home-content">
            <FilterHeader/>
        </div>
       <div className="masonry-header">
          <div className="products-header">
            <p className="prod-cnt">Showing 26 Product</p>
          <div className="sorting">
            <div className="dropdown ">
                <span className="mr-1">Sort by :</span>
                <select>
                  <option>Oldest to newest </option>
                  <option selected>newest to oldest</option>
                  <option>New first</option>
                  <option>Latest</option>
                </select>
            </div>
          </div>
        </div>
      </div>
      <div className="products-grid">
        <div className="grid">
          
            {products.map((expense) =>(
              <Masonry  key={expense.id}
              title={expense.title}
              amount={expense.amount}
              description={expense.des} />
            ))};
          
        </div>
      </div>
    </section>
    );

}
export default Home;