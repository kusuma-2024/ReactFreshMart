import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Addtocart} from './Store';
import './Choclate.css';
import { toast, ToastContainer } from 'react-toastify';

function Choclate() {
  const dispatch = useDispatch();

  const Choclateproducts = useSelector(state => state.products.Choclate);

  return (
    <>
    <ToastContainer position='top-left'  autoClose={5000}/>
    <div className="choclate-container">
      <h1>These are Choclate Products...</h1>
      <div className="product-grid">
        {Choclateproducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">₹{product.price}</p>
            <button onClick={() => {dispatch(Addtocart(product));toast.success("product added to cart successfullly !")}}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Choclate