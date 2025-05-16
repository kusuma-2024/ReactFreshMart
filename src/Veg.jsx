import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addtocart } from './store';
import './Veg.css';
import { toast, ToastContainer } from 'react-toastify';

function Veg() {
  const vegProducts = useSelector((state) => state.products.veg);
  const dispatch = useDispatch();

  const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  
  // Price filter options
  const priceRanges = [
    { label: '₹0 - ₹50', value: [0, 50] },
    { label: '₹51 - ₹100', value: [51, 100] },
    { label: '₹101 - ₹200', value: [101, 200] },
    { label: '₹201 - ₹500', value: [201, 500] },
  ];

  // Filter products based on selected price ranges
  const filteredProducts = selectedPriceRange.length
    ? vegProducts.filter((product) =>
        selectedPriceRange.some(([min, max]) => product.price >= min && product.price <= max)
      )
    : vegProducts;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePriceFilterChange = (range) => {
    setSelectedPriceRange((prev) => {
      if (prev.includes(range)) {
        return prev.filter((item) => item !== range); // Remove range if already selected
      } else {
        return [...prev, range]; // Add range if not selected
      }
    });
  };

  const clearAllFilters = () => {
    setSelectedPriceRange([]); // Clears all selected price ranges
  };

  return (
    <>
    <ToastContainer position='top-left'  autoClose={5000}/>
      <div className="veg-container">
        <h3 className="veg-title">Explore Our Fresh Veg Items</h3>

        {/* Price Filter */}
        <div className="price-filter">
          <h4>Filter by Price</h4>
          {priceRanges.map((range) => (
            <div key={range.label}>
              <input
                type="checkbox"
                id={range.label}
                checked={selectedPriceRange.some(
                  ([min, max]) => range.value[0] === min && range.value[1] === max
                )}
                onChange={() => handlePriceFilterChange(range.value)}
              />
              <label htmlFor={range.label}>{range.label}</label>
            </div>
          ))}
          <button onClick={clearAllFilters} className="clear-filters">
            Clear Filters
          </button>
        </div>

        {/* Display Products */}
        <ul className="card-grid">
          {currentItems.map((product, index) => (
            <li key={index} className="card">
              <img src={product.image} alt={product.name} className="veg-image" />
              <div className="card-content">
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button onClick={() => {dispatch(Addtocart(product));toast.success("product added to cart successfully");}}>Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>

        {/* Pagination */}
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

export default Veg;