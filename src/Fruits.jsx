import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addtocart } from './store';
import './Fruts.css';
import { toast, ToastContainer } from 'react-toastify';

function Fruits() {
  const dispatch = useDispatch();
  const fruitProducts = useSelector((state) => state.products.Fruits);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const itemsPerPage = 8;

  // Filtered products based on search and price
  const filteredProducts = fruitProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = maxPrice === '' || product.price <= parseFloat(maxPrice);
    return matchesSearch && matchesPrice;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ToastContainer position="top-left" autoClose={5000} />
      <div className="fruits-container">
        <h3 className="fruits-title">Explore Our Fresh Fruit Items</h3>

        <div className="filter-controls">
          <input
            type="text"
            placeholder="Search fruits..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <input
            type="number"
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <ul className="card-grid">
          {currentItems.map((product) => (
            <li key={product.id} className="card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="card-content">
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button
                  onClick={() => {
                    dispatch(Addtocart(product));
                    toast.success('Product added to cart successfully!');
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          {[...Array(pageCount)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pageCount}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Fruits;
