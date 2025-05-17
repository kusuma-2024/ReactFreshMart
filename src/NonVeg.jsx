import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Addtocart } from './store';
import './Nonveg.css'
import { toast, ToastContainer } from 'react-toastify';

function NonVeg() {
  const nonVegProducts = useSelector((state) => state.products.Nonveg);
  const dispatch = useDispatch();

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);

  // Filter products based on selected price range
  const filteredProducts = useMemo(() => {
    return nonVegProducts.filter(
      (product) =>
        product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1]
    );
  }, [nonVegProducts, selectedPriceRange]);

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle price range change
  const handlePriceRangeChange = (event) => {
    const value = event.target.value;
    const [min, max] = value.split('-').map(Number);
    setSelectedPriceRange([min, max]);
    setCurrentPage(1); // Reset to first page when price range changes
  };

  return (
    <>
     <ToastContainer position='top-left'  autoClose={5000}/>

    <div className="nonveg-container">
      <h3 className="nonveg-title">Explore Our Delicious Non-Veg Items</h3>

      {/* Price Range Filter */}
      <div className="price-filter">
        <label htmlFor="price-range">Filter by Price: </label>
        <select id="price-range" value={selectedPriceRange.join('-')} onChange={handlePriceRangeChange}>
          <option value="0-1000">All Prices</option>
          <option value="0-100">₹0 - ₹100</option>
          <option value="100-500">₹100 - ₹500</option>
          <option value="500-1000">₹500 - ₹1000</option>
          <option value="1000-2000">₹1000 - ₹2000</option>
          <option value="2000-5000">₹2000 - ₹5000</option>
        </select>
      </div>

      <ul className="card-grid">
        {currentItems.map((product, index) => (
          <li key={index} className="card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="card-content">
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button onClick={() => {dispatch(Addtocart(product));toast.success("product added to cart successfully");}}>Add to Cart</button>
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
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === pageCount}>
          Next
        </button>
      </div>
    </div>
    </>
  );
}

export default NonVeg;
