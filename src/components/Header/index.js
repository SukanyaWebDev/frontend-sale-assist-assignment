// Header Component

import "./index.css"

import { CiSearch } from "react-icons/ci";

import { RiShoppingBagLine } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";

import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-top-section">
            <h1 className="logo">TANN FRIM</h1>
            <ul className="list-of-icons">
                <li><CiSearch className = "icons"/></li>
                <li><IoIosContact className = "icons"/></li>
                <li><RiShoppingBagLine className = "icons"/></li>
                <li><CiBookmark className = "icons"/></li>
                
               
            </ul>
        </div>
        <nav>
          <ul>
            <li>Bags</li>
            <li>Travel</li>
            <li>Accesories</li>
            <li>gifting</li>
            <li>jewelery</li>
          </ul>
        </nav>
        <ul className="list-of-items">
            <li><img src = "https://res.cloudinary.com/dxorhiaeo/image/upload/v1713066477/Frame_461item1_ogcmcx.png" alt = "all-bags" />
            <h3>All Bags</h3>
            </li>
            <li><img src = "https://res.cloudinary.com/dxorhiaeo/image/upload/v1713066669/Frame_50item2_zc6pts.png" alt = "vanity-bag" />
            <h3>Vanity Pouch</h3></li>
            <li><img src = "https://res.cloudinary.com/dxorhiaeo/image/upload/v1713066870/Frame_49item3_elmvkj.png"  alt = "tote-bags"/>
            <h3>Tote Bag</h3></li>
            <li><img src = "https://res.cloudinary.com/dxorhiaeo/image/upload/v1713066973/Frame_13item4_mthcwf.png" alt = "duffle-bag" /> <h3>duffle</h3></li>
            <li><img src = "https://res.cloudinary.com/dxorhiaeo/image/upload/v1713067053/Frame_49item6_tjxppu.png" alt = "laptop-bags"/> <h3>Laptop Sleeve</h3></li>
            <li><img src = "https://res.cloudinary.com/dxorhiaeo/image/upload/v1713069877/Frame_22sling-bag_nkutcb.png" alt = "slings-bags"/> <h3>slings Bags</h3></li>
            <li><img src = "https://res.cloudinary.com/dxorhiaeo/image/upload/v1713070033/Frame_20hand-bag_igrdtz.png" alt = "hand-bags" /> <h3>hand Bags</h3></li>

       
        </ul>
      </header>
    );
  }
}

export default Header;