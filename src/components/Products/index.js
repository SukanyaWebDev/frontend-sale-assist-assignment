import React, { Component } from 'react';
import './index.css';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'The Brown Metro Movers',
          price: 200,
          originalPrice: 400,
          discount: 50,
          image: 'https://res.cloudinary.com/dxorhiaeo/image/upload/v1713070968/Mask_groupbag1_jvcoyp.png'
        },
        {
          id: 2,
          name: 'The Brown Metro Movers',
          price: 400,
          originalPrice: 800,
          discount: 50,
          image: 'https://res.cloudinary.com/dxorhiaeo/image/upload/v1713072838/SIPR04031_01_1bag2_aekpid.png'
        },
        // Add more products here...
        {
          id: 3,
          name: 'The Blue Traveler Backpack',
          price: 150,
          originalPrice: 300,
          discount: 50,
          image: 'https://res.cloudinary.com/dxorhiaeo/image/upload/v1713072875/SIPR04085_01_1bag3_etat3j.png'
        },
        {
          id: 4,
          name: 'The Green Adventure Pack',
          price: 300,
          originalPrice: 600,
          discount: 50,
          image: 'https://res.cloudinary.com/dxorhiaeo/image/upload/v1713072913/SIPR04086_01_1bag4_y0ncw3.png'
        },
        {
          id: 5,
          name: 'The Red Daypack',
          price: 100,
          originalPrice: 200,
          discount: 50,
          image: 'https://res.cloudinary.com/dxorhiaeo/image/upload/v1713070968/Mask_groupbag1_jvcoyp.png'
        },
        {
          id: 6,
          name: 'The Black Commuter Bag',
          price: 250,
          originalPrice: 500,
          discount: 50,
          image: 'https://res.cloudinary.com/dxorhiaeo/image/upload/v1713072838/SIPR04031_01_1bag2_aekpid.png'
        },
        {
            id: 7,
            name: 'The Brown Metro Movers',
            price:520,
            originalPrice: 540,
            discount: 50,
            image: 'https://res.cloudinary.com/dxorhiaeo/image/upload/v1713072875/SIPR04085_01_1bag3_etat3j.png'
          },
          {
            id: 8,
            name: 'The Brown Metro Movers',
            price: 1000,
            originalPrice:2000,
            discount: 50,
            image: 'https://res.cloudinary.com/dxorhiaeo/image/upload/v1713072913/SIPR04086_01_1bag4_y0ncw3.png'
          },
          {
            id: 9,
            name: 'The Brown Metro Movers',
            price: 600,
            originalPrice: 1200,
            discount: 50,
            image: 'https://res.cloudinary.com/dxorhiaeo/image/upload/v1713072875/SIPR04085_01_1bag3_etat3j.png'
          },
          {
            id: 10,
            name: 'The Brown Metro Movers',
            price: 770,
            originalPrice:1440,
            discount: 50,
            image: 'https://res.cloudinary.com/dxorhiaeo/image/upload/v1713072913/SIPR04086_01_1bag4_y0ncw3.png'
          },
      ],
      filteredProducts: []
    };
  }

  componentDidMount() {
    this.setState({ filteredProducts: [...this.state.products] });
  }

  filterProducts = (criteria) => {
    let filteredList = [];
    const { products } = this.state;
    switch (criteria) {
      case 'all':
        filteredList = [...products];
        break;
      case 'priceRange1':
        filteredList = products.filter(product => product.price >= 100 && product.price <= 500);
        break;
      case 'priceRange2':
        filteredList = products.filter(product => product.price >= 501 && product.price <= 1000);
        break;
      default:
        filteredList = [...products];
        break;
    }
    this.setState({ filteredProducts: filteredList });
  };

  handleFilterChange = (e) => {
    const criteria = e.target.value;
    this.filterProducts(criteria);
  };

  render() {
    const { filteredProducts } = this.state;
    return (
      <div className='products-container'>
        <div className='filter-section'>
          <label htmlFor='filter'>Filter by:</label>
          <select id='filter' onChange={this.handleFilterChange}>
            <option value='all'>All</option>
            <option value='priceRange1'>Price Range: $100 - $500</option>
            <option value='priceRange2'>Price Range: $501 - $1000</option>
          </select>
        </div>
        <h2 className='bags-pack-head'>Bags.Backpacks</h2>
        <ul className='products-list'>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} className='main-image' />
              <img className='bookmark-img' src="https://res.cloudinary.com/dxorhiaeo/image/upload/v1713071182/Bookmarkbook_mark_u0kfq5.png" alt="bookmark" />
              <h4 className='product-name'>{product.name}</h4>
              <div className='product-name-container'>
                <div className='price-container'>
                  <h5>${product.price}</h5>
                  <p>${product.originalPrice}</p>
                  <p className='off-mess'>({product.discount}% Off)</p>
                </div>
                <img className="cart-image" src="https://res.cloudinary.com/dxorhiaeo/image/upload/v1713071347/Group_450cart-bag_aj9u1n.png" alt="add-cart-img" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
