import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addtocart } from './store';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Choclate.css';

function Choclate() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.Choclate);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const filteredProducts = allProducts.filter(product => product.price <= maxPrice);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ToastContainer position="top-left" autoClose={5000} />
      <div className="choclate-wrapper">
        <div className="choclate-container">

          <h1>Chocolate Products</h1>

          <div className="price-filter">
            <label>Filter by Price: ₹{maxPrice}</label>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(Number(e.target.value));
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="product-grid">
            {currentProducts.length > 0 ? (
              currentProducts.map((product, index) => (
                <div key={index} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-info">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">₹{product.price.toFixed(2)}</p>
                    <button
                      onClick={() => {
                        dispatch(Addtocart(product));
                        toast.success('Product added to cart successfully!');
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found below ₹{maxPrice}.</p>
            )}
          </div>

          <div className="pagination">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={number === currentPage ? 'active' : ''}
              >
                {number}
              </button>
            ))}

            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Choclate;
