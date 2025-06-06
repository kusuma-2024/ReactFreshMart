import React from 'react';
import './About.css';
import { FaLeaf, FaShoppingCart, FaFish, FaTruck, FaStar, FaTree, FaApple } from 'react-icons/fa';
import { GiCheeseWedge } from 'react-icons/gi';
import { FaFolderTree } from 'react-icons/fa6';

function About() {
  return (
    <div className="about-page">
      <h1>About Fresh Mart</h1>
      <p className="subtitle">Your one-stop destination for high-quality and fresh food products.</p>

      {/* Who We Are */}
      <div className="section">
        <h2 className="blue-heading">Who We Are</h2>
        <p>
          At <strong>Fresh Mart</strong>, we are committed to delivering <strong>fresh and high-quality food items</strong> right to your doorstep.
          Our range includes <strong>vegetables, dairy products, meat and seafood, groceries, and bakery essentials</strong>. We prioritize freshness, quality, and customer satisfaction.
        </p>
      </div>

      {/* Our Mission */}
      <div className="mission-card">
        <h1>Our Mission</h1>
        <p>
          To provide <strong>fresh, organic, and high-quality</strong> food products while maintaining the highest standards of hygiene, sustainability, and customer convenience.
        </p>
      </div>

      {/* Our Products */}
      <div className="products-section">
        <h1>Our Products</h1>
        <div className="products-grid">
          <div className="product-item"><FaFish size={40} /><p>Meat & Seafood</p></div>
          <div className="product-item"><FaLeaf size={40} /><p>Fresh Vegetables</p></div>
                    <div className="product-item"><FaApple size={40} /><p>Organic Fruits</p></div>
          <div className="product-item"><GiCheeseWedge size={40} /><p>Bakery & Beverages</p></div>
          <div className="product-item"><FaShoppingCart size={40} /><p>Groceries & Staples</p></div>
          <div className="product-item"><FaTruck size={40} /><p>Fast Delivery</p></div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="choose-card">
        <h1>Why Choose Fresh Mart?</h1>
        <ul className="choose-list">
          <li>✓ 100% Fresh & Quality Products</li>
          <li>✓ Ethically Sourced & Hygienic</li>
          <li>✓ Quick & Hassle-Free Delivery</li>
          <li>✓ Affordable Prices & Discounts</li>
          <li>✓ Excellent Customer Support</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
