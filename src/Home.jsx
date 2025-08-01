import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const ProductItems = useSelector(globalState => globalState.products.home);
  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        <h1 className="main-heading">
          Welcome To Fresh Mart <span className="basket-symbol"></span>
        </h1>
       <br></br>
        <h2 className="sub-heading">Your one-stop shop for fresh and quality products</h2>

        <div className="product-grid">
          {ProductItems.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <button className="visit-button" onClick={() => navigate(`/${product.route}`)}>
                Visit
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="home-container">
        <h4>© 2025 Fresh Mart. All rights reserved.</h4><br />
        <h4>Contact us: kusumanetti2420@gmail.com</h4><br />
        <h4>Call us : 6231313234</h4>
        <h1>For support Call Our Customer Service</h1>
      </div>
    </>
  );
}

export default Home;
