import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addtocart } from './Store';
import './Fruts.css';
import { toast, ToastContainer } from 'react-toastify';

function Fruits() {
  const dispatch = useDispatch();
  const fruitProducts = useSelector((state) => state.products.Fruits);

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fruitProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const pageCount = Math.ceil(fruitProducts.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <ToastContainer position='top-left'  autoClose={5000}/>
    <div className="fruits-container">
      <h3 className="fruits-title">Explore Our Fresh Fruit Items</h3>
      <ul className="card-grid">
        {currentItems.map((product) => (
          <li key={product.id} className="card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="card-content">
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button onClick={() => {dispatch(Addtocart(product));toast.success("product added to cart successfullly !")}}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
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
